<?php


namespace App\Services\ReCaptchaServices;


use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class VerifyReCaptchaRequestService
{
    private $google_api_url = 'https://www.google.com/recaptcha/api/siteverify';

    public function index($userToken, $passScore = 0.7) {
        $secret = env('RECAPTCHA_SECRET_KEY');
        $body = "?secret=$secret&response=$userToken";

        $response = Http::post($this->google_api_url.$body);

        $verificationData = $response->json();
        if($verificationData['success'] === false) {
            Log::info('ReCaptcha request unsuccessful', $verificationData);
            return 1;
        } elseif ($verificationData['score'] >= $passScore) {
            return 1;
        } else {
            return 0;
        }
    }
}
