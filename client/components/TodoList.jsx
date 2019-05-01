import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllItems } from '../actions/todoActions';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
    	const { todos } = this.props;

        return (
            <React.Fragment>
                <h1>Things todo:</h1>
                <ul>
                    {todos.map(todo => {
                        return <li>{todo}</li>;
                    })}
                </ul>
            </React.Fragment>
        );
    }
}

TodoList.defaultProps = {
    todos: [],
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getTodos: getAllItems,
        },
        dispatch
    );
};

const mapStateToProps = state => {
    const { todoReducer } = state;

    return {
        todos: todoReducer.todos,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
