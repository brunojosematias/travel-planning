<?php

namespace App\Http\Requests;

class LoginRequest extends CustomRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:5',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'email.email' => 'E-mail inválido!',
            'email.required' => 'O e-mail é obrigatório!',
            'password.required' => 'A senha é obrigatória!',
            'password.min' => 'A senha deve ter pelo menos 5 caracteres!',
        ];
    }
}
