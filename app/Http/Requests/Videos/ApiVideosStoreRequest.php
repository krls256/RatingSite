<?php

namespace App\Http\Requests\Videos;

use Illuminate\Foundation\Http\FormRequest;

class ApiVideosStoreRequest extends FormRequest
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
            'video_title' => 'required|string|min:3|max:254|unique:videos',
            'video_ytid' => 'required|string|min:3|max:254|unique:videos',
            'video_description' => 'required|string|min:3|max:64000',
            'is_published' => 'numeric|min:0|max:1'
        ];
    }
}
