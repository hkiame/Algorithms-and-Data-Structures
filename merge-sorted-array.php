<?php
// https://leetcode.com/problems/merge-sorted-array/description/

function merge(&$nums1, $m, $nums2, $n){
    $end = $m + $n - 1;
    $nums1End = $m - 1;
    $nums2End = $n - 1;
    
    while($nums1End >= 0 && $nums2End >= 0){
        if($nums1[$nums1End] > $nums2[$nums2End]){
            $nums1[$end] = $nums1[$nums1End];
            $nums1End -= 1;
            $end -= 1;
        }else{
            $nums1[$end] = $nums2[$nums2End];
            $nums2End -= 1;
            $end -= 1;
        }
    }

    while($nums2End >= 0){
        $nums1[$end] = $nums2[$nums2End];
        $nums2End -= 1;
        $end -= 1;
    }

}