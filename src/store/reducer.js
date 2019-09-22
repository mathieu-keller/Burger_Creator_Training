export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const DEL_INGREDIENTS = 'DEL_INGREDIENTS';
export const SET_PRICE = 'SET_PRICE';

const initState = {
    ingredients: {},
    price: 4
};

const reducer = (state = initState, action) => {

    switch (action.type) {
        case SET_INGREDIENTS:
            return {...state, ingredients: action.payload};
        case ADD_INGREDIENTS:
            const ingredientsCopyForAdd = {...state.ingredients};
            ingredientsCopyForAdd[action.payload] = ingredientsCopyForAdd[action.payload] ? ingredientsCopyForAdd[action.payload] + 1 : 1;
            return {...state, ingredients: ingredientsCopyForAdd};
        case DEL_INGREDIENTS:
            const ingredientsCopyForDelete = {...state.ingredients};
            ingredientsCopyForDelete[action.payload] = ingredientsCopyForDelete[action.payload] ? ingredientsCopyForDelete[action.payload] - 1 : 0;
            if (ingredientsCopyForDelete[action.payload] === 0) {
                delete ingredientsCopyForDelete[action.payload];
            }
            return {...state, ingredients: ingredientsCopyForDelete};
        case SET_PRICE:
            return {...state, price: action.payload};
        default:
            return state;
    }

};

export default reducer;