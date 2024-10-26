import './styles.css'

import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module';
import { SoundModule } from './modules/sound.module';

const contextMenu = new ContextMenu('#menu');
//Объявил свой модуль
const backgroundModule = new BackgroundModule();

contextMenu.add(backgroundModule); 
contextMenu.add(new ShapeModule());
contextMenu.add(new SoundModule());

//Можно дописать в аргументы остальные модули через запятую
// Пример: contextMenu.add(backgroundModule, createObject, customModule...); 

document.addEventListener('contextmenu', event => {
    event.preventDefault();
    contextMenu.open(event.pageX, event.pageY);
});