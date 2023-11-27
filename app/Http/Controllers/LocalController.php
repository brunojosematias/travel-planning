<?php

namespace App\Http\Controllers;

use App\Services\LocalService;

class LocalController extends Controller
{
    protected LocalService $localService;

    public function __construct(LocalService $localService)
    {
        $this->localService = $localService;
    }

    public function up()
    {
        $this->localService->up();
    }

    public function down()
    {
        $this->localService->down();
    }

    public function list()
    {
        $data = $this->localService->fetchAll();

        return response(['data' => $data], 200);
    }
}
