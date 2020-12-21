<?php


namespace App\Repositories\SEO;

use App\Models\SEOAttributes as Model;
use App\Repositories\CoreRepository;

class SeederSEORepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function storeSEOBase($data)
    {
        $r = true;
        foreach ($data as $d) {
            $r = $this->startCondition()
                ->create($d);
        }
        return $r;
    }
}
