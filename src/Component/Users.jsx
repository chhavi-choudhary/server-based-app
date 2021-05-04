import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UserList from './UserList';
import './Users.css';



const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            axios
                .get('http://js-assessment-backend.herokuapp.com/users.json')
                .then(res => setUsers(res.data));
            setLoading(false);
        }
        fetchData();
    }, []);
    //console.log(user)

    return (
        <div className="allUsers">
            <UserList users={users} loading={loading} />
        </div>
    )
}
export default Users;