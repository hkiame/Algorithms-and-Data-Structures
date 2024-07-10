<?php

function getMin($array){
    $min = false;

    for($index  = 0; $index < count($array); $index++){
        $current = $array[$index];

        if($min === false || $current < $min){
            $min = $current;
        }
    }

    return $min;
}

echo getMin([8, 11, 4, 2, 9, 78, 34]);