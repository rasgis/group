export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function createResultClicksBlock(clickCount) {
  const resultClicks = document.createElement("h1");
  resultClicks.textContent = `Количество кликов: ${clickCount}`;

  return resultClicks;
}

export function removeResultClicksBlock(result){
  setTimeout(()=>{
    result.remove()
  }, 5000)
}