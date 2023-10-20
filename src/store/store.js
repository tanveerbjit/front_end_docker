import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/home/filter/categorySlice";
import authorReducer from "./slices/home/filter/authorSlice";
import publisherReducer from "./slices/home/filter/publisherSlice";
import ratingReducer from "./slices/home/filter/ratingSlice";
import priceReducer from "./slices/home/filter/priceSlice";
import sortReducer from "./slices/home/sorting/sortingSlice";
import itemNumberReducer from "./slices/home/number_of_item/itemNumberSlice";
import searchReducer from "./slices/home/search/searchingSlice";
import pageReducer from "./slices/home/pagination/paginationSlice";
import userProfileReducer from "./slices/user/profile/userProfileSlice";
import cartReducer from "./slices/cart/cartSlice";
import messageReducer from "./slices/message/messageSlice";



const store = configureStore({
  reducer: {
    category: categoryReducer,
    author: authorReducer,
    publisher: publisherReducer,
    rating: ratingReducer,
    price: priceReducer,
    sort: sortReducer,
    itemNumber: itemNumberReducer,
    search: searchReducer,
    page: pageReducer,
    userProfile: userProfileReducer,
    cart: cartReducer,
    message: messageReducer,
  },
});

export default store;
