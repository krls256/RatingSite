@extends('layouts.user')

@section('content')
    <section class="error">
        <div class="error__text">
            <h1 class="error__status">401</h1>
            <h2 class="error__message">Неавторизованный запрос</h2>
        </div>
    </section>
@endsection
