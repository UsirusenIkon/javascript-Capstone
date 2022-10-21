import commentsCounter from './__mock__/countComments.js';

describe('test on foods items comments', () => {
  test('comments count should be three', () => {
    const comments = [
      {
        item_id: 'item1',
        username: 'Paul',
        comment: 'See you',
      },
      {
        item_id: 'item1',
        username: 'Stella',
        comment: 'cool',
      },

      {
        item_id: 'item1',
        username: 'Jane',
        comment: 'bye',
      },
    ];
    expect(commentsCounter(comments)).toBe(3);
  });
});