<?php

namespace App\Http\Requests\Headers;

use Illuminate\Foundation\Http\FormRequest;

class ApiHeadersUpdateRequest extends FormRequest
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
            'header_id' => 'required|exists:headers,header_id',
            'header_key' => 'required|exists:headers,header_key',
            'header_value' => 'required|string|min:0|max:20000',
            'header_description' => 'required|string|min:0|max:20000',
        ];
    }
}
