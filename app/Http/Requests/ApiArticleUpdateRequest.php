<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiArticleUpdateRequest extends FormRequest
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
            'article_title' => 'required|string|min:3|max:255',
            'article_slug' => 'required|string|min:3|max:255|unique',
            'article_main_image' => 'required|url',
            'article_description' => 'required|string',
            'article_content' => 'required|string'
        ];
    }
}
