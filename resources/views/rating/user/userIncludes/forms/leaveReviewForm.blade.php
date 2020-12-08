<aside class="leave-review @if(!$errors->getBag('default')->get('first') ?? true) leave-review--disable @endif">
    <div class="form__wrapper">
        <form action="{{ route('rating.user.leave.review') }}" class="leave-review__form" method="post" enctype="multipart/form-data">
            @csrf
            @method("POST")
            <h2 class="form__header">Оставить отзыв</h2>
            @if($errors->getBag('default')->get('first') ?? false)
            <ul class="form__errors">
                @foreach($errors->all() as $err)
                    <li class="form__error-item c-red">{{$err}}</li>
                @endforeach
            </ul>
            @endif
            <div class="form__group">
                <label for="reviewer_name" class="form__label">Ф.И.О:<span class="c-red">*</span></label>
                <input type="text" name="reviewer_name" id="reviewer_name" value="{{old('reviewer_name')}}"
                       class="form__input">
            </div>

            <div class="form__group">
                <label for="review_text" class="form__label">Отзыв: <span class="c-red">*</span></label>
                <textarea type="text"
                          name="review_text"
                          id="review_text"
                          placeholder="Ваше мнение поможет сделать правельный выбор другим людям"
                          class="form__textarea" rows="5">{{old('review_text')}}</textarea>
            </div>

            <div class="form__group" id="formStars">
                <label for="review_mark" class="form__label">Оценка:<span class="c-red">*</span></label>
                @include('rating.user.userIncludes.stars', ['rate' => old('review_mark' ,0)])
                <input type="hidden" value="{{old('review_mark' ,0)}}" name="review_mark">
            </div>

            <div class="form__group">
                <label for="company_id" class="form__label">Компания:<span class="c-red">*</span></label>
                <select name="company_id" id="company_id" class="form__input">
                    <option value="0" class="leave-review__option">Не выбрано</option>
                    @foreach($companies as $k => $company)
                        <option value="{{$company->company_id}}" @if(old('company_id') == $company->company_id) selected @endif class="leave-review__option">{{$k+1}}.{{$company->company_name}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form__group">
                <label for="review_date" class="form__label">Дата проводимых работ: </label>
                <input type="date" id="review_date" name="review_date" value="{{ old('review_date') }}"
                       class="form__input">
            </div>

            <div class="form__group">
                <label for="file" class="form__label">Добавить фото (не более 6-ти, до 1024Кб)</label>
                <input type="file" id="file" multiple="" name="images[]" value=""
                       class="form__input">
            </div>

            <div class="form__important"><span class="c-red">*</span> - обязательные поля</div>

            <button type="submit" class="btn bg-green pv-3 ph-4">Оставить отзыв</button>
            <input type="hidden" value="{{url()->current()}}" name="site-path">
        </form>
        <div class="close" id="leaveClose"></div>
    </div>


</aside>
