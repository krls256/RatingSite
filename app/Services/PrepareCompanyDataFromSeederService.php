<?php


namespace App\Services;


use Illuminate\Support\Str;

class PrepareCompanyDataFromSeederService
{
    public function prepare($data) {
        $result = [
            "company_name"          => $data->name,
            "company_slug"          => Str::slug($data->name),
            "company_yandex_id"     => $data->yandex_id,
            "company_google_id"     => $data->google_id,
            "company_otzovick_id"   => $data->otzovick_id,
            "company_yell_id"       => $data->yell_id,
            "company_flamp_id"      => $data->flamp_id,

            "company_yandex_link"   => $data->yandex_link,
            "company_google_link"   => $data->google_link,
            "company_otzovick_link" => $data->otzovick_link,
            "company_yell_link"     => $data->yell_link,
            "company_flamp_link"    => $data->flamp_link,

            "company_yandex_map_link" => $data->yandex_map_link,
            "company_description" => $data->description,
            "company_description_styles" => '',
            "company_logo_link" => $data->logo_link,
            "company_site" => $data->site,
            "company_phone" => $data->phone,
            "company_instagram" => $data->instagram,
            "company_fb" => $data->fb,
            "company_vk" => $data->vk,
            "company_inn" => $data->inn,
            "company_email" => $data->email,
            "company_city" => $data->city,
            "company_address" => $data->address,
            "company_creating_date" => $data->creationDate,
            "company_ok" => $data->ok,
            "company_whatsapp" => $data->whatsapp,
            "company_viber" => $data->viber,
            "company_telegram" => $data->telegram,
            "company_twitter" => $data->twitter

        ];
        return $result;
    }
}
