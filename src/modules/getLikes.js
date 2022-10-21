const getUserLike = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R1NTK1RCSA5nplnJoZlY/likes');
  const data = await response.json();
  const result = data.sort((a, b) => a.item_id - b.item_id);
  return result;
};

export default getUserLike;
