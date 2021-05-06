import React from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from 'react-router-dom';
const AddUser = () => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Id</Label>
                    <Input type="text" placeholder="Enter Id"></Input>
                    <Label>First Name</Label>
                    <Input type="text" placeholder="Enter First Name"></Input>
                    <Label>Last Name</Label>
                    <Input type="text" placeholder="Enter Last Name" ></Input>
                </FormGroup>
                <Button type="submit">Add New User</Button>
                <Link to="/new" className="btn btn-danger ml-4">Cancel</Link>
            </Form>
        </div>
    )
}
export default AddUser;