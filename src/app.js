import './styles.css'
import './soundstyles.css'
import './pianostyles.css'

import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module';
import { SoundModule } from './modules/sound.module';
import { PianoModule } from './modules/piano.module';
import { ClicksModule } from "./modules/clicks.module";
import { Timer } from "./modules/timer.module";
import { MessageModule } from "./modules/message.module"

const contextMenu = new ContextMenu("#menu");

contextMenu.add(new BackgroundModule());
contextMenu.add(new ShapeModule());
contextMenu.add(new SoundModule());
contextMenu.add(new PianoModule());
contextMenu.add(new ClicksModule());
contextMenu.add(new Timer());
contextMenu.add(new MessageModule());

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.open(event.pageX, event.pageY);
});