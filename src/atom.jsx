import { atom } from "jotai";

export const shoppingCart = atom([]);
export const getTotal = (cart) => {
    const total = cart.reduce((prev, current) => prev + current.price * current.quantity, 0);
    return total.toFixed(2)
}
