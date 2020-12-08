<aside class="form @if(!$errors->getBag('default')->get('second') ?? true) form--disable @endif" id="writeUsForm">
    <div class="form__wrapper">
        <form action="{{ route('rating.user.write-us') }}" method="post">
            @csrf
            @method("POST")
            <h2 class="form__header">Написать администрации сайта</h2>
            @if($errors->getBag('default')->get('second') ?? false)
                <ul class="form__errors">
                    @foreach($errors->all() as $k => $err)
                            <li class="form__error-item c-red">{{$err}}</li>
                    @endforeach
                </ul>
            @endif
            <div class="form__group">
                <label for="user_name" class="form__label">Ф.И.О:<span class="c-red">*</span></label>
                <input type="text" name="user_name" id="user_name" value="{{old('user_name')}}"
                       class="form__input">
            </div>

            <div class="form__group">
                <label for="user_email" class="form__label">E-mail: <span class="c-red">*</span></label>
                <input type="text" name="user_email" id="user_email" value="{{old('user_email')}}"
                       class="form__input">
            </div>

            <div class="form__group">
                <label for="user_message" class="form__label">Письмо: <span class="c-red">*</span></label>
                <textarea type="text"
                          name="user_message"
                          id="user_message"
                          placeholder="Ваше мнение поможет сделать правельный выбор другим людям"
                          class="form__textarea" rows="5">{{old('user_message')}}</textarea>
            </div>

            <div class="form__important"><span class="c-red">*</span> - обязательные поля</div>
            <button class="btn btn--medium bg-green pv-3">Отправить</button>
            <input type="hidden" value="{{url()->current()}}" name="site-path">
        </form>
        <div class="close" id="writeClose"></div>
    </div>
</aside>
