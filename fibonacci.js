// Get the nth fibonacci number

function fib(num) {
  if (num <= 1) {
    return num;
  }
  let result = 0,
    start = 0,
    second = 1;

  for (let i = 2; i <= num; ++i) {
    result = start + second;
    start = second;
    second = result;
  }

  return result;
}

console.log(fib(6));
