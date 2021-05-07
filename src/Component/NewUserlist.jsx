import React from 'react';
//import { GlobalContext } from "../context/GlobalState";
//import { useContext } from 'react';
import { Link } from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap";

const NewUserlist = () => {
    return (
        <ListGroup className="mt-4">
            <ListGroupItem className="d-flex justify-content-between">
                <strong>User one</strong>
                <div className="ml-auto">
                    <Link to='/edit' className="btn btn-warning mr-1">Edit</Link>
                    <Button color="danger">Delete</Button>
                </div>
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">
                <strong>User two</strong>
                <div className="ml-auto">
                    <Link to='/edit' className="btn btn-warning mr-1">Edit</Link>
                    <Button color="danger">Delete</Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    )
}
export default NewUserlist;