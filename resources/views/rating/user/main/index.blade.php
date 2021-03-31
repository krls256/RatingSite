@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    <div class="splitter ph-4">
        @include('rating.user.main.mainIncludes.bigColumn')
        @include('rating.user.main.mainIncludes.sideColumn')
    </div>
@endsection

@section('meta')
    <link rel="canonical" href="{{ route('rating.user.main') }}" />
@endsection
