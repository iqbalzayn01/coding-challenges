// Palindrome Number
// Given an integer x, return true if x is a , and false otherwise.

const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let num = 0;

  while (x > num) {
    const lastDigit = x % 10;
    num = num * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return x === num || x === Math.floor(num / 10);
};

// console.log(isPalindrome(11));
console.log(isPalindrome(121));
// console.log(isPalindrome(1321));
// console.log(isPalindrome(10));
