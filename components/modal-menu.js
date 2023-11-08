export default class ModalMenu extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const template = `
      <div class="modal">
      <style>
        .modal {
          display: none;
          position: fixed;
          top: 2em;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(67, 54, 100, 0.4);
        }

        .content {
          display: inline-block;
          background-color: white;
          padding: 1em;
          border-radius: 5px;
        }
      </style>
      <div class="content">
      <p>hello there</p>
        <slot name="menu"></slot>
      </div>
    </div>
    `;
    this.root.innerHTML = template;
  }

  connectedCallback() {
    var modal = this.root.querySelector(".modal");

    modal.addEventListener("click", (event) => {
      if (event.target == event.currentTarget) {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.root.querySelector(".modal").style.display = "block";
  }
  closeModal() {
    this.root.querySelector(".modal").style.display = "none";
  }
}

customElements.define("modal-menu", ModalMenu);
