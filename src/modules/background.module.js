import {Module} from '../core/module'

export class BackgroundModule extends Module {
  constructor(type, text) {
    //Указал type - id li-шки и содержимое li-шки
    super('backgroundColor', 'Изменить цвет фона');
  }
  // Функция для создания случайного цвета в Hex
  //Можно перенести её в utils
  static randomColor() {
    const letters = '0123456789ABCDEF';
    let colorHex = '#';
    
    for (let i = 0; i < 6; i++) {
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      colorHex += randomLetter;
    }
    return colorHex;
  };
  
  // метод для смены заднего фона
  changeBackgroundColor() {
    document.body.style.backgroundColor = `${this.randomColor()}`;
  };
  // Метод вызова нужных функций по нажатию кнопки
  trigger() {
    this.changeBackgroundColor();
  }
}