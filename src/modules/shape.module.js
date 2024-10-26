import {Module} from '../core/module'
import { BackgroundModule } from './background.module'

export class ShapeModule extends Module {
    constructor(type, text) {
      super('div','Рандомная фигура');
    }
  
    trigger() {

        const width = Math.random() * 300;
        const height = Math.random() * 300;

        const shape = document.createElement(this.type);
        shape.style.width = `${width}px`;
        shape.style.height = `${height}px`;
        shape.style.backgroundColor = BackgroundModule.randomColor();
        shape.style.borderRadius = `${Math.floor(Math.random() * 80) + 5}%`;
        shape.style.position = 'absolute';

        const maxTop = window.innerHeight - height; 
        const maxLeft = window.innerWidth - width; 

        const top = Math.random() * maxTop;
        const left = Math.random() * maxLeft;

        shape.style.top = `${top}px`;
        shape.style.left = `${left}px`;
        document.body.append(shape);
  
        setTimeout(() => {
            shape.remove();
        }, 3000);
    }
  }