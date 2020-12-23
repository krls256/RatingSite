<section class="reviews">
    <div class="reviews__starter">
        <h1 class="reviews__header h h--main mr-4">{{$company->replaceName($headers['reviews'], '(data)')}}</h1>
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
