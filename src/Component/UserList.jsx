import React from 'react';
import './Users.css';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const UserList = ({ users, loading }) => {
    const [pageNumber, setPageNumber] = useState(1);


    const userPerPage = 10;
    const totalVisitedPage = pageNumber * userPerPage;
    const displayUsers = users.slice(totalVisitedPage, totalVisitedPage + userPerPage)
        .map(user => (
            <div key={user.id} className="userlist">
                <p>FirstName:{user.first_name}</p>
                <p>LastName:{user.last_name}</p>
                <p>Created At:{user.created_at}</p>
            </div>
        ));
          const pageCount = Math.ceil(users.length/userPerPage);
          const pageChange=({ selected })=>{
              setPageNumber(selected);
          }

    return (
        <div className="users">{
            loading ?
                <h2>Loading....</h2>
                :
                <div className="users">
                    { displayUsers}
                    <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={ pageCount}
                    onPageChange={pageChange}
                    containerClassName={"paginationButton"}
                    previousLinkClassName={"previoiusButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    
                    />
                </div>
        }
        </div>
    )
}
export default UserList;