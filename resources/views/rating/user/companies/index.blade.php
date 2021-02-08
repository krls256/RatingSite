@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    @include('rating.user.userIncludes.searchBar')
    <div class="splitter pt-6 ph-4">
        @include('rating.user.companies.companiesIncludes.bigColumn')
        @include('rating.user.companies.companiesIncludes.sideColumn')
    </div>
    @include('rating.user.userIncludes.forms.leaveReviewForm', ['companies' => $company->getSelfCollection()])
    @include('rating.user.userIncludes.forms.addReviewAnswerForm')
@endsection

@section('meta')
    <link rel="canonical" href="{{ route('rating.user.companies', $company->company_slug) }}" />
    @if($reviews->currentPage() !== 1)
        <link rel="prev"
              href="{{ route('rating.user.companies', $company->company_slug) }}?page={{$reviews->currentPage() - 1}}" />
    @endif
    @if($reviews->currentPage() !== $reviews->lastPage())
        <link rel="next"
              href="{{ route('rating.user.companies', $company->company_slug) }}?page={{$reviews->currentPage() + 1}}" />
    @endif
@endsection
