const initialState =[]

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state,action.data]
        default:
            return state;
    }
};