<?php


namespace App\Repositories;

use App\Models\Reviews as Model;
use Illuminate\Support\Facades\DB;


class OtherActionsReviewsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function insertNewReviews(array $data) {
        $result = DB::table('reviews')
            ->insert($data);

        if($result) {
            return true;
        } else {
            throw new \Exception("Не удалось добавить отзывы в базу");
        }
    }
}
