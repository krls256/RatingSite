@if($company->company_yandex_map_link)
<div class="company__map mt-3">
    <iframe src="{{$company->company_yandex_map_link}}" ></iframe>
</div>
@endif
