function countPrimeNumbers() {
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {return 0;}
    }
    return 1;
  }
  function findPrimeNumbers() {
    primes = [];
    for (let i = 2; i < 100; i++) {
      if (isPrime(i) === 1) {
        primes.push(i);
      }
    }
      return primes;
    }
    primeNums = findPrimeNumbers();
    return primeNums.length;
  }
  let test = performance.now();
  for (let i = 0; i < 100; i++){
    countPrimeNumbers();
  }
  let test2 = performance.now();
  console.log('Execution time of calculating prime numbers 100 times was ' + (test2 - test) + ' miliseconds.')

