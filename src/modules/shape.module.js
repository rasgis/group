import {Module} from '../core/module'
import { BackgroundModule } from './background.module'

export class ShapeModule extends Module {
    constructor(type, text) {
      super('div','Рандомная фигура');
    }
  
    trigger() {
      const shape = document.createElement(this.type);
      shape.style.width = `${Math.random() * 100}px`;
      shape.style.height = `${Math.random() * 100}px`;
      shape.style.backgroundColor = BackgroundModule.randomColor();
      shape.style.position = 'absolute';
      shape.style.top = `${Math.random() * window.innerHeight}px`;
      shape.style.left = `${Math.random() * window.innerWidth}px`;
      document.body.append(shape);
  
      setTimeout(() => {
        shape.remove();
      }, 3000);
    }
  }