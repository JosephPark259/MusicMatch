const indexChange = (state = 0,action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return action.payload;
        case 'LENGTHSET':
            return action.payload;
        default:
            return state;
    }
}

export default indexChange;