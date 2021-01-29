@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    @include('rating.user.userIncludes.searchBar')
    <div class="splitter pt-6 ph-4">
        @include('rating.user.articles.articlesIncludes.bigColumn')
        @include('rating.user.articles.articlesIncludes.sideColumn')
    </div>
    @include('rating.user.userIncludes.forms.leaveReviewForm')
@endsection

@section('meta')
    <link rel="canonical" href="/article/{{$article->article_slug}}" />
@endsection
