import React, {createContext, ReactChild, useContext, useState} from "react";

interface CountContextValue {
    count: number;
    setCount: (n: number) => void;
}

const CountContext = createContext<CountContextValue>({
    count: 0,
    setCount: () => {}
});

function CountProvider(props: {children: ReactChild}) {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{count, setCount}}>
            {props.children}
        </CountContext.Provider>
    );
}

function useCount() {
    const contextValue = useContext(CountContext);

    if (!contextValue) {
        throw new Error("useCount requires a CountProvider but none was found");
    }

    return contextValue;
}

export function BetterContextCounter() {
    return (
        <CountProvider>
            <AnIntermediateComponent/>
        </CountProvider>
    );
}

function AnIntermediateComponent() {
    return <AnotherIntermediateComponent />;
}

function AnotherIntermediateComponent() {
    return <Counter />
}

function Counter() {
    const {count, setCount} = useCount();
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