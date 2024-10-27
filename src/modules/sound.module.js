import {Module} from '../core/module'

export class RandomSound extends Module {
    constructor() {
        super('div','Рандомный звук')
        this.sounds = [
            'https://www.soundjay.com/buttons/sounds/button-1.mp3',
            'https://www.soundjay.com/buttons/sounds/button-2.mp3',
            'https://www.soundjay.com/buttons/sounds/button-3.mp3',
            'https://www.soundjay.com/buttons/sounds/button-4.mp3'
        ];
    }

    #playRandomSound() {
        const randomSound = this.sounds[Math.floor(Math.random() * this.sounds.length)];
        const audio = new Audio(randomSound);
        audio.play();
    }

    trigger() {
        this.#playRandomSound();
    }
}
import {Module} from '../core/module'

export class SoundManager extends Module {

}

