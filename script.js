const html = document.documentElement;
const share = document.querySelector("#share");
const sociais = document.querySelector("#sociais");

function handleClick(event) {
  const target = event.target;

  if (target === share) {
    share.classList.add("ativo");
    sociais.classList.add("ativo");
  } else {
    share.classList.remove("ativo");
    sociais.classList.remove("ativo");
  }
}

["touchstart", "click"].forEach((userEvent) => {
  html.addEventListener(userEvent, handleClick);
});
