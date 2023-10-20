import { ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from './bookTypes';
import { booksData } from '../../data'

const initialState = {
  books: booksData,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BOOK:
        return {
          ...state,
          books: [...state.books, action.book],
        };
      case UPDATE_BOOK:
        return {
          ...state,
          books: state.books.map((book) => {
            if (book.id === action.id) {
              return { ...book, ...action.book };
            }
            return book;
          }),
        };
      case DELETE_BOOK:
        return {
          ...state,
          books: state.books.filter((book) => book.id !== action.id),
        };
      default:
        return state;
    }
}
