<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiVideoUpdateRequest extends FormRequest
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
            'video_title' => 'required|string|min:3|max:255',
            'video_ytid' => 'required|string|min:1|max:255',
            'video_description' => 'required|string'
        ];
    }
}
