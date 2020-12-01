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

            "company_yandex_map_link" => Str::random(9),
            "company_description" => Str::random(23),
            "company_description_styles" => '',
            "company_logo_link" => $data->logo_link
        ];
        return $result;
    }
}
