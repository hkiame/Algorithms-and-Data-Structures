<?php

// https://leetcode.com/problems/add-digits/
// Could you do it without any loop/recursion in O(1) runtime
// use the digital root formular

function addDigits($num){
    if($num === 0){
        return 0;
    }

    return 1 + (($num - 1) % 9);
}