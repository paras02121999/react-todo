import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const AddTodo = (props) => {
    const [name, setName] = React.useState("")
    const [tech, setTech] = React.useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!name || !tech) {
            alert("Fill the data")
        }
        props.add(name, tech)
    }

    return (<>
        <h2>Add Todo</h2>
        <form onSubmit={submit}>
            <TextField id="standard-basic" value={name} onChange={(e) => { setName(e.target.value) }} label="Name" variant="standard" style={{ marginRight: "15px" }} />
            <TextField id="standard-basic" value={tech} onChange={(e) => { setTech(e.target.value) }} label="Technology" variant="standard" style={{ marginRight: "15px" }} />
            <Button type="submit" variant="contained" style={{ marginTop: "10px" }}><AddIcon /></Button>
        </form>
    </>)
};
export default AddTodo