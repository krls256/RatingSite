<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiImagesChangeRequest extends FormRequest
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
            'data' => 'array',
            'data.*.is_published' => 'numeric|min:0|max:1',
            'data.*.is_on_company_page' => 'numeric|min:0|max:1'
        ];
    }
}
