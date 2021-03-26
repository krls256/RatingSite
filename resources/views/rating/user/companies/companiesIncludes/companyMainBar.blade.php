<div class="company__main-bar">
    <div class="company__logo-wrapper">
        <img @if($company->company_logo_link) src="{{ asset('logo/'.$company->company_logo_link) }}" @else src="{{ asset('logo/default.png') }}" @endif
             alt="Логотип Компании {{$company->company_name}}"
             class="company__logo">
    </div>
    <div class="company__title-wrapper">
        <h1 class="company__title">{{$company->company_name}}</h1>
        <h2 class="company__top">
            <span class="company__top-key">Номер в рейтинге:</span>
            <span class="company__top-value">{{$company->company_top}}</span>
        </h2>
    </div>
    <div class="company__statistic">
        <div class="company__star">
            @include('rating.user.userIncludes.stars', ['rate' => $company->company_average_mark])
        </div>
        <div class="company__emoji">
            <a href="{{ route('rating.user.companies.positive', $company->company_slug) }}" class="company__positive">
                {{$company->company_positive}}
            </a>
            <a href="{{ route('rating.user.companies.negative', $company->company_slug) }}" class="company__negative">
                {{$company->company_negative}}
            </a>
        </div>
    </div>
</div>
