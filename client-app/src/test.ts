interface IDuck {
    name: string;
    numberOfLegs: number;
    makeSound: (sound: string) => void;
}


const duck1: IDuck = {
    name: 'Arash',
    numberOfLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}