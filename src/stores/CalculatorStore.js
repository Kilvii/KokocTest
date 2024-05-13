import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('CalculatorStore', () => {

  const primes = reactive([]);

  function search(input) {
    const regex = /^\d+$/
    if (input.match(regex) !== null) {
      primes.splice(0, primes.length);
      for (let i = 2; i <= input; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
      return true;
    }
    else {
      return false;
    }
  }

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }

    return true;
  }

  return { primes, search }
})
