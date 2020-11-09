<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiReviewUpdateRequest extends FormRequest
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
            'reviewer_name' => 'string|nullable',
            'review_text' => 'string|nullable',
            'review_date' => 'date|nullable',
            'review_mark' => 'numeric|min:1|max:5',
            'company_id' => 'numeric|min:1',
            'source_id' => 'numeric|min:0|max:4',
            'is_published' => 'numeric|min:0|max:1'
        ];
    }
}
