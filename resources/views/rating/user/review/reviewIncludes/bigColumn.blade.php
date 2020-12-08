<div class="splitter__main">
    <section class="reviews__item reviews__item--limit" data-identifier="{{$review->review_id}}">
        @include('rating.user.userIncludes.reviews.reviewItemCore')
        @if($review->answers->count() > 0)
            <ul class="reviews__answers">
                @foreach($review->answers as $answer)
                    <li class="reviews__answer">
                        <div class="reviews__answer-header-wrapper pv-1">
                            <h4 class="reviews__answer-name">{{$answer->reviewer_answer_name}}</h4>
                            <time class="reviews__answer-date" datetime="{{$answer->created_at}}">{{$answer->BeautifulDate}}</time>
                        </div>
                        <p class="reviews__answer-content p-1">{{$answer->review_answer_text}}</p>
                    </li>
                @endforeach
            </ul>
        @endif
    </section>
</div>
