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
    <link rel="canonical" href="/companies/{{$company->company_slug}}" />
@endsection
