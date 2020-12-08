<?php


namespace App\Repositories\Reviews;


use App\Models\Reviews as Model;
use App\Repositories\CoreRepository;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;


class UserReviewsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function createNewReview($data, $images)
    {
        $data['source_id'] = -1;
        $data['is_published'] = 0;
        $data['review_date'] = $data['review_date'] === null ? Carbon::now() : $data['review_date'];

        $this->storeTransaction($data, $images);
        return true;
    }

    private function storeTransaction($review, Collection $images)
    {
        DB::transaction(function () use ($review, $images)
        {
            $review['review_link'] = '/review';
            $item = $this->startCondition()
                ->create($review);
            $id = $item->review_id;
            $item->update(['review_link' => '/review/' . $id]);
            if ($item)
            {
                $images->each(function ($image) use ($item)
                {
                    $item->images()
                        ->create($image);
                });
            }
        });
    }

    public function getCompanyReviewsPagination(int $id, int $count = 8)
    {
        $response = $this->paginationBase($id)
            ->paginate($count);
        return $response;
    }

    public function getCompanyPositiveReviewsPagination(int $id, int $count = 8)
    {
        $response = $this->paginationBase($id)
            ->where('review_mark', '>', 3)
            ->paginate($count);

        return $response;
    }

    public function getCompanyNegativeReviewsPagination(int $id, int $count = 8)
    {
        $response = $this->paginationBase($id)
            ->where('review_mark', '<=', 3)
            ->paginate($count);

        return $response;
    }

    private function paginationBase(int $id)
    {
        $column =
            ['review_id', 'company_id', 'review_date', 'reviewer_name', 'is_published', 'review_text', 'review_mark'];

        $response = $this->startCondition()
            ->select($column)
            ->where('company_id', $id)
            ->where('is_published', 1)
            ->withCount(['answers' => function ($query)
            {
                $query->where('is_published', 1);
            }])
            ->with(['images' => function ($query)
            {
                $column = ['image_id', 'image_link', 'review_id', 'is_published'];
                $query->select($column)
                    ->where('is_published', 1);
            }])
            ->orderBy('review_date', 'desc');

        return $response;
    }

    public function getReviewById(int $review_id)
    {
        $column =
            ['review_id', 'company_id', 'review_date', 'reviewer_name', 'is_published', 'review_text', 'review_mark'];

        $response = $this->startCondition()
            ->select($column)
            ->where('review_id', $review_id)
            ->with([
                'answers' => function ($query)
                {
                    $column =
                        ['review_answer_id', 'reviewer_answer_name', 'review_answer_text', 'review_id', 'is_published',
                            'created_at'];
                    $query->select($column)
                        ->where('is_published', 1);
                },
                'images' => function ($query)
                {
                    $column = ['image_id', 'image_link', 'review_id', 'is_published'];
                    $query->select($column)
                        ->where('is_published', 1);
                }])
            ->first();

        $response->answers_count = $response->answers->count();
        return $response;
    }
}
