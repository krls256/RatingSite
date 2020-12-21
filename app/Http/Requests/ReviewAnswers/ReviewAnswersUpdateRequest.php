<?php

namespace App\Http\Requests\ReviewAnswers;

use Illuminate\Foundation\Http\FormRequest;

class ReviewAnswersUpdateRequest extends FormRequest
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
            'reviewer_answer_name' => 'required|string|max:191',
            'review_answer_text' => 'required|string|max:65256',
            'review_id' => 'required|numeric|exists:reviews,review_id',
            'is_published' => 'required|numeric|min:0|max:1',
            'review_answer_id' => 'required|exists:review_answers,review_answer_id'
        ];
    }
}
