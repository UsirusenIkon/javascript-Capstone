const getUserComment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BN8MvkOs74Ofyu4CfHNx/comments?item_id=${id}`);
  const data = response.json();
  console.log(data);
};

export default getUserComment;

// comment counter
export const countUserComment = async (id) => {
  const userComment = await getUserComment(id);
  console.log(userComment.length);
  return userComment.length;
};
