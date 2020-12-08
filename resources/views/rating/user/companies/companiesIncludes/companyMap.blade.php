@if($company->company_yandex_map_link)
<div class="company__map pt-3">
    <iframe src="{{$company->company_yandex_map_link}}" width="100%" height="100%" frameborder="0"></iframe>
</div>
@endif
