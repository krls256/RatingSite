<?php


namespace App\BaseClassExtentions\File;

use Illuminate\Http\File;

class FileWithWebMethods extends File
{
    public function getClientOriginalName(){
        return $this->getFilename();
    }
}
