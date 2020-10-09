<?php


namespace App\Repositories;
use App\Models\Images as Model;
use Illuminate\Support\Facades\DB;

class OtherActionsImagesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }
    public function insertNewImages(array $data) {
        $result = DB::table('images')
            ->insert($data);

        if($result) {
            return true;
        } else {
            throw new \Exception("Не удалось добавить изображения в базу");
        }
    }
}
