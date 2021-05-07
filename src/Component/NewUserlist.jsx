import React from 'react';
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
        <ListGroup className="mt-4">
            {users.map(user =>(
            <ListGroupItem className="d-flex justify-content-between">
                <strong>{user.firstName}</strong>
                <strong>{user.lastName}</strong>
                <strong>{user.status}</strong>
                <div className="ml-auto">
                    <Link to={`/edit/${user.id}`} className="btn btn-warning mr-1">Edit</Link>
                </div>
            </ListGroupItem>
            ))}
        </ListGroup>
    )
}
export default NewUserlist;