import getUserComment from './getComments.js';

const commentsCounter = () => {
  const count = getUserComment.length;
  return count;
};

export default commentsCounter;