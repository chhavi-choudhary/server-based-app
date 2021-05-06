import React from 'react';
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";


 const EditUser = () => {
    return (
        <div>
          <Form>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text" placeholder="Enter First Name"></Input>
                    <Label>Last Name</Label>
                    <Input type="text" placeholder="Enter Last Name" ></Input>
                </FormGroup>
                <Button type="submit">Edit Name</Button>
                <Link to="/new" className="btn btn-danger ml-4">Cancel</Link>
            </Form>  
        </div>
    )
}
export default EditUser;