import React from 'react';
import './Edit.css';
import { GlobalContext } from "../context/GlobalState";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
} from "reactstrap";

const NewUserlist = () => {
    const { users } = useContext(GlobalContext);
    //console.log(users);
    return (
        <div className="update1">
            <h2>To add more users to the list click on Add User button!!</h2>
        <ListGroup className="mt-5 border-dark">
            {users.map(user =>(
            <ListGroupItem className="d-flex justify-content-between border-dark">
                <strong>{user.firstName}</strong>
                <strong>{user.lastName}</strong>
                <strong>{user.status}</strong>
                <div className="ml-auto">
                    <Link to={`/edit/${user.id}`} className="btn btn-warning mr-1">Edit</Link>
                </div>
            </ListGroupItem>
            ))}
        </ListGroup>
        <h2>To go back to the user list click on UserList</h2>
        </div>
    )
}
export default NewUserlist;