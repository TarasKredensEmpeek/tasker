export const replaceItemAtIndex = (
  arr: unknown[],
  index: number,
  newValue: unknown,
) => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

export const removeItemAtIndex = (arr: unknown[], index: number) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];
