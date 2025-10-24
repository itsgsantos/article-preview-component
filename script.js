const share = document.querySelector('#share');
const sociais = document.querySelector('#sociais');
const imgShare = document.querySelector('#imgShare');

function showShare() {
  share.classList.add('ativo');
  sociais.classList.add('ativo');
  imgShare.classList.add('ativo');
}

function hideShare({ target }) {
  if (!share.contains(target) && !sociais.contains(target)) {
    share.classList.remove('ativo');
    imgShare.classList.remove('ativo');
    sociais.classList.remove('ativo');
  }
}

share.addEventListener('click', showShare);
document.addEventListener('click', hideShare);
