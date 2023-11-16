<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viagem extends Model
{
    use HasFactory;

    protected $table = 'viagens';

    protected $fillable = ['destino', 'data_inicio', 'data_fim', 'orcamento', 'user_id', 'status'];
}
