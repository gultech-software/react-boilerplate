import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateItemAction } from '../actions/todoActions';

const TodoItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <li>
            <input
                type="checkbox"
                checked={!!item.done}
                onChange={() => {
                    dispatch(
                        updateItemAction({
                            ...item,
                            done: !item.done,
                        })
                    );
                }}
            />
            {item.title}
            <span className="right">
                {moment(item.updatedAt).format('DD.MM.YYYY HH:mm:ss')}
            </span>
        </li>
    );
};

TodoItem.propTypes = {
    item: PropTypes.shape({
        done: PropTypes.bool,
        title: PropTypes.string,
        updatedAt: PropTypes.string,
    }).isRequired,
};

export default TodoItem;
