<?php 

function getMin($array){
    $min = null;

    for($i = 0; $i < count($array); $i++){
        $cur = $array[$i];

        if($min === null || $cur < $min){
            $min = $cur;
        }
    }

    return $min;
}

echo getMin([9, 6, 8, 3, 5, 8, 7]);