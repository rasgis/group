import "./styles.css";

import { ContextMenu } from "./menu";
import { ClicksModule } from "./modules/clicks.module";

const contextMenu = new ContextMenu("#menu");
const clickModule = new ClicksModule("clicks", "Счетчик кликов за 3 секунды");

contextMenu.add(clickModule);

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.open(event.pageX, event.pageY);
});
