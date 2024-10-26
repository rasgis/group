import './styles.css'

import { ContextMenu } from './menu';
import { MessageModule } from './modules/message.module'


const contextMenu = new ContextMenu('#menu');

contextMenu.add(new MessageModule());

document.addEventListener('contextmenu', event => {
    event.preventDefault();
    contextMenu.open(event.pageX, event.pageY);
});