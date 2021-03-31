@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    <div class="splitter pt-6 ph-4">
        @include('rating.user.review.reviewIncludes.bigColumn')
        @include('rating.user.review.reviewIncludes.sideColumn')
    </div>
    @include('rating.user.userIncludes.forms.addReviewAnswerForm')
@endsection

@section('meta')
    <link rel="canonical" href="{{ route('rating.user.reviews.index', $review->review_id) }}" />
@endsection
