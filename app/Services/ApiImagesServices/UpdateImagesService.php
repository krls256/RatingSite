<?php


namespace App\Services\ApiImagesServices;


use App\Repositories\Images\ApiImagesRepository;
use Illuminate\Support\Collection;

class UpdateImagesService
{
    private $repository;

    public function __construct(ApiImagesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function main(Collection $data) {
        $result = [];

        $is_on_company_page = $data->where('is_on_company_page', 1);
        $result['is_on_company_page'] = $this
            ->repository->changeImagesState($is_on_company_page, 'is_on_company_page', 1);


        $is_published = $data->where('is_published', 1);
        $result['is_published'] = $this->repository->changeImagesState($is_published, 'is_published', 1);

        $is_not_on_company_page = $data->where('is_on_company_page', 0);
        $result['is_not_on_company_page'] = $this
            ->repository->changeImagesState($is_not_on_company_page, 'is_on_company_page', 0);

        $is_not_published = $data->where('is_published', 0);
        $result['is_not_published'] = $this->repository->changeImagesState($is_not_published, 'is_published', 0);



        return $result;
    }
}
