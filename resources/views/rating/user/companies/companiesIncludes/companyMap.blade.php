@if($company->company_yandex_map_link)
<div class="company__map pt-3">
    <iframe src="{{$company->company_yandex_map_link}}"></iframe>
</div>
@endif
