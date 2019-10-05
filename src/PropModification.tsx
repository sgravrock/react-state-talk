import React from 'react';

interface Counter {
    name: string;
    count: number;
}

export function PropModification() {
    const counter = {name: "my counter", count: 0};
    return <ModifiesItsProps counter={counter} />
}

export function ModifiesItsProps(props: {counter: Counter}) {
    function increment() {
        console.log("Incrementing");
        props.counter.count += 1; // Wrong!
    }

    console.log("ModifiesItsProps rendering");

    return (
        <div>
            <div>The count is {props.counter.count}.</div>
            <button onClick={increment}>+</button>
        </div>
    );
}