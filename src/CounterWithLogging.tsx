import React, {useState} from "react";

export function CounterWithLogging(props: {}) {
    const [count, setCount] = useState(0);

    function increment() {
        console.log("Calling setCount");
        setCount(count + 1);
    }

    function decrement() {
        console.log("Calling setCount");
        setCount(count - 1);
    }

    console.log("Counter rendering with count:", count);

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
    console.log("CountDisplay rendering with props:", props);
    return <div>The count is {props.count}.</div>;
}

function Header(props: {text: string}) {
    console.log("Header rendering with props:", props);
    return <h1>{props.text}</h1>;
}