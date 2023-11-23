<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UserCreateRequest;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function register(UserCreateRequest $register)
    {
        try {
            $response = $this->userService->create($register);
            if ($response) {
                return response(['data' => 'Cadastro efetuado com sucesso!'], 200);
            }
            return response(['data' => 'Falha ao cadastrar'], 500);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function update(UserCreateRequest $register)
    {
        try {
            $response = $this->userService->update($register);
            if ($response) {
                return response(['data' => 'Atualizado com sucesso!'], 200);
            }
            return response(['data' => 'Falha ao atualizar'], 500);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function login(LoginRequest $login)
    {
        try {
            if(Auth::attempt(['email' => $login->email, 'password' => $login->password]))
            { 
                $user = Auth::user(); 
                $response['token'] =  $user->createToken('neptune_mosaic')->plainTextToken; 
                $response['name'] =  $user->name;
                $response['email'] =  $user->email;
                $response['photo'] =  $user->photo;
                return response(['data' => $response], 200);
            } else { 
                return response(['data' => 'Não autorizado'], 500);
            } 
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function logout()
    {
        try {
            auth()->user()->tokens()->delete();
            return response(['data' => 'Deslogado com sucesso.' ], 200);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
