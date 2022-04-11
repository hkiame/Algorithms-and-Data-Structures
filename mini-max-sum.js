// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr){

    let minSum = 0,
        maxSum = 0;
    
    arr.sort((a, b) => a - b );

    for(let i = 0, j = arr.length -1; i < arr.length - 1; ++i, --j){
        minSum += arr[i];
        maxSum += arr[j]
    }

    console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([7, 69, 2, 221, 8974]);