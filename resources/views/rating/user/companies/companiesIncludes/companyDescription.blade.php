@if($company->company_description_html)
    <section class="company__description markdown-body">
        <h2 class="h h--regular">{!! $headers['about-company'] !!}</h2>
        {!! $company->company_description_html !!}
    </section>
@endif
