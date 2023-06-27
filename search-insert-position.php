<?php
// https://leetcode.com/problems/search-insert-position/description/

function searchInsert($nums, $target) {
  $idx = array_search($target, $nums);

  if(!function_exists('searchRecursive')){
    function searchRecursive($arr, $target, $offset = 0) {
        $half = intval(count($arr) / 2, 10);
        $current = $arr[$half];
  
        if (count($arr) === 1) {
          return $arr[0] > $target ? $offset : $offset + 1;
        }
  
        if ($target > $current) {
          $right = array_slice($arr, $half);
          if (count($right) === 1) {
            return $target > $right[0] ? count($arr) + $offset : $offset + $half;
          }
          return searchRecursive($right, $target, $offset + $half);
        } else {
          $left = array_slice($arr, 0, $half);
          if (count($left) === 1) {
            return $left[0] > $target ? $offset : $offset + 1;
          }
          return searchRecursive($left, $target, $offset);
        }
      }
  }
  if ($idx === false) {
    return searchRecursive($nums, $target);
  }

  return $idx;
}

echo searchInsert([1, 2, 4, 6, 7], 3);