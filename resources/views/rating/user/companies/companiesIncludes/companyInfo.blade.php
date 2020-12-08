<section class="company__info">
    <ul class="company__info-list">
        @if($company->company_address)
            <li class="company__info-item">
                <h4 class="company__info-key">Адрес:</h4>
                <span class="company__info-value">{{$company->company_address}}</span>
            </li>
        @endif
        @if($company->company_creating_date)
            <li class="company__info-item">
                <h4 class="company__info-key">Начало работы компании:</h4>
                <span class="company__info-value">{{$company->company_creating_date}}</span>
            </li>
        @endif
        @if($company->company_inn)
            <li class="company__info-item">
                <h4 class="company__info-key">ИНН компании:</h4>
                <span class="company__info-value">{{$company->company_inn}}</span>
            </li>
        @endif
        @if($company->company_phone)
            <li class="company__info-item">
                <h4 class="company__info-key">Телефон:</h4>
                <a href="tel:{{$company->company_phone}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_phone}}</a>
            </li>
        @endif
        @if($company->company_site)
            <li class="company__info-item">
                <h4 class="company__info-key">Сайт:</h4>
                <a href="{{$company->company_site}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_site}}</a>
            </li>
        @endif
        @if($company->company_email)
            <li class="company__info-item">
                <h4 class="company__info-key">Почта:</h4>
                <a href="mailto:{{$company->company_email}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_email}}</a>
            </li>
        @endif
        @if($company->company_fb)
            <li class="company__info-item">
                <h4 class="company__info-key">Facebook:</h4>
                <a href="{{$company->company_fb}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_fb}}</a>
            </li>
        @endif
        @if($company->company_vk)
            <li class="company__info-item">
                <h4 class="company__info-key">Вконтакте:</h4>
                <a href="{{$company->company_vk}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_vk}}</a>
            </li>
        @endif
        @if($company->company_telegram)
            <li class="company__info-item">
                <h4 class="company__info-key">Telegram:</h4>
                <a href="{{$company->company_telegram}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_telegram}}</a>
            </li>
        @endif
        @if($company->company_instagram)
            <li class="company__info-item">
                <h4 class="company__info-key">Instagram:</h4>
                <a href="{{$company->company_instagram}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_instagram}}</a>
            </li>
        @endif
        @if($company->company_twitter)
            <li class="company__info-item">
                <h4 class="company__info-key">Twitter:</h4>
                <a href="{{$company->company_twitter}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_twitter}}</a>
            </li>
        @endif
        @if($company->company_viber)
            <li class="company__info-item">
                <h4 class="company__info-key">Viber:</h4>
                <a href="{{$company->company_viber}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_viber}}</a>
            </li>
        @endif
        @if($company->company_whatsapp)
            <li class="company__info-item">
                <h4 class="company__info-key">Viber:</h4>
                <a href="{{$company->company_whatsapp}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_whatsapp}}</a>
            </li>
        @endif
        @if($company->company_ok)
            <li class="company__info-item">
                <h4 class="company__info-key">Одноклассники:</h4>
                <a href="{{$company->company_ok}}"
                   class="company__info-value company__info-value--link c-orange-light">{{$company->company_ok}}</a>
            </li>
        @endif
    </ul>
</section>
