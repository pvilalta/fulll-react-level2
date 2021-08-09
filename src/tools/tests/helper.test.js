import { isArrayEmpty } from '../helper.js';

describe('helper | isArrayEmpty', () => {
  test('isArrayEmpty | should be truthy (input is an empty array)', () => {
    const inputArray = [];

    const myTest = isArrayEmpty(inputArray);
    expect(myTest).toBeTruthy();
  });

  test('isArrayEmpty | should be falsy (input is a filled array)', () => {
    const inputArray = [1];

    const myTest = isArrayEmpty(inputArray);
    expect(myTest).toBeFalsy();
  });
});
