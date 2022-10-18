import './style.css';

const commentBtn = document.querySelector('.comment');
const modalFilter = document.querySelector('.modal-filter');
const modalcontent = document.querySelector('.modal');

const loadModal = () => {
  modalcontent.innerHTML = `<i class="bx bx-x"></i>
  <img src="" alt="">
  <span class="name">name:</span><span class="description">description</span>
  <div class="comments"></div>
  <div class="comment-form">
    <form class="modal-form flex" >
      <label for="Name">
        <input class="leader user" name="Name" type="text" placeholder="your name" maxlength="30" required>
      </label>
      <label for="Textarea">
        <input class="leader user" name="textarea" type="text" placeholder="your comment" maxlength="80" required>
      </label>
      <button class="submit" type="submit">Comment</i></button>
    </form>
  </div>`;
};

loadModal();

commentBtn.addEventListener('click', () => {
  modalFilter.classList.toggle('open');
  modalcontent.classList.toggle('open');

  const closeBtn = document.querySelector('.bx-x');
  closeBtn.addEventListener('click', () => {
    modalFilter.classList.remove('open');
    modalcontent.classList.remove('open');
  });
});

