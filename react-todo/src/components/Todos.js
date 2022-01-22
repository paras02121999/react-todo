import React from 'react';
import { TodoItems } from './TodoItems';

export const Todos = (props) => {
    return <>
        <h2>ToDos list</h2>
        {props.data.length === 0 ? "No data avalible" :
            props.data.map((item, i) => {
                return <TodoItems data={item} onDelete={props.onDelete} key={i} />
            })
        }
    </>;
};

export default Todos;
