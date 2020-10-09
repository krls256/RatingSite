<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckAdministratorRights
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

    public function handle($request, Closure $next)
    {
        $user = Auth::user();

        if($user === null) {
            return redirect('auth');
        } else if ($user->is_admin === 0) {
            return redirect()->route('you-are-not-an-admin');
        }
        return $next($request);
    }
}
