import React from 'react';
import { v4 as uuid } from "uuid";
import  { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from 'react-router-dom';



const AddUser = () => {
    const { addUser } = useContext(GlobalContext);
    const [firstName,setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [status, setStatus]=useState('');
   
    const history= useHistory();
    
    const handleSubmit=()=>{
        //e.preventDefault();
        const newUser={
            id:uuid(),
            firstName,
            lastName,
            status
        }
        addUser(newUser);
        history.push('/new');
    }

    const handleNameChange=(e)=>{
        setFirstName(e.target.value);
    }
    const handleLastNameChange=(e)=>{
        setLastName(e.target.value);
    }
    const handlestatusChange=(e)=>{
        setStatus(e.target.value);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text"  value ={firstName} onChange={handleNameChange}
                    placeholder=" First Name" required></Input>
                    <Label>Last Name</Label>
                    <Input type="text"  value ={lastName} onChange={handleLastNameChange}
                    placeholder="Last Name" required ></Input>
                    <Label>Status</Label>
                    <Input type="text"  value ={status} onChange={handlestatusChange}
                    placeholder="Last Name" required ></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to="/new" className="btn btn-danger ml-4">Cancel</Link>
            </Form>
        </div>
    )
}
export default AddUser;