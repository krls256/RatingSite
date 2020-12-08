<aside class="form form--disable" id="addReviewAnswer">
    <div class="form__wrapper">
        <form action="{{ route('rating.user.addReviewAnswer') }}" method="post">
            @csrf
            @method("POST")
            <h2 class="form__header">Оставить Комментарий</h2>
            @if($errors->getBag('default')->get('third') ?? false)
                <ul class="form__errors">
                    @foreach($errors->all() as $k => $err)
                        <li class="form__error-item c-red">{{$err}}</li>
                    @endforeach
                </ul>
            @endif
            <div class="form__group">
                <label for="reviewer_answer_name" class="form__label">Ф.И.О:</label>
                <input type="text" name="reviewer_answer_name"
                       id="reviewer_answer_name" value="{{old('reviewer_answer_name')}}"
                       class="form__input" placeholder="ФИО">
            </div>

            <div class="form__group">
                <label for="review_answer_text" class="form__label">Комментарий: <span class="c-red">*</span></label>
                <textarea type="text"
                          name="review_answer_text"
                          id="review_answer_text"
                          placeholder="Ваше мнение поможет сделать правельный выбор другим людям"
                          class="form__textarea" rows="5">{{old('review_answer_text')}}</textarea>
            </div>

            <button class="btn btn--medium bg-green pv-3">Отправить</button>
            <input type="hidden" value="{{url()->current()}}" name="site-path">
            <input type="hidden" value="{{ old('review_answer_id') }}" name="review_answer_id">
        </form>
        <div class="close" id="commentClose"></div>
    </div>
</aside>
