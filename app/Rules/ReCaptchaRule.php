<?php

namespace App\Rules;

use App\Services\ReCaptchaServices\VerifyReCaptchaRequestService;
use Illuminate\Contracts\Validation\Rule;

class ReCaptchaRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $captchaRequestService = new VerifyReCaptchaRequestService();
        $result = $captchaRequestService->index($value, 0.7);
        return $result;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Нам кажется, что вы робот. Пожалуйста, заполните форму чуть позже';
    }
}
