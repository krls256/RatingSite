@extends('layouts.user')


@section('content')
    @include('rating.user.userIncludes.aboutSite')
    <div class="splitter pt-6 ph-4">
        @include('rating.user.about.aboutIncludes.bigColumn')
        @include('rating.user.about.aboutIncludes.sideColumn')
    </div>
    @include('rating.user.userIncludes.forms.writeUsFrom')
@endsection

@section('meta')
    <link rel="canonical" href="{{ route('rating.user.about') }}" />
@endsection
