@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    <div class="splitter pt-6 ph-4">
        @include('rating.user.videos.videosIncludes.bigColumn')
        @include('rating.user.videos.videosIncludes.sideColumn')
    </div>
    @include('rating.user.videos.videosIncludes.videoPlayer')
@endsection

@section('meta')
    <link rel="canonical" href="{{ route('rating.user.videos') }}" />
    @if($videos->currentPage() !== 1)
        <link rel="prev" href="{{ route('rating.user.videos') }}?page={{$videos->currentPage() - 1}}" />
    @endif
    @if($videos->currentPage() !== $videos->lastPage())
        <link rel="next" href="{{ route('rating.user.videos') }}?page={{$videos->currentPage() + 1}}" />
    @endif

@endsection
