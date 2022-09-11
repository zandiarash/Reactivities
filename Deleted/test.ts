export interface Duck {
    name: string;
    numberOfLegs: number;
    makeSound: (sound: string) => void;
}


const Duck1: Duck = {
    name: 'Arash',
    numberOfLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const Duck2: Duck = {
    name: 'Arash2',
    numberOfLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

export const Duck = [Duck1, Duck2]