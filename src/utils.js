export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function createResultClicksBlock(clickCount) {
  const resultClicks = document.createElement("h1");
  resultClicks.textContent = `Количество кликов: ${clickCount}`;

  return resultClicks;
}

export function removeResultClicksBlock(result) {
  setTimeout(() => {
    result.remove();
  }, 5000);
}

export function startTimer(seconds, id) {
  const timerBlock = createTimerBlock();
  document.body.appendChild(timerBlock);

  id = setInterval(() => {
    if (seconds < 0) {
      timerBlock.remove();
      clearInterval(id);
      const endMessage = createEndTimerMessage();
      document.body.appendChild(endMessage);
      setTimeout(() => {
        endMessage.remove();
      }, 5000);
      return;
    }

    timerBlock.textContent = `Оставшееся время: ${seconds}`;
    seconds -= 1;
  }, 1000);
}

function createTimerBlock() {
  const timerContainer = document.createElement("div");
  timerContainer.className = "timer-container";

  return timerContainer;
}

function createEndTimerMessage() {
  const endTimerMessage = document.createElement("h1");
  endTimerMessage.textContent = `Время вышло!`;

  return endTimerMessage;
}
