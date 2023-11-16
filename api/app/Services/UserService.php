<?php

namespace App\Services;

use App\Http\Requests\IUserCreateRequest;
use App\Http\Requests\UserCreateRequest;
use App\Models\User;

class UserService
{
    public function remove(int $id)
    {
        try {
            return User::query()
            ->where('id', $id)
            ->delete();
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }

    public function update(IUserCreateRequest $user)
    {
        try {
            $userExists = User::query()->where('id', '=', auth()->user()->id)->first();
            if (!$userExists) {
                throw new \Exception('Usuário não identificado.');
            }

            if (count(explode(' ', $user->name)) < 2) {
                throw new \Exception('Nome do usuário é curto demais.');
            }

            return User::query()->where('id', auth()->user()->id)->update(
                [
                    'name' => $user->name,
                    // 'email' => $user->email,
                    // 'password'=> $user->password,
                    'cpf' => $user->cpf,
                    'birthday' => $user->birthday,
                    'photo' => $user->photo,
                    //'role' => $user->role,
                    // telephone' => $user->telephone,
                ]
            );
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }

    public function create(IUserCreateRequest $user)
    {
        try {
            $emailExists = User::query()->where('email', '=', $user->email)->first();

            if ($emailExists) {
                throw new \Exception('E-mail já associado à um usuário.');
            }

            if (count(explode(' ', $user->name)) < 2) {
                throw new \Exception('Nome do usuário é curto demais.');
            }

            return User::query()->create(
                [
                    'name' => $user->name,
                    'email' => $user->email,
                    'password'=> $user->password,
                    'cpf' => $user->cpf,
                    'birthday' => $user->birthday,
                    'photo' => $user->photo,
                    //'role' => $user->role,
                    // telephone' => $user->telephone,
                ]
            );
        } catch (\Exception $e) {
            throw new \Exception ($e->getMessage());
        }
    }
}