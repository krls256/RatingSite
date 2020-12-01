<aside class="leave-review leave-review--disable">
    <div class="leave-review__wrapper">
        <form action="{{ route('rating.user.left.review') }}" class="leave-review__form" method="post">
            @csrf
            @method("POST")
            <input type="text">
            <button type="submit">submit</button>
        </form>
    </div>

    <div class="leave-review__close"></div>
</aside>
