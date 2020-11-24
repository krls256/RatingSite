<?php


namespace App\Repositories\Images;


use App\Models\Images as Model;
use App\Repositories\CoreRepository;
use Illuminate\Support\Collection;


class ApiImagesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getPaginate($count = 50, $company_id = 0, $is_published = null, $is_on_company_page = null)
    {
        $column = ['images.image_id', 'images.image_link',
            'images.review_id', 'images.is_published', 'images.is_on_company_page',
            'reviews.review_id', 'reviews.company_id', 'companies.company_id', 'companies.company_name'];
        $response = $this->startCondition()
            ->join('reviews', 'images.review_id', '=', 'reviews.review_id')
            ->join('companies', 'reviews.company_id', '=', 'companies.company_id')
            ->select($column);

        if ($company_id !== 0)
        {
            $response = $response->where('companies.company_id', $company_id);
        }
        if ($is_published !== null)
        {
            $response = $response->where('images.is_published', $is_published);
        }
        if ($is_on_company_page !== null)
        {
            $response = $response->where('images.is_on_company_page', $is_on_company_page);
        }
        $response = $response->paginate($count);
        return $response;
    }

    public function changeImagesState(Collection $data, $field, $value)
    {
        $ids = $data->map(function ($item)
        {
           return $item['image_id'];
        })->toArray();
        $response = $this->startCondition()
            ->whereIn('image_id', $ids)
            ->update([$field => $value]);
        return $response;

    }

}
