import React, {useState} from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    function increment() { setCount(count + 1); }
    function decrement() { setCount(count - 1); }

    return (
        <div>
            <Header text="Simple counter" />
            <CountDisplay count={count} />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

function CountDisplay(props: {count: number}) {
    return <div>The count is {props.count}.</div>;
}

function Header(props: {text: string}) {
    return <h1>{props.text}</h1>;
}