import postComment from './postComments.js';
import getUserComment from './getComments.js';
import postUserLike from './postLikes.js';
import getUserLike from './getLikes.js';

const renderData = async (arr) => {

  
  // const userLike = await getUserLike();
  // const foodList = document.querySelector('.foods');
  // const mealCount = document.createElement('meal-count');
  // const mealItem = document.querySelector('.meal-item');

  // mealCount.innerHTML = `<a class="meal-count" href="#">Meal (${arr.length})</a>`;
  // mealItem.appendChild(mealCount);


  //   const commentBtn = document.querySelectorAll('.comment');

  //   commentBtn.forEach((btn, id) => btn.addEventListener('click', async () => {
  //     const modalcontent = document.querySelector('.modal');

  //     // Get and Count comments
  //     const userComment = await getUserComment(id);

  //     modalcontent.innerHTML = `<i class="bx bx-x"></i>
  //     <div class="content flex">    
  //       <img class="br" src=${arr[id].thumbnail_url} alt="">
  //       <div class="summary">
  //         <span class="name">Name:<i class="desc">${arr[id].name}</i></span>
  //         <span class="description">summary:<i class="desc">${arr[id].description || 'This taste of this meal will leave you in ecstasy'}</i></span>
  //       </div>
  //     </div>
  //     <span>Comments (${userComment.length || 0})</span>
  //     <div class="comments">${userComment.length >= 1
  //   ? userComment.map((user) => `<p>${user.creation_date} ${user.username} : ${user.comment}</p>`).join(' ') : '<p> "make a comment" </p>'}</div>
  //     <div class="comment-form">
  //       <form class="modal-form flex">
  //         <label for="Name">
  //           <input class="leader user" name="Name" type="text" placeholder="your name" maxlength="30" required>
  //         </label>
  //         <label for="Textarea">
  //           <input class="leader comment" id="comment"name="textarea" type="text" placeholder="your comment" maxlength="80" required>
  //         </label>
  //         <button class="submit" type="submit">Comment</i></button>
  //       </form>
  //     </div>`;
  //     const modalFilter = document.querySelector('.modal-filter');
  //     const addComment = document.querySelector('.modal-form');

  //     addComment.addEventListener('submit', (e) => {
  //       e.preventDefault();
  //       const name = document.querySelector('.user').value;
  //       const comment = document.querySelector('#comment').value;
  //       postComment(id, name, comment);
  //       getUserComment(id);
  //       document.querySelector('.modal-form').reset();
  //       modalFilter.classList.remove('open');
  //       modalcontent.classList.remove('open');
  //     });
  //     modalFilter.classList.toggle('open');
  //     modalcontent.classList.toggle('open');

  //     const closeBtn = document.querySelector('.bx-x');
  //     closeBtn.addEventListener('click', () => {
  //       modalFilter.classList.remove('open');
  //       modalcontent.classList.remove('open');
  //     });
  //   }));
  // });
};

export default renderData;