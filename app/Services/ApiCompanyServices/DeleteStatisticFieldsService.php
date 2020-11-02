<?php


namespace App\Services\ApiCompanyServices;


use Illuminate\Support\Collection;

class DeleteStatisticFieldsService
{
    public function clear(array $requestData) {
        $safeData = $requestData;

        unset($safeData['company_average_mark']);
        unset($safeData['company_average_mark_flamp']);
        unset($safeData['company_average_mark_google']);
        unset($safeData['company_average_mark_otzovick']);
        unset($safeData['company_average_mark_yandex']);
        unset($safeData['company_average_mark_yell']);
        unset($safeData['company_positive']);
        unset($safeData['company_negative']);
        unset($safeData['company_quantity_review']);
        unset($safeData['company_quantity_review_flamp']);
        unset($safeData['company_quantity_review_google']);
        unset($safeData['company_quantity_review_otzovick']);
        unset($safeData['company_quantity_review_yandex']);
        unset($safeData['company_quantity_review_yell']);

        return $safeData;
    }
}
