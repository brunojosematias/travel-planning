<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class TripCreateRequest extends CustomRequest implements ITripCreateRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            'destino' => 'required|max:50',
            'data_inicio' => 'required|date',
            'data_fim' => 'required|date',
            'orcamento' => 'required|numeric',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array {
        return [
            'destino.max' => 'Insira um destino válido',
            'data_inicio.date' => 'Data de inicio inválido!',
            'data_fim.date' => 'Data de inicio inválido!',
        ];
    }
}
