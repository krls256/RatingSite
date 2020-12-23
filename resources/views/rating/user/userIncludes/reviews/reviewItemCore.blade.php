<div class="reviews__item-info">
    <h4 class="reviews__item-name">{{$review->reviewer_name}}</h4>
    <time datetime="{{$review->review_date}}" class="reviews__item-date">{{$review->BeautifulDate}}</time>
    <div class="reviews__item-stars">
        @include('rating.user.userIncludes.stars', ['rate' => $review->review_mark])
    </div>
    @if($review->review_mark > 3)
        <div class="reviews__positive">
                <span class="reviews__item-span">
                    РЕКОМЕНДУЮ КОМПАНИЮ
                </span>
        </div>
    @else
        <div class="reviews__negative">
                <span class="reviews__item-span">
                    НЕ РЕКОМЕНДУЮ КОМПАНИЮ
                </span>
        </div>
    @endif
</div>
<p class="reviews__item-content">{{$review->review_text}}</p>
<div class="reviews__item-leave">
    <a href="{{route('rating.user.reviews.index', $review->review_id)}}" class="reviews__item-answers">{{$review->answers_count}}</a>
    <a href="#" class="reviews__item-leave-answer" data-toggle="addReviewAnswer">Ответить</a>
</div>
@if($review->images->count() > 0)
    <ul class="reviews__images">
        @foreach($review->images as $image)
            <li class="reviews__image-wrapper">
                <img src="{{$image->image_link}}" alt="Фоторгафия из отзыва номер {{$image->image_id}}" class="reviews__image">
            </li>
        @endforeach
    </ul>
@endif
