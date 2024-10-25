import './styles.css'

import { ContextMenu } from './menu';

const contextMenu = new ContextMenu('#menu');

contextMenu.add('Счетчик кликов');
contextMenu.add('Рандомная фигура');
contextMenu.add('Таймер отчета');
contextMenu.add('Рандомный звук');
contextMenu.add('Рандомный фон');
contextMenu.add('Кастомное сообщение');
contextMenu.add('Собственный модуль модуль');
contextMenu.add('Мастхэв');

document.addEventListener('contextmenu', event => {
    event.preventDefault();
    contextMenu.open(event.pageX, event.pageY);
});