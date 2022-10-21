const postComment = async (id, name, comment) => {
  const data = {
    item_id: id,
    username: name,
    comment,
  };
  const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BN8MvkOs74Ofyu4CfHNx/comments';
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data2 = await response.json();
  return data2;
};

export default postComment;