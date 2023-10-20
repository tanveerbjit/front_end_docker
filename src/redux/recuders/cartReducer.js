import { CART_INC, CART_DC } from '../type/cartType';

const initialState = {
  value:0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case CART_INC:
        return {
          ...state,
          value: state.value + 1,
        };
        case CART_DC:
        return {
          ...state,
          value: ( state.value === 0 ? 0: state.value -1 ) ,
        };
      default:
        return state;
    }
}
