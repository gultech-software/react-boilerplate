import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addItemAction, getAllItems } from '../actions/todoActions';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        this.addItem = this.addItem.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    componentDidMount() {
        this.props.getTodos();
    }

    addItem(e) {
        e.preventDefault();
        const { addItem } = this.props;
        const { title } = this.state;
        if (title.trim().length > 0) {
            addItem({
                title,
            });
        }

        this.setState({
            title: '',
        });
    }

    updateTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }

    render() {
        const { todos } = this.props;
        const { title } = this.state;

        return (
            <React.Fragment>
                <h1>Things todo:</h1>
                <form>
                    <input
                        type="text"
                        value={title}
                        onChange={this.updateTitle}
                    />
                    <input
                        type="submit"
                        value="Add Item"
                        onClick={this.addItem}
                    />
                </form>
                <ul>
                    {todos.map(todo => {
                        return <TodoItem key={todo.id} item={todo} />
                    })}
                </ul>
            </React.Fragment>
        );
    }
}

TodoList.defaultProps = {
    todos: [],
};

TodoList.propTypes = {
    addItem: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => {
            dispatch(addItemAction(item));
        },
        getTodos: () => {
            dispatch(getAllItems());
        },
    };
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
