import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateItem } from '../actions/todoActions';

const TodoItem = ({ item, dispatch }) => {
	return (
		<li>
			<input 
				type="checkbox" 
				checked={item.done} 
				onClick={() => {
					dispatch(updateItem({
						...item,
						done: !item.done,
					}));
				}
			}/>
			{item.title}
			<span className="right">
				{ 
					item.updatedAt === undefined
					? moment(item.updatedAt).format('DD-MM-YYYY HH:mm:ss')
					: moment(item.updatedAt).format('DD-MM-YYYY HH:mm:ss')
				}
			</span>
		</li>
	);
}

export default connect()(TodoItem);