<?php

function diagonalDifference($arr) {
    $end = count($arr) - 1;
    $sum1 = 0;
    $sum2 = 0;
  
    for($i = 0; $i < count($arr); $i++) {
      $firstDiagonal = $arr[$i][$i];
      $secondDiagonal = $arr[$i][$end];
  
      $sum1 += $firstDiagonal;
      $sum2 += $secondDiagonal;
      $end -= 1;
    }
  
    return abs($sum1 - $sum2);
  }
  
  $arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7],
  ];
  
  echo diagonalDifference($arr);