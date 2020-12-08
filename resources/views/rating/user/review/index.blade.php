@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    @include('rating.user.userIncludes.searchBar')
    <div class="splitter pt-6 ph-4">
        @include('rating.user.review.reviewIncludes.bigColumn')
        @include('rating.user.review.reviewIncludes.sideColumn')
    </div>
    @include('rating.user.userIncludes.forms.addReviewAnswerForm')
@endsection
