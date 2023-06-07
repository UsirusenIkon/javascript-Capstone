const getComment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BN8MvkOs74Ofyu4CfHNx/comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

export default getComment;
