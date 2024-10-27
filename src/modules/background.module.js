import { Module } from "../core/module";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super("backgroundColor", "Изменить цвет фона");
  }

  // Метод для создания случайного цвета в Hex
  static randomColor() {
    const letters = "0123456789ABCDEF";
    let colorHex = "#";

    for (let i = 0; i < 6; i++) {
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      colorHex += randomLetter;
    }
    return colorHex;
  }
  // Метод для генерации случайного числа в диапазоне параметров
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Метод для генерации случайного байта для rgba
  #randomByte() {
    return this.randomNumber(0, 255);
  }

  // Метод для создания части свойства с rgba
  #randomCssRgba(percent) {
    let percentWithCorrelation = percent + this.randomNumber(-10, 10);

    return `rgba(${[this.#randomByte(), this.#randomByte(), this.#randomByte(), this.#randomByte()].join(',')}) ${percentWithCorrelation}%`;
  }

  // Метод для создания и объединения случайных свойств в строку
  #randomProperties() {
    const gradientModes = ['linear', 'radial'];
    const objectPositions = ['left', 'center', 'right', 'top', 'bottom'];

    const randomGradientMode = gradientModes[this.randomNumber(0, gradientModes.length - 1)];
    const randomDeg = this.randomNumber(0, 360);
    const randomPos = objectPositions[this.randomNumber(0, objectPositions.length - 1)];

    const colors = [this.#randomCssRgba(10), this.#randomCssRgba(50), this.#randomCssRgba(90)].join(', ');

    switch (randomGradientMode) {
      case 'linear':
        return `linear-gradient(${randomDeg}deg, ${colors})`;
      case 'radial':
        console.log(randomPos)
        return `radial-gradient(circle at ${randomPos}, ${colors})`;
      default:
        return ''; // На всякий случай
    }
  }

  // Метод для смены заднего фона
  #changeBackgroundColor() {
    const newBackground = this.#randomProperties(2);
    document.body.style.background = newBackground;
  }

  trigger() {
    this.#changeBackgroundColor();
  }
}
