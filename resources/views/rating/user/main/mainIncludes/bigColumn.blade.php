<div class="splitter__main">
    <section class="before-rating">
        <div class="before-rating__line">
        <span class="before-rating__stars">
            <i class="before-rating__star"></i>
            <i class="before-rating__star"></i>
            <i class="before-rating__star"></i>
            <i class="before-rating__star"></i>
            <i class="before-rating__star"></i>
        </span>
            <h1 class="h h--page text-black">{{$headers['rating']}}</h1>
        </div>

        <div class="rating pt-6">
            <ul class="rating__list">
                @foreach($companies as $k => $company)
                    <li class="rating__list-item">
                        <a href="{{ route('rating.user.companies', $company->company_slug) }}"
                           @if($k < 3) class="rating__link rating__link--first" @else class="rating__link" @endif>
                            <div class="rating__index">
                                @if($k < 3)
                                    <span class="rating__index-value rating__index-value--first">{{++$k}}</span>
                                    <span class="rating__index-signature">Топ</span>
                                @else
                                    <span class="rating__index-value">{{++$k}}</span>
                                @endif
                            </div>
                            <div class="rating__content">
                                <img
                                    @if($company->company_logo_link) src="{{asset("/logo/$company->company_logo_link")}}"
                                    @else src="{{asset("/logo/default.png")}}" @endif
                                    alt="Логотип Компании {{$company->company_name}}"
                                    title="Логотип Компании {{$company->company_name}}"
                                    class="rating__logo">
                                <div class="rating__name">{{$company->company_name}}</div>
                                <div
                                    class="rating__stars">@include('rating.user.userIncludes.stars', ['rate' => $company->company_average_mark])</div>
                                <div
                                    class="rating__smile">@include('rating.user.userIncludes.smiles', ['data' => $company])</div>
                                <div class="rating__reviews">
                                    <span class="rating__review-text">{{$company->company_quantity_review}}</span>
                                </div>
                            </div>
                            <div @if($k <= 3) class="rating__mail rating__mail--first"
                                 @else class="rating__mail" @endif >
                            </div>
                        </a>
                    </li>
                @endforeach
            </ul>
        </div>
    </section>
</div>
