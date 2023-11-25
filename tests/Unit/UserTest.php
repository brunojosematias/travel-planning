<?php

namespace Tests\Unit;

use App\Http\Requests\ITripCreateRequest;
use App\Http\Requests\IUserCreateRequest;
use App\Http\Requests\UserCreateRequest;
use App\Models\User;
use App\Services\TripService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Tests\TestCase;

class UserTest extends TestCase
{
    protected UserService $userService;
    protected TripService $tripService;

    public function setUp(): void
    {
        parent::setUp();
        $this->userService = new UserService();
        $this->tripService = new TripService();
    }

    /**
     * A basic unit test example.
     */
    public function test_create_user(): void
    {
        $create = new class implements IUserCreateRequest {
            public $name = '';
            public $email = '';
            public $password = '';
            public $cpf = '';
            public $birthday = '';
            public $telephone = '';
        };
        $create->name = 'nome sobrenome';
        $create->email = 'teste3@teste.com';
        $create->password = 'a12345';
        $create->cpf = '0000000003';
        $create->birthday = '1998-02-10';
        $create->telephone = '000000000';
        $response = $this->userService->create($create);
        // Criando usuário
        $this->assertInstanceOf("App\Models\User", $response, "Criando usuário");
        $this->userService->remove($response->id);
    }

    /**
     * A basic unit test example.
     */
    public function test_create_travel(): void
    {
        $createTrip = new class implements ITripCreateRequest {
            public $data_inicio = '2023-05-10';
            public $data_fim = '2023-05-12';
            public $orcamento = 3000;
            public $destino = 'Fortaleza';
            public $user_id = '';
        };
        $createUser = new class implements IUserCreateRequest {
            public $name = 'nome sobrenome';
            public $email = 'teste3@teste.com';
            public $password = 'a12345';
            public $cpf = '0000000003';
            public $birthday = '1998-02-10';
            public $telephone = '000000000';
        };

        $user = $this->userService->create($createUser);
        $createTrip->user_id = $user->id;

        // Criando viagem
        $response = $this->tripService->create($createTrip, "Criando viagem");
        $this->assertInstanceOf("App\Models\Viagem", $response);

        $this->tripService->remove($response->id);
        $this->userService->remove($user->id);
    }

     /**
     * A basic unit test example.
     */
    public function test_show_one_travel(): void
    {
        $createTrip = new class implements ITripCreateRequest {
            public $data_inicio = '2023-05-10';
            public $data_fim = '2023-05-12';
            public $orcamento = 3000;
            public $destino = 'Fortaleza';
            public $user_id = '';
        };
        $createUser = new class implements IUserCreateRequest {
            public $name = 'nome sobrenome';
            public $email = 'teste3@teste.com';
            public $password = 'a12345';
            public $cpf = '0000000003';
            public $birthday = '1998-02-10';
            public $telephone = '000000000';
        };

        $user = $this->userService->create($createUser);
        $createTrip->user_id = $user->id;

        // Criando viagem
        $response = $this->tripService->create($createTrip, "Criando viagem");

        // Lista de viagens
        $this->assertNotEmpty($this->tripService->show($response->id)->toArray()['id']);
        $this->tripService->remove($response->id);
        $this->userService->remove($user->id);
    }

    /**
     * A basic unit test example.
     */
    public function test_show_all_travels(): void
    {
        $createTrip = new class implements ITripCreateRequest {
            public $data_inicio = '2023-05-10';
            public $data_fim = '2023-05-12';
            public $orcamento = 3000;
            public $destino = 'Fortaleza';
            public $user_id = '';
        };
        $createUser = new class implements IUserCreateRequest {
            public $name = 'nome sobrenome';
            public $email = 'teste5@teste.com';
            public $password = 'a12345';
            public $cpf = '0000000005';
            public $birthday = '1998-02-10';
            public $telephone = '000000000';
        };

        $user = $this->userService->create($createUser);
        $createTrip->user_id = $user->id;

        // Criando viagem
        $response = $this->tripService->create($createTrip, "Criando viagem");

        // Lista de viagens
        $this->assertIsArray($this->tripService->showAll(new Request())->toArray()['data'], "É uma lista de viagens");
        $this->tripService->remove($response->id);
        $this->userService->remove($user->id);
    }
}
