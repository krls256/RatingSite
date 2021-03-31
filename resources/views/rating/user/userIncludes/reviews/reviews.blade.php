@php
    $positive = request()->route()->getName() === "rating.user.companies.positive";
    $negative = request()->route()->getName() === "rating.user.companies.negative";
@endphp

<section class="reviews" @if($positive) data-reviews="positive" @elseif($negative) data-reviews="negative" @endif>
    <div class="reviews__starter">
        <h2 class="reviews__header h h--main mr-4">{{$headers['reviews']}}</h2>

        <div class="reviews__button-wrapper">
            @include('rating.user.userIncludes.addReviewButton')
        </div>
    </div>
    <div class="reviews__controls pt-3">
            <a href="{{route('rating.user.companies.positive', $company->company_slug)}}"
               class="reviews__control reviews__control--sub-pos @if($positive) reviews__control--positive @endif" >
            </a>
            <a href="{{route('rating.user.companies.negative', $company->company_slug)}}"
               class="reviews__control reviews__control--sub-neg @if($negative) reviews__control--negative @endif">
            </a>
    </div>
    <ul class="reviews__list">
        @foreach($reviews as $review)
            @include('rating.user.userIncludes.reviews.reviewItem', ['review' => $review])
        @endforeach
    </ul>
    {{$reviews->links()}}
</section>
