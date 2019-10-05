import React, {useState} from 'react';

interface Counter {
    name: string;
    count: number;
}

export function StateModification() {
    const [counter] = useState({name: "my counter", count: 0});

    function increment() {
        console.log("Incrementing");
        counter.count += 1; // Wrong!
    }

    console.log("StateModification rendering");

    return (
        <div>
            <div>The count is {counter.count}.</div>
            <button onClick={increment}>+</button>
        </div>
    );
}