<?php

namespace App\Services;

use App\Http\Requests\IUserCreateRequest;
use App\Models\Local;
use App\Models\User;

class LocalService
{
    // Popula o banco com os dados
    public function up()
    {
        try {
            Local::create(
                [
                    'tipo' => '',
                    'nome' => 'Rio de Janeiro, RJ',
                    'link' => 'https://www.link.com'
                ]
            );

            Local::create(
                [
                    'tipo' => '',
                    'nome' => 'Fortaleza, CE',
                    'link' => 'https://www.link.com'
                ]
            );

            Local::create(
                [
                    'tipo' => '',
                    'nome' => 'São Paulo, SP',
                    'link' => 'https://www.link.com'
                ]
            );

            Local::create(
                [
                    'tipo' => '',
                    'nome' => 'Juazeiro do Norte, CE',
                    'link' => 'https://www.link.com'
                ]
            );
        } catch (\Exception $e) {
            throw new \Exception($e);
        }
    }

    // Remove os dados do banco
    public function down()
    {
        Local::query()->delete();
    }

    public function fetchAll()
    {
        return Local::query()->get();
    }
}