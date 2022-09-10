import React from 'react';
import { Duck } from './test'

interface Props {
    duck: Duck;
}

export default function DuckItem({duck}: Props) {
    return (
        <div key={duck.name}>
            <button onClick={() => duck.makeSound(duck.name + 'quack')}>{duck.name}</button>
        </div>
    )
}