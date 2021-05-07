import React from 'react';
import { v4 as uuid } from "uuid";
import  { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from 'react-router-dom';



const AddUser = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const { addUser } = useContext(GlobalContext);
    const history= useHistory();
    
    const onSubmit=()=>{
        //e.preventDefault();
        const newUser1={
            id:uuid(),
            firstName,
            lastName
        }
        addUser(newUser1);
        history.push('/new');
    }

    const onChange=(e)=>{
        setFirstName(e.target.value);
    }
    const onChange1=(e)=>{
        setLastName(e.target.value);
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text"  value ={firstName} onChange={onChange}
                    placeholder=" First Name" required></Input>
                    <Label>Last Name</Label>
                    <Input type="text"  value ={lastName} onChange={onChange1}
                    placeholder="Last Name" ></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to="/new" className="btn btn-danger ml-4">Cancel</Link>
            </Form>
        </div>
    )
}
export default AddUser;