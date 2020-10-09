<?php


namespace App\Services;


use Illuminate\Support\Collection;

class FindCompanyIdService
{
    public function find(Collection $companies, string $id, int $source_id) {
        switch ($source_id) {
            case 0: $field = 'company_yandex_id';break;
            case 1: $field = 'company_google_id';break;
            case 2: $field = 'company_otzovick_id';break;
            case 3: $field = 'company_yell_id';break;
            case 4: $field = 'company_flamp_id';break;
        }
        $result = $companies->where($field, '=', $id)->first();
        if($result) {
            return $result->company_id;
        } else {
            throw new \Exception("Не удалось найти id компании");
        }
    }
}
