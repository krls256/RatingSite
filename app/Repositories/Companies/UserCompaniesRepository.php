<?php


namespace App\Repositories\Companies;


use App\Models\Companies as Model;
use App\Repositories\CoreRepository;

class UserCompaniesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getCompaniesForRating()
    {
        $column = ['company_id', 'is_published', 'company_name',
            'company_slug', 'company_positive', 'company_negative',
            'company_mark_difference', 'company_average_mark', 'company_logo_link', 'company_quantity_review'];

        $response = $this->startCondition()
            ->select($column)
            ->where('is_published', 1)
            ->orderBy('company_average_mark', 'desc')
            ->orderBy('company_mark_difference', 'desc')
            ->get();

        return $response;
    }

    public function getCompaniesForForm()
    {
        $column = ['company_id', 'is_published', 'company_name',
            'company_mark_difference', 'company_average_mark'];

        $response = $this->startCondition()
            ->select($column)
            ->where('is_published', 1)
            ->orderBy('company_mark_difference', 'desc')
            ->orderBy('company_average_mark', 'desc')
            ->toBase()
            ->get();

        return $response;
    }


    public function getCompanyForPage($slug)
    {
        $column =
            [
                'company_id', 'company_slug', 'is_published', 'company_name',
                'company_average_mark', 'company_positive', 'company_negative',
                'company_logo_link',

                'company_address', 'company_phone', 'company_inn', 'company_site', 'company_email',
                'company_creating_date', 'company_yandex_map_link', 'company_instagram',
                'company_fb', 'company_twitter', 'company_telegram', 'company_viber', 'company_whatsapp',
                'company_vk', 'company_ok', 'company_city',

                'company_description_html'];

        $response = $this->startCondition()
            ->select($column)
            ->where('company_slug', $slug)
            ->where('is_published', 1)
            ->first();
        if ($response !== null)
        {
            $response->company_top = $this->getCompanyRateIndex($response->company_id);
        }

        return $response;
    }

    private function getCompanyRateIndex(int $company_id)
    {
        $column = ['company_id', 'company_mark_difference'];
        $response = $this->startCondition()
            ->select($column)
            ->where('is_published', 1)
            ->orderBy('company_mark_difference', 'desc')
            ->toBase()
            ->get()
            ->where('company_id', $company_id)
            ->keys()
            ->first();

        return $response + 1;
    }
}
