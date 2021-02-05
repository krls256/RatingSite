<?php

namespace App\Http\Requests\Reviews;

use App\Rules\ReCaptchaRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreReviewRequest extends FormRequest
{
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
            'reviewer_name' => 'required|string|min:3|max:191',
            'review_text' => 'required|string',
            'review_mark' => 'required|numeric|min:1|max:5',
            'company_id' => 'required|exists:App\Models\Companies,company_id',
            'review_date' => 'date|nullable|before:now',
            'images' => 'nullable|array|max:6',
            'images.*' => 'file|max:1024|image',
            'g-recaptcha-response' => new ReCaptchaRule()
        ];
    }

    public function messages()
    {
        return [
            'reviewer_name.required' => "Ф.И.О. - это обязательное поле",
            'reviewer_name.string' => "некорректный формат Ф.И.О.",
            'reviewer_name.min' => "Минимальная длина имени :min символов",
            'reviewer_name.max' => "Максимальная длина имени :max символов",
            'review_text.required' => "Отзыв - это обязательное поле",
            'review_text.string' => "некорректный формат Отзыва",
            'review_mark.required' => "Оценка - это обязатнльное поле",
            'review_mark.numeric' => "Оценка должна быть числом",
            'review_mark.min' => "Минимальная оценка: 1",
            'review_mark.max' => "Максимальная оценка: 5",
            'company_id.required' => "Компания - это обязательное поле",
            'company_id.exists' => "Нет такой компании",
            'review_date.date' => 'Некоректный формат даты',
            'review_date.before' => 'Указаная дата - будущее',
            'images.max' => 'Картинок не должно быть больше :max-и',
            'images.*.file' => 'Неверный формат файла',
            'images.*.max' => 'Файл не может быть больше :maxКб',
            'images.*.image' => 'Файл должен быть картинкой',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator)
        {
            if ($validator->failed())
            {
                $validator->errors()->add('first', '');
            }
        });
    }
}
