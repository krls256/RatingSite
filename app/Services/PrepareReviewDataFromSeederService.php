<?php


namespace App\Services;


class PrepareReviewDataFromSeederService
{
    public function prepare($data, $company_id) {
        $result = [
            'review_date' => $data->date,
            'review_mark' => $data->mark,
            'reviewer_name' => $data->name,
            'review_link' => $data->link,
            'review_text' => $data->text,
            'source_id' => $data->source_id,
            'company_id' => $company_id
         ];

        return $result;
    }
}
