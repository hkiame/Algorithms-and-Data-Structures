<?php

function longestCommonPrefix($strs) {
    if(count($strs) === 0){ return ""; }

    $prefix = $strs[0];

    for($i = 0; $i < count($strs); $i++){
        while(strpos($strs[$i], $prefix) !== 0){
            $prefix = substr($prefix, 0, strlen($prefix) - 1);
        }
    }

    return $prefix;
}

$strs1 = ["flower", "flow", "flight"];

echo longestCommonPrefix($strs1);