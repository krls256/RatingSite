<?php


namespace App\Repositories\Companies;

use App\Repositories\CoreRepository;
use App\Models\Companies as Model;

class ApiCompanyRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getCompaniesPaginate($count = 15, $options = [])
    {
        $column = ['company_name', 'company_id', 'company_average_mark', 'is_published'];
        $response = $this->startCondition()
            ->select($column);
        if(isset($options['orderBy'])) {
            $response = $response->orderBy($options['orderBy'], 'desc');
        }
        $response = $response->paginate($count);
        return $response;
    }

    public function getEdit($id)
    {
        $column = ['company_id', 'is_published', 'company_name', 'company_slug',
            'company_positive', 'company_negative', 'company_mark_difference',
            'company_average_mark', 'company_average_mark_google',
            'company_average_mark_yandex', 'company_average_mark_otzovick',
            'company_average_mark_yell', 'company_average_mark_flamp',
            'company_quantity_review', 'company_quantity_review_yandex', 'company_quantity_review_google',
            'company_quantity_review_otzovick', 'company_quantity_review_yell',
            'company_quantity_review_flamp',
            'company_logo_link', 'company_yandex_map_link', 'company_description',
            'company_description_styles', 'company_inn', 'company_phone',
            'company_site', 'company_email', 'company_city', 'company_address',
            'company_creating_date', 'company_fb', 'company_ok', 'company_vk',
            'company_whatsapp', 'company_viber', 'company_telegram',
            'company_twitter', 'company_instagram'];
        $response = $this->startCondition()
            ->select($column)
            ->where('company_id', $id)
            ->first();
        return $response;
    }

    public function getUpdate($id)
    {
        $column = ['company_id'];

        $response = $this->startCondition()
            ->select($column)
            ->where('company_id', $id)
            ->first();
        return $response;

    }

    public function getShortList()
    {
        $column = ['company_id', 'company_name'];
        $response = $this->startCondition()
            ->select($column)
            ->toBase()
            ->get();

        return $response;
    }
}
