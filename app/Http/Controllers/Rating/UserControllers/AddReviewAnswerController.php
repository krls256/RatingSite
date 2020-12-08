<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewAnswers\ReviewAnswersStoreRequest;
use App\Repositories\ReviewAnswers\UserReviewAnswersRepository;
use Illuminate\Http\Request;


class AddReviewAnswerController extends Controller
{
    public function index(ReviewAnswersStoreRequest $request, UserReviewAnswersRepository $answersRepository)
    {
        $res = $answersRepository->storeReviewAnswer($request->all());

        if($res) {
            return redirect()->route('rating.user.addReviewAnswer.redirect')
                ->with(['path' => $request['site-path']]);
        } else {
            return back()->withErrors(['msg' => 'Упс, что-то пошло не так, мы уже занимаемся этим'])
                ->withInput();
        }
    }

    public function redirect() {
        $path = session()->all()['path'] ?? '/';
        return view('rating.user.redirects.index', ['path' => $path, 'message' => 'Ваш комментарий принят на рассмотрение, и в ближайшее время появится на сайте']);
    }
}
