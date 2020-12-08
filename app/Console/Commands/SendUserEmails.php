<?php

namespace App\Console\Commands;

use App\Mail\WriteUsMail;
use App\Repositories\UserMessages\UserMessagesRepository;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendUserEmails extends Command
{
    private $repository;
    /**
     * @var string
     */
    protected $signature = 'email:sendUserEmails';

    /**
     * @var string
     */
    protected $description = 'Send Messages from Form';

    /**
     * @return void
     */
    public function __construct(UserMessagesRepository $repository)
    {
        parent::__construct();

        $this->repository = $repository;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $messages = $this->repository->getUnsentMessages();

        if($messages->count() === 0) {
            return 1;
        }
        Mail::to(env('ADMIN_DIRECTION'))->send(new WriteUsMail($messages));

        $this->repository->setAllMessagesSend();
    }
}
