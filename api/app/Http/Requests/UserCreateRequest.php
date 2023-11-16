<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class UserCreateRequest extends CustomRequest implements IUserCreateRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            'email' => ['required', 'email'],
            'name' => 'required|min:5|max:50',
            'password' => 'required|min:5|max:10',
            'cpf' => 'required|numeric|min:11',
            'rg' => 'nullable|numeric|min:11',
            'photo' => 'nullable|max:250',
            'birthday' => 'required|date',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array {
        return [
            'email.email' => 'E-mail inválido!',
            'email.unique' => 'E-mail em uso!',
            'name.min' => 'Um nome deve ter pelo menos 5 caracteres!',
            'name.max' => 'Um nome deve ter até 50 caracteres!',
            'password.min' => 'A senha deve ter pelo menos 5 caracteres!',
            'photo.max' => 'A foto não pode ser superior a 250 caracteres!',
            //'password.confirmed' => 'As senhas devem ser iguais!',
            'cpf.min' => 'Um CPF deve conter pelo menos 11 digitos!',
            'rg.min' => 'Um RG deve conter pelo menos 11 digitos!',
            'birthday.date' => 'Data de nascimento inválida!',
        ];
    }
}
