import axios from 'axios';

export const addItemAction = item => {
    return dispatch => {
        dispatch({
            type: 'ITEMS_ADD_LOADING',
        });

        return axios
            .post('/api/todo', item)
            .then(response => {
                dispatch({
                    type: 'ITEMS_ADD_LOADED',
                    payload: response.data,
                });

                dispatch(getAllItems());
            })
            .catch(response => {
                dispatch({
                    type: 'ITEMS_ADD_FAILED',
                    error: response.message,
                });
            });
    };
};

export const getAllItems = () => {
    return dispatch => {
        dispatch({
            type: 'ITEMS_GET_LOADING',
        });

        return axios
            .get('/api/todo')
            .then(response => {
                dispatch({
                    type: 'ITEMS_GET_LOADED',
                    todos: response.data,
                });
            })
            .catch(response => {
                dispatch({
                    type: 'ITEMS_GET_FAILED',
                    error: response.message,
                });
            });
    };
};
