import React, {useState, memo} from "react";

export function CounterWithMemo(props: {}) {
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

const CountDisplay = memo(function(props: {count: number}) {
    console.log("CountDisplay rendering with props:", props);
    return <div>The count is {props.count}.</div>;
});

const Header = memo(function(props: {text: string}) {
    console.log("Header rendering with props:", props);
    return <h1>{props.text}</h1>;
});