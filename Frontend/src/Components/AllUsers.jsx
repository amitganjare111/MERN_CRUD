import React from 'react';
import { useState, useEffect } from 'react';
import Service from '../Service/api';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.css';
import { Link } from 'react-router-dom';

const AllUsers = () => {

  const [userList, setuserList]=useState([]);

   const getAllUsers= async () => {
      let res = await Service.getAllUser()
        setuserList(res.data);
        console.log(res);
   };

    useEffect(() => {
        getAllUsers();
    },[]);

    const deleteUserDetails = async (id) => {
       await Service.deleteUser(id);
       getAllUsers();
       toast.success('Delete User successfully')
    }

  return (
    <>
    <div className="container mt-4">
     <div className="row">
      <div className="col-md-12">
        <div className="card border">
          <div className="card-header header fs-3 text-center">
            All User List
            <p className="fs-4 text-center text-success" id="msg"></p>
          </div>
           <div className="card-body">
            <table class="table">
               <thead>
                 <tr>
                   <th scope="col">Sr.No</th>
                   <th scope="col">Full Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">Phone Number</th>
                   <th scope="col">City</th>
                   <th scope="col">Option</th>
                 </tr>
               </thead>

              <tbody>
               {
                userList.map((user, i) => (
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.city}</td>
                    <td>
                    <Link to={'/EditUser/'+(user._id)} className="btn btn-sm btn-primary"> Edit </Link>
                    <button className="btn btn-sm btn-danger ml-2" onClick= {() => deleteUserDetails(user._id)}> Delete </button>
                    <ToastContainer />
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default AllUsers;