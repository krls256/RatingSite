<?php

namespace App\Http\Requests\UserMessages;

use Illuminate\Foundation\Http\FormRequest;

class UserMessagesFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_name' => 'string|required|max:256',
            'user_email' => 'string|required|max:256|email',
            'user_message' => 'string|required',
        ];
    }

    public function messages()
    {
        return [
            'user_name.string' => 'Неверный формат Ф.И.О.',
            'user_name.required' => 'Ф.И.О. - это обязательное поле',
            'user_name.max' => 'Слишком длинное Ф.И.О.',
            'user_email.string' => 'Неверный формат Email',
            'user_email.required' => 'Email - это обязательное поле',
            'user_email.max' => 'Слишком длинный Email',
            'user_email.email' => 'Поле не является Email-ом',
            'user_message.string' => 'Неверный формат письма',
            'user_message.required' => 'Письмо - это обязательное поле'
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator)
        {
            if ($validator->failed())
            {
                $validator->errors()->add('second', '');
            }
        });
    }
}
