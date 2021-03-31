@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    <div class="splitter pt-6 ph-4">
        @include('rating.user.articles.articlesIncludes.bigColumn')
        @include('rating.user.articles.articlesIncludes.sideColumn')
    </div>
@endsection

@section('meta')
    <link rel="canonical" href="{{ route('rating.user.articles.show', $article->article_slug) }}" />
@endsection
