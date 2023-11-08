import ModalMenu from "./components/modal-menu.js";

window.addEventListener("DOMContentLoaded", () => {
  var menu = document.querySelector("#menu");
  var modalMenu = document.querySelector("modal-menu");

  menu.addEventListener("click", (event) => {
    if (event.target == event.currentTarget) {
      modalMenu.openModal();
    }
  });
});
