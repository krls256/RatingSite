<?php

namespace App\Http\Requests\SEO;

use Illuminate\Foundation\Http\FormRequest;

class SEOUpdateRequest extends FormRequest
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
            'id' => 'required|exists:s_e_o_attributes,id',
            'title' => 'required|string|min:3|max:255',
            'description' => 'nullable|string|max:20000',
            'keywords' => 'nullable|string|max:20000'
        ];
    }
}
