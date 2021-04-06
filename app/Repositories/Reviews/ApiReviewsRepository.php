<?php


namespace App\Repositories\Reviews;

use App\Models\Reviews as Model;
use App\Repositories\ApiRepository;
use DB;

class ApiReviewsRepository extends ApiRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getReviewsPaginate($count = 15, $options = [])
    {
        $column = ['review_id', 'review_date', 'reviewer_name', 'review_mark', 'is_published'];
        $response = $this->startCondition()
            ->select($column);
        $response = $this->addOrder($response, $options);
        $response = $this->addFilters($response, $options);
        $response = $response->paginate($count);
        return $response;
    }

    public function getEdit($id)
    {
        $column = ['review_id', 'review_place_in_top_10', 'is_published', 'review_date', 'review_link',
            'review_mark', 'reviewer_name', 'source_id', 'review_text', 'company_id',];
        $response = $this->startCondition()
            ->select($column)
            ->where('review_id', $id)
            ->first();
        return $response;
    }

    /**
     * @param array $ids
     * @return bool
     */

    private function publishReviews(array $ids)
    {
        try
        {
            $column = ['review_id', 'is_published'];
            $this->startCondition()
                ->select($column)
                ->whereIn('review_id', $ids)
                ->update(['is_published' => 1]);
            return true;
        } catch (\Exception $e)
        {
            \Log::info($e);
            return false;
        }

    }

    /**
     * @param array $ids
     * @return bool
     */

    private function unpublishReviews(array $ids)
    {
        try
        {
            $column = ['review_id', 'is_published'];
            $this->startCondition()
                ->select($column)
                ->whereIn('review_id', $ids)
                ->update(['is_published' => 0]);
            return true;
        } catch (\Exception $e)
        {
            \Log::info($e);
            return false;
        }
    }

    /**
     * @param array $ids_publish
     * @param array $ids_unpublish
     * @return bool
     */

    public function setPublish(array $ids_publish, array $ids_unpublish)
    {
        DB::beginTransaction();
        $res1 = $this->publishReviews($ids_publish);
        $res2 = $this->unpublishReviews($ids_unpublish);
        $res = $res1 && $res2;
        if ($res)
            DB::commit();
        else
            DB::rollBack();

        return $res;
    }
}
