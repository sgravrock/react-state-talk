import React, {useState} from "react";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

function Checkbox(props: CheckboxProps) {
    return (
        <label>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={e => props.onChange(e.target.checked)}
            />
            {props.label}
        </label>
    );
}

export function FixedCheckbox() {
    const [checked, setChecked] = useState(false);

    function reset() {
        setChecked(false);
    }

    return (
        <>
            <Checkbox label="A checkbox" checked={checked} onChange={setChecked} />
            <div><button onClick={reset}>Reset</button></div>
        </>
    );
}