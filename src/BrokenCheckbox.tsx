import React, {useState} from "react";


function Checkbox(props: {label: string, checked: boolean}) {
    const [checked, setChecked] = useState(props.checked);

    return (
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
            />
            {props.label}
        </label>
    );
}

export function BrokenCheckbox() {
    const [checked, setChecked] = useState(false);

    function reset() {
        setChecked(false);
    }

    return (
        <>
            <Checkbox label="A checkbox" checked={checked} />
            <div><button onClick={reset}>Reset</button></div>
        </>
    );
}