function fib(n) {
  if (n < 0) {
    return 0;
  }

  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
