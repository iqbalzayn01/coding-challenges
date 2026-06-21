function isCleanlyNested(xs) {
  const allEmpty = xs.every((child) => child.length === 0);
  const allNested = xs.every((child) => child.length > 0);

  return (allEmpty || allNested) && xs.every(isCleanlyNested);
}

console.log(isCleanlyNested([[[[]], [[]], [[]]], [[]], [[]]]));
console.log(
  isCleanlyNested([
    [[], [], []],
    [[], [[]]],
  ]),
);
