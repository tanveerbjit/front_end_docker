import { CART_INC,CART_DC } from '../type/cartType';

export const cartInc = (value) => {
    return {
        type: CART_INC,
        value
    }
}

export const cartDc = (value) => {
    return {
        type: CART_DC,
        value
    }
}