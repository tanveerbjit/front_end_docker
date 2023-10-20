import { ADD_BOOK, UPDATE_BOOK, DELETE_BOOK} from './bookTypes';

export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        book
    }
}

export const updateBook = (id, book) => {
    return {
        type: UPDATE_BOOK,
        id,
        book
    }
}

export const deleteBook = (id) => {
    return {
        type: DELETE_BOOK,
        id
    }
}
