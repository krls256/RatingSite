@extends('layouts.user')

@section('content')
    <section class="redirect">
        <h1 class="redirect__main text-center">Спасибо!</h1>
        <h2 class="redirect__info text-center">{{$message}}</h2>
        <a href="{{$path}}" class="redirect__link text-center">Вернуться назад</a>
    </section>
@endsection
