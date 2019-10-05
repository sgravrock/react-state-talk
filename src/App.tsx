import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterWithLogging} from "./CounterWithLogging";
import {PropModification} from "./PropModification";
import {StateModification} from "./StateModification";
import {ContextCounter} from "./ContextCounter";
import {ReplaceObjectInState} from "./ReplaceObjectInState";
import {HoistingStateBefore} from "./HoistingStateBefore";
import {HoistingStateAfter} from "./HoistingStateAfter";
import {CounterWithMemo} from "./CounterWithMemo";
import {BrokenCheckbox} from "./BrokenCheckbox";
import {FixedCheckbox} from "./FixedCheckbox";
import {BetterContextCounter} from "./BetterContextCounter";

enum Page {
    Counter,
    CounterWithLogging,
    CounterWithMemo,
    PropModification,
    StateModification,
    ContextCounter,
    BetterContextCounter,
    ReplaceObjectInState,
    HoistingStateBefore,
    HoistingStateAfter,
    BrokenCheckbox,
    FixedCheckbox
}

const App: React.FC = () => {
    const [page, setPage] = useState<Page | null>(null);

    return (
        <div className="App">
            {selectedPage()}
        </div>
    );

    function selectedPage() {
        switch (page) {
            case Page.Counter:
                return <Counter/>;
            case Page.CounterWithLogging:
                return <CounterWithLogging/>;
            case Page.CounterWithMemo:
                return <CounterWithMemo/>;
            case Page.PropModification:
                return <PropModification/>;
            case Page.StateModification:
                return <StateModification/>;
            case Page.ContextCounter:
                return <ContextCounter />;
            case Page.BetterContextCounter:
                return <BetterContextCounter/>;
            case Page.ReplaceObjectInState:
                return <ReplaceObjectInState/>;
            case Page.HoistingStateBefore:
                return <HoistingStateBefore/>;
            case Page.HoistingStateAfter:
                return <HoistingStateAfter/>;
            case Page.BrokenCheckbox:
                return <BrokenCheckbox />;
            case Page.FixedCheckbox:
                return <FixedCheckbox/>;
            default:
                return PageSelector();
        }
    }

    function PageSelector() {
        return (
            <>
                <button className="App-page" onClick={() => setPage(Page.Counter)}>
                    Counter
                </button>
                <button className="App-page" onClick={() => setPage(Page.CounterWithLogging)}>
                    Counter with logging
                </button>
                <button className="App-page" onClick={() => setPage(Page.CounterWithMemo)}>
                    Memoized counter
                </button>
                <button className="App-page" onClick={() => setPage(Page.ContextCounter)}>
                    Counter using context
                </button>
                <button className="App-page" onClick={() => setPage(Page.BetterContextCounter)}>
                    Better counter using context
                </button>
                <button className="App-page" onClick={() => setPage(Page.PropModification)}>
                    Prop modification
                </button>
                <button className="App-page" onClick={() => setPage(Page.StateModification)}>
                    State modification
                </button>
                <button className="App-page" onClick={() => setPage(Page.ReplaceObjectInState)}>
                    Replace object in state instead of modifying
                </button>
                <button className="App-page" onClick={() => setPage(Page.HoistingStateBefore)}>
                    Hoisting state (before)
                </button>
                <button className="App-page" onClick={() => setPage(Page.HoistingStateAfter)}>
                    Hoisting state (after)
                </button>
                <button className="App-page" onClick={() => setPage(Page.BrokenCheckbox)}>
                    Two sources of truth
                </button>
                <button className="App-page" onClick={() => setPage(Page.FixedCheckbox)}>
                    One source of truth
                </button>
            </>
        );
    }
};

export default App;
