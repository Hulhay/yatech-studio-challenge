const { pairSum } = require("./pairSum");

test("For a=[2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m=4, and k=10, should be 5", () => {
  expect(pairSum([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10)).toBe(5);
});

test("For a=[15, 8, 8, 2, 6, 4, 1, 7], m=2, and k=8, should be 2", () => {
  expect(pairSum([15, 8, 8, 2, 6, 4, 1, 7], 2, 8)).toBe(2);
});
