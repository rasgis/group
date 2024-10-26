import {Module} from '../core/module'

export class SoundModule extends Module {

renderElements() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'soundstyles.css';
    document.head.appendChild(link);
    
    const $body = document.querySelector('body');
    const $divSound = this.createElement('div','sound',null);
    const $h1 = this.createElement('h1','sound-h1','Random sound generation');
    $divSound.appendChild($h1);
    const $divSoundWraper = this.createElement('div','sound__wrapper',null);
    $divSound.appendChild($divSoundWraper);
    const $form = this.createElement('form','sound-block',null);
    $divSoundWraper.appendChild($form);
    const $div = this.createElement('div',null,null);
    $form.appendChild($div);
    const $input = this.createElement('input','sound-duration-input',null);
    $input.type = "text";
    $input.value = "3";
    $div.appendChild($input);
    const $label = this.createElement('label','sound-duration-label','Duration in sec.')
    $div.appendChild($label);
    const $button = this.createElement('button','generate-sound-button','Generate');
    $form.appendChild($button);
    $body.appendChild($divSound);    
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
generateSound(frequency,duration) {
    audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    volume = 10;
    let oscillator = audioCtx.createOscillator();
    let gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    oscillator.start();
    setTimeout(
        function() {
          oscillator.stop();
        },
        duration
    );
}

trigger() {
    this.renderElements();
    $generateButton = document.querySelector('.generate-sound-button');
    $generateButton.addEventListener('click',() =>{
        const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        const duration =  document.querySelector('.sound-duration-input').value;
        if (isNaN(Number(duration))) prompt('duration is incorrect')
        else {
            this.generateSound(random(20,20000),duration);
        }
    });
}
}