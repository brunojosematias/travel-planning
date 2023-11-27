<?php

namespace App\Http\Requests;


class UserUpdatePhotoRequest extends CustomRequest implements IUserCreateRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            'photo' => 'nullable|max:250',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array {
        return [
            'photo.max' => 'A foto não pode ser superior a 250 caracteres!',
        ];
    }
}
