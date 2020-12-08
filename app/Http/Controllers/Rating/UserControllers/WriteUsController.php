<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserMessages\UserMessagesFormRequest;
use App\Services\WriteUsServices\WriteUsService;


class WriteUsController extends Controller
{
    public function index(UserMessagesFormRequest $request, WriteUsService $writeUsService) {
        $result = $writeUsService->main();

        if($result) {
            return redirect()->route('rating.user.write-us.redirect')
                ->with(['path' => $request['site-path']]);
        } else {
            return back()->withInput()->withErrors(['msg' => 'Упс, что-то пошло не так, мы уже занимаемся этим']);
        }
    }

    public function redirect() {
        $path = session()->all()['path'] ?? '/';
        return view('rating.user.redirects.index', ['path' => $path, 'message' => 'Ваше письмо отправлено админу']);
    }
}
