<?php


namespace App\Services\CreateNewReviewServices;

use App\Repositories\Reviews\UserReviewsRepository;
use Illuminate\Http\Request;

class CreateNewReviewMainService
{
    private $request;
    private $repository;

    public function __construct(Request $request, UserReviewsRepository $repository)
    {
        $this->request = $request;
        $this->repository = $repository;
    }

    public function index()
    {
        $data = $this->request->all();
        $result = collect($this->request->file('images'))->map(function ($item) {
            return ['image_link' => '/storage/'.$item->store('/userReviews', ['disk' => 'public'])];
        });

        $res2 = $this->repository->createNewReview($data, $result);

        return $res2;

    }
}
