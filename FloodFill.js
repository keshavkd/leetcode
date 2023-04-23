/**
 * Flood fill: https://leetcode.com/problems/flood-fill/
 *
 * Flood fill an image with a new color.
 *
 * @param {number[][]} image - The image represented as a 2D array of integers.
 * @param {number} sr - The row index of the starting pixel.
 * @param {number} sc - The column index of the starting pixel.
 * @param {number} color - The new color to be filled.
 * @return {number[][]} The new image with the filled color.
 */

const floodFill = (image, sr, sc, color) => {
  let dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const dfs = (i, j, start) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= image.length ||
      j >= image[0].length ||
      image[i][j] !== start
    )
      return;
    image[i][j] = color;
    for (let d of dirs) dfs(i + d[0], j + d[1], start);
  };

  if (image[sr][sc] !== color) {
    dfs(sr, sc, image[sr][sc]);
  }

  return image;
};

/* Input */
let input = [
  {
    image: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    sr: 1,
    sc: 1,
    color: 2,
    result: [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ],
  },
  {
    image: [
      [0, 0, 0],
      [0, 0, 0],
    ],
    sr: 0,
    sc: 0,
    color: 0,
    result: [
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
];

/* Driver */
for (let i of input) {
  console.log(floodFill(i.image, i.sr, i.sc, i.color), i.result);
}
