class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name} - ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

class CarShort {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

class Animal { // public, protected, private as in PHP - модификаторы
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log(('go'))
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('dd')
    }

    info(): string {
        return 'dd2'
    }
}