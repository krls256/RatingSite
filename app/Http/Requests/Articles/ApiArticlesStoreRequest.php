<?php

namespace App\Http\Requests\Articles;

use Illuminate\Foundation\Http\FormRequest;

class ApiArticlesStoreRequest extends FormRequest
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
            'article_title' => 'required|string|min:3|max:255|unique:articles',
            'article_description' => 'required|string|min:3|max:64000',
            'article_content' => 'required|string|min:3|max:16000000',
            'is_published' => 'required|numeric|min:0|max:1',
            'main' => 'required|image|max:10240',
            'other_photos' => 'array',
            'other_photos.*' => 'image|max:10240'
        ];
    }
}
