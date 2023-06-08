const card = (movies, data) => {
  const cards = document.querySelector('foods');
  cards.innerHTML = '';
  movies.forEach((movie, index) => {
    const id = data.findIndex((like) => +like.item_id === index);
    const msgLikes = id >= 0 ? data[id].likes : 0;
    const innerHTML = `<div class="food-card br flex">
    <div class="img flex">
      <img class="br" src=${movie.thumbnail_url} alt=${movie.thumbnail_alt_text}>
    </div>
    <div class="like flex">
      <span class="name">Name:<i class="desc">${movie.name}</i>
      </span><i  class='bx bxs-heart'>${msgLikes}</i>
    </div>
    <button class="comment">Comments</button>
    </div>`;
    cards.innerHTML += innerHTML;
  });

  const like = document.querySelectorAll('.bxs-heart');
  like.forEach((btn, id) => btn.addEventListener('click', () => {
    postUserLike(id);
    getUserLike();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }));
};

export default card;