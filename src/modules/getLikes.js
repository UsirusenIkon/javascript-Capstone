const getUserLike = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/utOrKhSxTqTA0ApdC0r4/likes');
  const data = await response.json();
  return data;
};

export default getUserLike;

// Likes counter
export const countUserLike = async () => {
  const userLike = await getUserLike();
  const totalLike = userLike.length;
  return totalLike;
};
