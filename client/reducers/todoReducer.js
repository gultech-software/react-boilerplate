const INITIAL_STATE = {
    loading: false,
    failed: false,
    todos: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ITEMS_GET_LOADING':
            return {
                loading: true,
                failed: false,
                todos: [],
            };
        case 'ITEMS_GET_FAILED':
            return {
                loading: false,
                failed: true,
                todos: [],
            };
        case 'ITEMS_GET_LOADED':
            return {
                loading: false,
                failed: false,
                todos: action.todos,
            };
        default:
            return state;
    }
};
