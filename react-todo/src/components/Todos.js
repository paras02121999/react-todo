import React from 'react';
import {TodoItems} from './TodoItems';

export const Todos = (props) => {
    return <>
        <h1>ToDos list</h1>
        {props.data.map((item, i) => {
            return <TodoItems data={item} onDelete={props.onDelete} key={i}/>
        })}
    </>;
};

export default Todos;
