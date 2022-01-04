<?php

namespace App\Domains\Follows\Models;

use App\Domains\Users\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follow extends Model
{
    use HasFactory;

    public $table = 'follower_user';

    protected $fillable = [
        'follower_id',
        'user_id'
    ];

    // public function follower(){
    //     return $this->belongsTo(User::class,'follower_id');
    // }

    // public function following(){
    //     return $this->belongsTo(User::class,'following_id');
    // }
    public function user(){
        return $this->BelongsTo(User::class);
    }
}
