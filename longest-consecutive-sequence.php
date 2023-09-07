<?php

function longestConsecutiveElements($nums) {
    $numSet = array_flip($nums); 
    $longest = 0;

    foreach ($numSet as $num => $value) {
        if (!isset($numSet[$num - 1])) {
            $len = 0;

            while (isset($numSet[$num])) {
                $len += 1;
                $num += 1;
            }

            $longest = max($len, $longest);
        }
    }

    return $longest;
  }
  
  $nums1 = [100, 4, 200, 1, 3, 2];
  
  echo longestConsecutiveElements($nums1);
  