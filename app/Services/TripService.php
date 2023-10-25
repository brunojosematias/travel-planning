<?php

namespace App\Services;

use App\Enums\StatusEnum;
use App\Http\Requests\TripCreateRequest;
use App\Models\User;
use App\Models\Viagem;
use Illuminate\Http\Request;

class TripService
{
    public function create(TripCreateRequest $trip)
    {
        try {
            return Viagem::query()->create(
                [
                    'user_id' => auth()->user()->id,
                    'data_inicio' => $trip->data_inicio,
                    'data_fim' => $trip->data_fim,
                    'destino' => $trip->destino,
                    'orcamento' => $trip->orcamento,
                    'status' => StatusEnum::ACTIVED->value
                ]
            );
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