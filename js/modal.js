const modal = document.querySelector('.modal');
const closeIcon = modal.children[1];
const commentArr = document.querySelectorAll('.comment');
const commentModal = document.querySelector('.comment-modal');
const overlay = document.querySelector('.overlay');

function showModal(comment) {
  if (modal.classList.contains('modal_off')) {
    const firstClone = comment.children[0].cloneNode(true);
    const secondClone = comment.children[1].cloneNode(true);
    overlay.classList.add('fade_in');
    document.body.classList.add('no-scroll');
    modal.classList.remove('modal_off');
    commentModal.append(firstClone, secondClone);
  } else {
    overlay.classList.remove('fade_in');
    document.body.classList.remove('no-scroll');
    modal.classList.add('modal_off');
    commentModal.innerHTML = '';
  }
}

closeIcon.addEventListener('click', showModal);
commentArr.forEach((comment) => {
  comment.addEventListener('click', () => {
    if (window.innerWidth < 1000) showModal(comment);
  });
});
overlay.addEventListener('click', () => {
  if (!modal.classList.contains('modal_off')) showModal();
});
