<?php

use App\Repositories\OtherActionsImagesRepository;
use App\Repositories\SelectReviewsRepository;
use Illuminate\Database\Seeder;

class ImagesSeeder extends Seeder
{
    private $reviews;
    private $images;

    private $imagesToInsert = [];
    private $imagesRepository;

    public function __construct(SelectReviewsRepository $reviewsRepository,
        OtherActionsImagesRepository $imagesRepository)
    {
        $this->reviews = $reviewsRepository->getAllReviewsWithLinks();
        $unsortedFileReviews = collect(json_decode(file_get_contents('./resources/files-for-db/reviews.json')));
        $this->images = $unsortedFileReviews->filter(function ($review)
        {
            if (count($review->imgs) === 0)
            {
                return false;
            } else
            {
                return true;
            }
        });

        $this->imagesRepository = $imagesRepository;
    }

    public function run()
    {
        $this->findAllIds();
        $this->imagesRepository->insertNewImages($this->imagesToInsert);
    }

    private function findAllIds()
    {
        $count = $this->reviews->count();

        $this->images->each(function ($image) use ($count)
        {
            $link = $image->link;
            $reviewInDB = null;

            for ($i = 0; $i < $count; $i++)
            {
                if ($this->reviews[$i]->review_link === $link)
                {
                    $reviewInDB = $this->reviews[$i]->review_id;
                    break;
                }
            }
            if ($reviewInDB === null)
            {
                throw new Exception("$link, не найдена в колекции отзывов");
            }

            for ($i = 0; $i < count($image->imgs); $i++)
            {
                $this->imagesToInsert[] = [
                    'image_link' => $image->imgs[$i],
                    'review_id' => $reviewInDB
                ];
            }
        });
    }
}
