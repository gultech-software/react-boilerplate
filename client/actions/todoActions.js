import axios from 'axios';

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
                    payload: response.data,
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
