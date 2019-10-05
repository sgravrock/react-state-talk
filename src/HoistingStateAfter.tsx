import React, {useState} from 'react';

interface CartLine {
    productName: string;
    unitPrice: number;
    quantity: number;
}

export function HoistingStateAfter() {
    const [cart, setCart] = useState([
        {productName: "Apples", unitPrice: 1.23, quantity: 1},
        {productName: "Oranges", unitPrice: 1.50, quantity: 1},
    ]);

    let totalPrice = 0;
    cart.forEach(item => totalPrice += item.unitPrice * item.quantity);

    function setQuantity(i: number, qty: number) {
        const newCart = [...cart];  // Create a shallow copy of the cart
        newCart[i] = {
            ...newCart[i],  // Create a shallow copy of the ith cart line
            quantity: qty
        };
        setCart(newCart);
    }

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
            {cart.map((line, i) => (
                <CartRow
                    line={line}
                    key={line.productName}
                    onQtyChange={qty => setQuantity(i, qty)}
                />
            ))}
            <tr>
                <td><b>Total</b></td>
                <td></td>
                <td></td>
                <td>{totalPrice}</td>
            </tr>
            </tbody>
        </table>
    );
}

interface CartRowProps {
    line: CartLine;
    onQtyChange: (qty: number) => void;
}

function CartRow(props: CartRowProps) {
    return (
        <tr>
            <td>{props.line.productName}</td>
            <td>{props.line.unitPrice}</td>
            <td>
                <input
                    type="number"
                    value={props.line.quantity}
                    onChange={e => {
                        const newQty = parseInt(e.target.value, 10);
                        props.onQtyChange(newQty);
                    }}
                />
            </td>
            <td>{props.line.unitPrice * props.line.quantity}</td>
        </tr>
    )
}