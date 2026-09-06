const isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const bracketMap = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (bracketMap[char]) {
      const topElement = stack.pop();
      if (topElement !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

// console.log(isValid('()[]{}'));
console.log(isValid('(]'));
