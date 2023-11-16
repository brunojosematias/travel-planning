<?php

namespace App\Services;

use App\Enums\StatusEnum;
use App\Http\Requests\ITripCreateRequest;
use App\Models\User;
use App\Models\Viagem;
use Illuminate\Http\Request;

class TripService
{
    public function create(ITripCreateRequest $trip)
    {
        try {
            if (auth()->user())
                $id = auth()->user()->id;
            else
                $id = $trip->user_id;
            return Viagem::query()->create(
                [
                    'user_id' => $id,
                    'data_inicio' => $trip->data_inicio,
                    'data_fim' => $trip->data_fim,
                    'destino' => $trip->destino,
                    'orcamento' => $trip->orcamento,
                    'status' => StatusEnum::ACTIVED->value,
                    'photo' => $trip->photo
                ]
            );
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }

    public function update(ITripCreateRequest $trip, int $id)
    {
        try {
            if (auth()->user())
                $id = auth()->user()->id;
            else
                $id = $trip->user_id;
            return Viagem::query()->where('id', $trip->id)->where('user_id', $id)->update(
                [
                    'data_inicio' => $trip->data_inicio,
                    'data_fim' => $trip->data_fim,
                    'destino' => $trip->destino,
                    'orcamento' => $trip->orcamento,
                    'photo' => $trip->photo
                ]
            );
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }

    public function remove(int $id)
    {
        try {
            return Viagem::query()
            ->where('id', $id)
            ->delete();
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }

    public function finish(int $id)
    {
        try {
            return Viagem::query()
            ->where('id', $id)
            ->where('user_id', auth()->user()->id)
            ->where('status', StatusEnum::ACTIVED->value)
            ->update(
                ['status' => StatusEnum::FINISHED->value]
            );
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            return Viagem::query()->where('id', $id)->firstOrFail();
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }

    public function showAll(Request $request, int $limit = 10)
    {
        try {
            $query = Viagem::query();
            if (isset($request->data_inicio)) {
                $query->where('data_inicio', '>=', $request->data_inicio);
            }
            if (isset($request->data_fim)) {
                $query->where('data_fim', '<=', $request->data_fim);
            }
            return $query->paginate($limit);
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }
}