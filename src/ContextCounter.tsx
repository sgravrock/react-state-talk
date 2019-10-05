import React, {createContext, useContext, useState} from "react";

interface CountContextValue {
    count: number;
    setCount: (n: number) => void;
}

const CountContext = createContext<CountContextValue>({
    count: 0,
    setCount: () => {}
});

export function ContextCounter() {
    const [count, setCount] = useState(0);

    console.log("ContextCounter rendering with count", count);

    return (
        <CountContext.Provider value={{count, setCount}}>
            <AnIntermediateComponent/>
        </CountContext.Provider>
    );
}

function AnIntermediateComponent() {
    return <AnotherIntermediateComponent />;
}

function AnotherIntermediateComponent() {
    return <Counter />
}

function Counter() {
    const {count, setCount} = useContext(CountContext);
    function increment() {
        console.log("Calling setCount");
        setCount(count + 1);
    }

    console.log("Counter rendering with count", count);

    return (
        <div>
            <div>The count is {count}.</div>
            <button onClick={increment}>+</button>
        </div>
    );

}