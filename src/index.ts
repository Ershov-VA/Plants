import './client/style/app.scss'
import { IPlant } from './typing';

class TestClass {
    constructor() {
        let msg = 'Using ES2015+'
        console.log(msg);
    }
}

let test = new TestClass()


class Plant implements IPlant {
    title: string;

    constructor(title: string) {
        this.title = title        
    }
}

const pepper = new Plant('перец')

console.log(pepper);
