export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const DEL_INGREDIENTS = 'DEL_INGREDIENTS';

const initState = {
    ingredients: {},
    price: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
const basePrice = 4;
const reducer = (state = initState, action) => {

    switch (action.type) {
        case SET_INGREDIENTS:
            const price = Object.keys(action.payload).map(key => INGREDIENT_PRICES[key] * action.payload[key]).reduce((a, b) => a + b);
            return {...state, ingredients: action.payload, price: price + basePrice};
        case ADD_INGREDIENTS:
            const stateCopyForAdd = {...state};
            const ingredientsCopyForAdd = {...stateCopyForAdd.ingredients};
            ingredientsCopyForAdd[action.payload] = ingredientsCopyForAdd[action.payload] ? ingredientsCopyForAdd[action.payload] + 1 : 1;
            stateCopyForAdd.price = stateCopyForAdd.price + INGREDIENT_PRICES[action.payload];
            return {...state, price: stateCopyForAdd.price, ingredients: ingredientsCopyForAdd};
        case DEL_INGREDIENTS:
            const stateCopyForDel = {...state};
            const ingredientsCopyForDelete = {...stateCopyForDel.ingredients};
            const oldCount = ingredientsCopyForDelete[action.payload] ? ingredientsCopyForDelete[action.payload] : 0;
            const newCount = oldCount - 1 > 0 ? oldCount - 1 : 0;
            ingredientsCopyForDelete[action.payload] = newCount;
            if (ingredientsCopyForDelete[action.payload] === 0) {
                delete ingredientsCopyForDelete[action.payload];
            }
            if (oldCount !== newCount) {
                let newPrice = stateCopyForDel.price - INGREDIENT_PRICES[action.payload];
                if (newPrice < basePrice) {
                    newPrice = basePrice;
                }
                stateCopyForDel.price = newPrice;
            }
            return {...state, price: stateCopyForDel.price, ingredients: ingredientsCopyForDelete};
        default:
            return state;
    }

};

export default reducer;