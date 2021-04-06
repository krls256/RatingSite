<?php

namespace App\Http\Requests\Reviews;

use Illuminate\Foundation\Http\FormRequest;

class ApiReviewsPublishRequest extends FormRequest
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
            'ids_publish' => 'present|array',
            'ids_publish.*' => 'numeric|min:1|exists:reviews,review_id',
            'ids_unpublish' => 'present|array',
            'ids_unpublish.*' => 'numeric|min:1|exists:reviews,review_id',
        ];
    }
}
