const initialState = {
    count: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'INCREMENT_COUNT':
            return {
                ...state,
                count: state.count + 1,
            };

        case 'DECREMENT_COUNT':
            return {
                ...state,
                count: state.count - 1,
            };

        case 'ADD_VALUE':
            return {
                ...state,
                count: state.count + action.data,
            };

        case 'SUBTRAC_VALUE':
            return {
                ...state,
                count: state.count - action.data,
            };      

        default:
            return state;
    }
};