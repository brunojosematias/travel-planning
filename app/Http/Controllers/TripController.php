<?php

namespace App\Http\Controllers;

use App\Http\Requests\TripCreateRequest;
use App\Services\TripService;
use Exception;
use Illuminate\Http\Request;

class TripController extends Controller
{
    protected TripService $tripService;

    public function __construct(TripService $tripService)
    {
        $this->tripService = $tripService;
    }

    public function register(TripCreateRequest $register)
    {
        try {
            $response = $this->tripService->create($register);
            if ($response) {
                return response('Cadastro efetuado com sucesso!', 200);
            }
            return response('Falha ao cadastrar', 500);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            $response = $this->tripService->show($id);
            if ($response) {
                return response(['data' => $response], 200);
            }
            return response(['data' => 'Falha ao cadastrar'], 500);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function showAll(Request $requets)
    {
        try {
            $response = $this->tripService->showAll($requets);
            if ($response) {
                return response(['data' => $response], 200);
            }
            return response(['data' => 'Falha ao cadastrar'], 500);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

}
