<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiCompanyUpdateRequest extends FormRequest
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
            'company_city' => 'string|nullable',
            'company_address' => 'string|nullable',
            'company_creating_date' => 'date|nullable',
            'company_description' => 'string|nullable',
            'company_description_styles' => 'string|nullable',
            'company_email' => 'email|nullable',
            'company_fb' => 'string|nullable|url',
            'company_instagram' => 'string|nullable|url',
            'company_telegram' => 'string|nullable|url',
            'company_ok' => 'string|nullable|url',
            'company_twitter' => 'string|nullable|url',
            'company_viber' => 'string|nullable',
            'company_vk' => 'string|nullable|url',
            'company_whatsapp' => 'string|nullable',
            'company_yandex_map_link' => 'string|nullable|url',
            'company_phone' => 'string|nullable',
            'company_site' => 'string|nullable|url',
            'company_logo_link' => 'string|nullable',
            'company_name' => 'string|nullable',
            'company_slug' => 'string|nullable',
            'company_tin' => 'string|nullable',
        ];
    }
}
