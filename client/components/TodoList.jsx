import React from 'react';

import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import Loading from './Loading';

const TodoList = () => {
    const loading = useSelector(state => state.todoReducer.loading);
    const todos = useSelector(state => state.todoReducer.todos);

    if (loading) {
        return <Loading />;
    }

    return (
        <ul>
            {todos.map(todo => {
                return <TodoItem key={todo.id} item={todo} />;
            })}
        </ul>
    );
};

export default TodoList;
