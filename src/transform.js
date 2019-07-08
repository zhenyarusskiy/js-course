export function transformData(arr) {
  // TODO: write some code to make test work
  if (!Array.isArray(arr)) {
    throw new Error('is not Array');
  }

  if (!arr.length) {
    throw new Error('Array is empty');
  }

  return arr.reduce((prev, current) => {
    if (!current.key.includes('garbage')) {
      prev[current.key] = current.value;
    }

    return prev;
  }, {});
}
