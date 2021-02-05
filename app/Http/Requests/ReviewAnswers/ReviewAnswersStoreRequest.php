<?php

namespace App\Http\Requests\ReviewAnswers;

use App\Rules\ReCaptchaRule;
use Illuminate\Foundation\Http\FormRequest;

class ReviewAnswersStoreRequest extends FormRequest
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
            'g-recaptcha-response' => new ReCaptchaRule()
        ];
    }

    public function messages()
    {
        return [
            'review_id.*' => 'Что-то пошло не так',
            'reviewer_answer_name.required' => 'Имя - это обязательное поле',
            'reviewer_answer_name.string' => 'Не правильный формат имени',
            'reviewer_answer_name.max' => 'Максимальная длинна имени: :max символов',
            'review_answer_text.required' => 'Комментарий - это обязательное поле',
            'review_answer_text.string' => 'Не правильный формат комментария',
            'review_answer_text.max' => 'Максимальная длинна комментария: :max символов',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator)
        {
            if ($validator->failed())
            {
                $validator->errors()->add('third', '');
            }
        });
    }
}
