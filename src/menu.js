import { Menu } from "./core/menu";
import { ClicksModule } from "./modules/clicks.module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.clicksModule = new ClicksModule("clicks", "Счетчик кликов");

    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.open(event.pageX, event.pageY);
    });
    // this.click();
  }

  open(x, y) {
    const menuWidth = this.el.offsetWidth;
    const menuHeight = this.el.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (x + menuWidth > screenWidth) {
      x = screenWidth - menuWidth;
    }
    if (y + menuHeight > screenHeight) {
      y = screenHeight - menuHeight;
    }

    this.el.style.top = `${y}px`;
    this.el.style.left = `${x}px`;
    this.el.style.display = "block";
    requestAnimationFrame(() => {
      this.el.classList.add("open");
    });
  }

  close() {
    this.el.classList.remove("open");
  }

  add(item) {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu-item", item.type);
    menuItem.textContent = item.text;

    this.el.appendChild(menuItem);

    menuItem.addEventListener("click", () => {
      item.trigger();
      this.close();
    });
  }

  // click() {
  //   this.el.addEventListener("click", (event) => {
  //     const { target } = event;
  //     const type = target.getAttribute("data-type");
  //     if (type === "clicks") {
  //       this.clicksModule.trigger();
  //     }
  //   });
  // }
}
