import { SET_PIC } from '../type/userType';

const initialState = {
  pic: "https://valerehealthcare.co/web/front/assets/images/icon/default.png",
  error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PIC:
        return {
          ...state,
          pic: action.pic,
        };
      default:
        return state;
    }
}
