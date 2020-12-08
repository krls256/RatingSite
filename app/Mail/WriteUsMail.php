<?php

namespace App\Mail;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WriteUsMail extends Mailable
{
    use Queueable, SerializesModels;

    private $messages;
    private $date;

    /**
     * @return void
     */
    public function __construct($messages)
    {
        $this->date = Carbon::now()->isoFormat('DD.MM.YYYY');
        $this->messages = $messages;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.writeUsMail',
            [
                'date' => $this->date,
                'messages' => $this->messages
            ]);
    }
}
