const postUserLike = async (id) => {
  const dataToPost = {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application.json',
    },
  };
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/utOrKhSxTqTA0ApdC0r4/likes', dataToPost)
    .then((response) => response.json());
};
postUserLike();