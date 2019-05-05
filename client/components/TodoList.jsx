import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import Loading from './Loading';

const TodoList = ({ todos, loading }) => {
    if (loading) {
        return <Loading />
    }

    return (
        <ul>
            {todos.map(todo => {
                return <TodoItem key={todo.id} item={todo} />
            })}
        </ul>
    );
}

TodoList.defaultProps = {
    todos: [],
    loading: false,
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({})),
    loading: PropTypes.bool,
};

export default TodoList;
