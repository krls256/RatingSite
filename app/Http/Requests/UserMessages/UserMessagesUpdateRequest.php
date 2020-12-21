<?php

namespace App\Http\Requests\UserMessages;

use Illuminate\Foundation\Http\FormRequest;

class UserMessagesUpdateRequest extends FormRequest
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
            'user_name' => 'string|required|max:256|min:1',
            'user_email' => 'string|required|max:256|email|min:1',
            'user_message' => 'string|required|min:1',
            'is_send' => 'required|numeric|min:0|max:1',
            'is_checked' => 'required|numeric|min:0|max:1',
        ];
    }
}
