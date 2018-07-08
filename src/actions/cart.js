export const addToCart= obj => ({
    type: 'ADD_BOOKS_TO_CART',
    payload: obj
})

export const removeFromCart= id => ({
    type: 'REMOVE_BOOKS_FROM_CART',
    payload: id
})
