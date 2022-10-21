import itemCounter from './__mock__/itemCounter.js';

describe('Test is to count number of likes', () => {
  test('likes should be two', () => {
    const likes = [
      {
        likes: 5,
        item_id: 'item1',
      },
      {
        likes: 5,
        item_id: 'item1',
      },
    ];
    expect(itemCounter(likes)).toBe(2);
  });
});