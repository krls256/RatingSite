<?php

namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ApiArticleUpdateRequest extends FormRequest
{

    protected $article_id;

    public function __construct(Request $request)
    {
        $this->article_id = $request->route()->article;
    }

    /**
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
            'article_slug' => ['required','string','min:3','max:255',
                Rule::unique('articles')->ignore($this->article_id, 'article_id')],
            'article_main_image' => 'required|string',
            'article_description' => 'required|string',
            'article_content' => 'required|string',
            'is_published' => 'numeric|min:0|max:1'
        ];
    }
}
