import {Module} from '../core/module'

export class PianoModule extends Module {

    constructor(type, text) {
        //Указал type - id li-шки и содержимое li-шки
        super('SimplePiano', 'Пианино');
      }
  
renderElements() {
    if (document.querySelector('.wrapper') === null) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'pianostyles.css';
    document.head.appendChild(link);
    const $body = document.querySelector('body');
    const $divwrapper = this.createElement('div','wrapper',null);
    const $h1 = this.createElement('h1',null,'Piano for hakaton');
    $divwrapper.appendChild($h1);
    const $closeButton = this.createElement('button','close-button','X');
    $divwrapper.appendChild($closeButton);
    const $ul = this.createElement('ul','piano-keys',null);
    $ul.innerHTML = 
    '<li class="key white" data-key="a"></li>'+
    '<li class="key black" data-key="w"></li>'+
    '<li class="key white" data-key="s"></li>'+
    '<li class="key black" data-key="e"></li>'+
    '<li class="key white" data-key="d"></li>'+
    '<li class="key white" data-key="f"></li>'+
    '<li class="key black" data-key="t"></li>'+
    '<li class="key white" data-key="g"></li>'+
    '<li class="key black" data-key="y"></li>'+
    '<li class="key white" data-key="h"></li>'+
    '<li class="key black" data-key="u"></li>'+
    '<li class="key white" data-key="j"></li>'+
    '<li class="key white" data-key="k"></li>'+
    '<li class="key black" data-key="o"></li>'+
    '<li class="key white" data-key="l"></li>'+
    '<li class="key black" data-key="p"></li>'+
    '<li class="key white" data-key=";"></li>';
    $divwrapper.appendChild($ul);
    $body.appendChild($divwrapper);
    }
}
createElement (element, className, textContent) {
    let $element = null;
    if (element != null)
    {
        $element = document.createElement(element);
        if (className != null) {
            $element.classList.add(className);
        }
        if (textContent != null) {
            $element.textContent = textContent;
        }
    }
    return $element;
}
makeKeysAlive() {
   const pianoKeys = document.querySelectorAll(".piano-keys .key");
let allKeys = [],
audio = new Audio('/modules/tunes/a.wav'); 

const playTune = (key) => {
    audio.src = `./src/modules/tunes/${key}.wav`; 
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`); 
    clickedKey.classList.add("active"); 
    setTimeout(() => {clickedKey.classList.remove("active");}, 350);
}
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
});
const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}
document.addEventListener("keydown", pressedKey);
}
trigger() {
    this.renderElements();
    this.makeKeysAlive();
    const $closebutton = document.querySelector('.close-button');
    $closebutton.addEventListener('click',() =>{
        document.querySelector('.wrapper').remove();
        const $link = document.querySelector('link');
        if ($link.href === 'pianostyles.css') {
            $link.remove();
        }
    });
}
}