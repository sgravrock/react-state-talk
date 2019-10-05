import React, {useState} from 'react';

interface CartLine {
    productName: string;
    unitPrice: number;
}

export function HoistingStateBefore() {
    const cart = [
        {productName: "Apples", unitPrice: 1.23},
        {productName: "Oranges", unitPrice: 1.50},
    ];

    return (
        <table>
            <thead>
            <tr>
                <th>Product</th>
                <th>Price per</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            </thead>
            <tbody>
            {cart.map(line => <CartRow line={line} key={line.productName} />)}
            </tbody>
        </table>
    );
}

function CartRow(props: {line: CartLine}) {
    const [quantity, setQuantity] = useState(1);

    return (
        <tr>
            <td>{props.line.productName}</td>
            <td>{props.line.unitPrice}</td>
            <td>
                <input
                    type="number"
                    value={quantity}
                    onChange={e => {
                        const newQty = parseInt(e.target.value, 10);
                        setQuantity(newQty);
                    }}
                />
            </td>
            <td>{props.line.unitPrice * quantity}</td>
        </tr>
    )
}