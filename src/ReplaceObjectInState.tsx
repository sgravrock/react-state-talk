import React, {useState} from 'react';

interface Counter {
    name: string;
    count: number;
}

export function ReplaceObjectInState() {
    const [counter, setCounter] = useState<Counter>({name: "my counter", count: 0});

    function increment() {
        console.log("Incrementing");
        setCounter({
            ...counter,
            count: counter.count + 1
        });
        // The above is roughly equivalent to:
        // const newCounter = {
        //     name: counter.name,
        //     count: counter.count + 1
        // };
        // setCounter(newCounter);
    }

    console.log("ReplaceObjectInState rendering");

    return (
        <div>
            <div>The count is {counter.count}.</div>
            <button onClick={increment}>+</button>
        </div>
    );
}