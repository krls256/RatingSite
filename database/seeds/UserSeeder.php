<?php

use App\Repositories\CustomUserRepository;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{

    private $admin = [
        'name' => 'Vovochka',
        'email' => null,
        'is_admin' => true,
        'password' => null,
        'api_token' => null
        ];

    public function __construct() {
        $this->admin['email'] = env('ADMIN_LOGIN');
        $this->admin['password'] = Hash::make(env('ADMIN_PASS'));
        $this->admin['api_token'] = Str::random(60);
    }

    public function run(CustomUserRepository $customUserRepository)
    {
        $customUserRepository->createAdmin($this->admin);
    }
}
