const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(50)); // This will run seemingly forever.