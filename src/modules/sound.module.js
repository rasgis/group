import {Module} from '../core/module'

export class SoundModule extends Module {
    constructor(type, text) {
        super('RandomSound', 'Случайный звук');
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
pauseBrowser(millis) {
    let date = Date.now();
    let curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}

trigger() {
        const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        };
            let audioContext = new AudioContext();
            let oscillator = audioContext.createOscillator() ;
            oscillator.connect(audioContext.destination); 
            oscillator.frequency.value = random(100,5000); 
            oscillator.start();
            this.pauseBrowser(3* 1000);
            oscillator.stop();
}
}
