import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [currentPage,setCurrentPage] = useState(1);
    //const [userPerPage, setUserPerPage] = useState(10);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            axios
                .get('http://js-assessment-backend.herokuapp.com/users.json')
                .then(res => setUsers(res.data));
        }
        
        fetchData();
    }, []);
    //console.log(user)



    return (
        <div> 
            <>loading ?
            <h2>Loading .....</h2>
            </>
        :
            <div className="users">
                {
                    users.map(user =>(
                        <div key={user.id} className="user-list">
                            <p>FirstName:{user.first_name}</p>
                            <p>LastName:{user.last_name}</p>
                            <p>Created At:{user.created_at}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Users;