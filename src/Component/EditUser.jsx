import React from 'react';
import './Edit.css';
//import { useState, useContext, useEffect } from 'react';
//import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";


const EditUser = (props) => {
    // const { users, editUser } = useContext(GlobalContext);
    // const [selectedUser, setSelectedUser] = useState({
    //     id: '',
    //     firstName: '',
    //     lastName: ''
    // });

    // const history = useHistory();
    // const currentUserId = props.match.params.id;

    // useEffect(() => {
    //     const userId = currentUserId;
    //     const selectedUser = users.find(user => user.id === Number(userId));
    //     setSelectedUser(selectedUser);
    // }, [currentUserId, users])

    // const handleSubmit = () => {
    //     //e.preventDefault();
    //     editUser(selectedUser);
    //     history.push('/new');
    // }

    // const handleNameChange = (e) => {
    //     setSelectedUser({ ...selectedUser, [e.target.firstName]: e.target.value })
    // }
    // const handleLastNameChange = (e) => {
    //     setSelectedUser({ ...selectedUser, [e.target.lastName]: e.target.value })
    // }
    return (
        <div className="update">
            <Form /*onSubmit={handleSubmit}*/>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input className="p-3 border-dark" type="text" /*value={selectedUser.firstName} onChange={handleNameChange}*/ placeholder="First Name"></Input>
                    <Label>Last Name</Label>
                    <Input className="p-3 border-dark" type="text" /*value={selectedUser.lastName} onChange={handleLastNameChange} */placeholder="Last Name" ></Input>
                </FormGroup>
                <Button className="mt-5" type="submit">Edit User</Button>
                <Link to="/new" className="btn btn-danger mt-5">Cancel</Link>
            </Form>
        </div>
    )
}
export default EditUser;