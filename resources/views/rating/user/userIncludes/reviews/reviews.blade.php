<section class="reviews">
    <div class="reviews__starter">
        <h1 class="reviews__header h h--main">Последние отзывы о компании {{$company->company_name}}</h1>
        <div class="reviews__button-wrapper">
            @include('rating.user.userIncludes.addReviewButton')
        </div>
    </div>
    <ul class="reviews__list">
        @foreach($reviews as $review)
            @include('rating.user.userIncludes.reviews.reviewItem', ['review' => $review])
        @endforeach
    </ul>
    {{$reviews->links()}}
</section>
