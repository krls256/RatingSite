<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserMessages\UserMessagesFormRequest;
use App\Repositories\SEO\UserSEORepository;
use App\Services\WriteUsServices\WriteUsService;


class WriteUsController extends UserController
{
    public function __construct(UserSEORepository $SEORepository) { parent::__construct($SEORepository); }

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
        $seo = $this->getSEOAttributes('thanks');
        $path = session()->all()['path'] ?? '/';
        return view('rating.user.redirects.index', [
            'path' => $path,
            'message' => 'Ваше письмо отправлено админу',
            'seo' => $seo
            ]);
    }
}
