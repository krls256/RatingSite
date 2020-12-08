@component('mail::message')
    <h1>Письмо от {{$date}}</h1>

@foreach($messages as $message)
<hr>
<div>Имя:</div>
<h1>{{$message->user_name}}</h1>
<div>Email:</div>
<h2>{{$message->user_email}}</h2>
<div>Дата написания:</div>
<h4>{{$message->created_at}}</h4>
<div>Сообщение:</div>
<p>{{$message->user_message}}</p>
@endforeach
@endcomponent
