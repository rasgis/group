import './styles.css'
import './soundstyles.css'
import './pianostyles.css'

import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module';
import { SoundModule } from './modules/sound.module';
import { PianoModule } from './modules/piano.module';

const contextMenu = new ContextMenu('#menu');

contextMenu.add(new BackgroundModule()); 
contextMenu.add(new ShapeModule());
contextMenu.add(new SoundModule());
contextMenu.add(new PianoModule());
//Можно дописать в аргументы остальные модули через запятую
// Пример: contextMenu.add(backgroundModule, createObject, customModule...);

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.open(event.pageX, event.pageY);
});