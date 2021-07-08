/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = function(image) {
  image.forEach(reverseAndInvert);
  return image;
};

const reverseAndInvert = (chunk) => {
  const half = Math.floor(chunk.length / 2);
  for (let i = 0; i < half; i++) {
    swap(i, chunk.length - 1 - i, chunk);
  }
  for (let i = 0; i < chunk.length; i++) {
    invert(i, chunk);
  }
};

const swap = (i, j, arr) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const invert = (i, arr) => {
  arr[i] = arr[i] === 1 ? 0 : 1;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));

