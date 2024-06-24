<?php

function twoSum($nums, $target){
    $arr = []; 

    for ($i = 0; $i < count($nums); $i++) { 
        $needle = $target - $nums[$i];

        if(array_key_exists($needle, $arr)){
            return [$arr[$needle], $i];
        }

        $arr[$nums[$i]] = $i;
    }

    return [];
}

$result =  twoSum([2, 7, 11, 15], 9);

var_dump($result);