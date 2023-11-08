export default class CarouselArrow extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const template = `
                      <style>
                      :host {
                        display: block;
                        width: 100vw;
                        height: 100vh;
                        position: relative;
                        padding: 0;
                        margin: 0;
                      }

                      ul{
                        padding: 0;
                        margin: 0;
                      }

                      li {
                        position: absolute;
                        inset: 0;
                        opacity: 0;
                        transition: 200ms opacity ease-in-out;
                        transition-delay: 200ms;
                      }

                      li > img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                      }

                      li[data-active] {
                        opacity: 1;
                        z-index: 1;
                        transition-delay: 0ms;
                      }

                      button {
                        position: absolute;
                        background: none;
                        border: none;
                        font-size: 3em;
                        top: 50%;
                        z-index: 2;
                        transform: translateY(-50%);
                        color: rgba(255, 255, 255, 0.4);
                        cursor: pointer;
                        background-color: rgba(0, 0, 0, 0.1);
                        border-radius: 0.15em;
                        padding: 0 0.5em;
                        padding-bottom: 0.2em;
                      }

                      button:hover,
                      button:focus {
                        color: whitesmoke;
                        background-color: rgba(0, 0, 0, 0.2);
                      }

                      .previous {
                        left: 0.1em;
                      }
                      .next {
                        right: 0.11em;
                      }
                      </style>
                      <button class="previous">&#8656;</button>
                      <button class="next">&#8658;</button>
                      <ul>
                      <li data-active>
                        <img
                          src="https://source.unsplash.com/random/1200x900/?nature,sea"
                          alt="img1"
                        />
                      </li>
                      <li>
                        <img
                          src="https://source.unsplash.com/random/1200x900/?nature,mountain"
                          alt="img1"
                        />
                      </li>
                      <li>
                        <img
                          src="https://source.unsplash.com//random/1200x900/?nature,desert"
                          alt="img1"
                        />
                      </li>
                      </ul>
    `;
    this.root.innerHTML = template;
  }

  connectedCallback() {
    var buttons = this.root.querySelectorAll("button");
    var slides = this.root.querySelectorAll("li");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        var offset = button.classList.contains("next") ? 1 : -1;

        var activeSlide = this.root.querySelector("[data-active]");
        var newIndex = Array.from(slides).indexOf(activeSlide) + offset;

        if (newIndex < 0) {
          newIndex = slides.length - 1;
        } else if (newIndex >= slides.length) {
          newIndex = 0;
        }

        slides[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
  }
}

customElements.define("carousel-arrow", CarouselArrow);
