// write a function to find the longest common prefix string amongst an array of strings.

// if there is not common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
