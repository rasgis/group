import {Module} from '../core/module'

export class ShapeModule extends Module {
    constructor() {
        super('Random Shape');
    }
    
    trigger() {
        const shape = document.createElement('div');
        shape.style.width = `${Math.random() * 100}px`;
        shape.style.height = `${Math.random() * 100}px`;
        shape.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        shape.style.position = 'absolute';
        shape.style.top = `${Math.random() * window.innerHeight}px`;
        shape.style.left = `${Math.random() * window.innerWidth}px`;
        document.body.appendChild(shape);

        setTimeout(() => {
            shape.remove();
        }, 3000);
    }
}