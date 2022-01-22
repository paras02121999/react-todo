import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoItems = ({ data, onDelete }) => {
    return <>
        <p>{data.name} - {data.tech} <Button variant="text" size="small" onClick={() => { onDelete(data) }}><DeleteIcon /></Button></p>

    </>;
};

export default TodoItems;
