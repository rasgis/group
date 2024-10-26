import { Module } from "../core/module";
import { createResultClicksBlock, removeResultClicksBlock } from "../utils";

export class ClicksModule extends Module {
  #clickCount = 0;
  #counting = false;
  constructor(type, text) {
    super("clicks", "Счетчик кликов за 3 секунды");
  }

  trigger() {
    if (this.#counting) return;
    this.#clickCount = 0;
    this.#counting = true;

    const countingClicks = () => {
      this.#clickCount += 1;
    };

    document.addEventListener("click", countingClicks);

    setTimeout(() => {
      document.removeEventListener("click", countingClicks);
      this.#counting = false;

      const result = createResultClicksBlock(this.#clickCount);
      document.body.appendChild(result);

      removeResultClicksBlock(result);
    }, 3000);
  }
}
