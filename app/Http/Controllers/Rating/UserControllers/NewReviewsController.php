<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Reviews\StoreReviewRequest;
use App\Repositories\SEO\UserSEORepository;
use App\Services\CreateNewReviewServices\CreateNewReviewMainService;
use Illuminate\Http\Request;


class NewReviewsController extends UserController
{
    public function __construct(UserSEORepository $SEORepository) { parent::__construct($SEORepository); }

    public function index(StoreReviewRequest $request, CreateNewReviewMainService $service) {
        $response = $service->index();

        if($response) {
            return redirect()->route('rating.user.leave.review.redirect')
                ->with(['path' => $request['site-path']]);
        } else {
            return back()->withErrors(['msg' => 'Упс, что-то пошло не так, мы уже занимаемся этим'])
                ->withInput();
        }
    }

    public function redirect() {
        $path = session()->all()['path'] ?? '/';
        $seo = $this->getSEOAttributes('thanks');
        return view('rating.user.redirects.index', [
            'path' => $path,
            'message' => 'Ваш отзыв принят на рассмотрение, и в ближайшее время появится на сайте',
            'seo' => $seo
        ]);
    }
}
