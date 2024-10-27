import { Module } from "../core/module";
import { startTimer } from "../utils";

export class Timer extends Module {
  #timerId;
  constructor(type, text) {
    super("timer", "Таймер");
    this.#timerId = null;
  }

  trigger() {
    const seconds = prompt("Введите время таймера в секундах:");
    let secondsNumber = Number(seconds);

    if (isNaN(secondsNumber) || secondsNumber <= 0) {
      alert("Введите корректное положительное число");
      return;
    }

    startTimer(secondsNumber, this.#timerId);
  }
}