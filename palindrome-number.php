<?php

function isPalindrome($x) {
    $str = (string)$x;
    $end = strlen($str) - 1;

    for($i = 0, $j = $end; $i < $j; $i++, $j--){
        if($str[$i] != $str[$j]){
            return false;
        }
    }

    return true;
}