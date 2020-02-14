import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TodoList from './TodoList';
import { addItemAction, getAllItemsAction } from '../actions/todoActions';

const Home = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    React.useEffect(() => {
        dispatch(getAllItemsAction());
    }, []);

    const addItem = e => {
        e.preventDefault();
        if (title.trim().length > 0) {
            dispatch(addItemAction({ title }));
            setTitle('');
        }
    };

    return (
        <>
            <h1>Things todo:</h1>
            <form>
                <input
                    type="text"
                    value={title}
                    onChange={e => {
                        setTitle(e.target.value);
                    }}
                />
                <input type="submit" value="Add Item" onClick={addItem} />
                <TodoList />
            </form>
        </>
    );
};

export default Home;
