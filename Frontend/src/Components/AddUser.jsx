import React from 'react'
import {useState} from 'react';
import Service from '../Service/api'
import { useNavigate } from "react-router-dom";
import './main.css';

const AddUser = () => {

    const navigate = useNavigate();
    const[user, setUser]= useState({name:"", email:"", phone:"", city:""})

    let name, value;
    const handleInput = (e) => {
       name = e.target.name
       value = e.target.value;
       setUser({...user, [name]:value});
       console.log(user);
    };

    const  SaveUser = (e) => {
          e.preventDefault();
     Service.saveUser(user).then((res) => 
     { 
         setUser({ name:"", email:"", phone:"", city:"" });

         navigate('/AllUsers'); 
     })
     .catch((err) => 
     {
         alert(err);
     })
    }
   
  return (
  <div className="container mt-5 ">
    <div className="col-md-6 offset-md-3">
     <div className="border">
      <div className="card">
       <div className="card-body mt-3">
        <div className="card-header text-center mb-4 btn-grad" >
          Add User Name 
        </div>
         <form >
          <div className="form-area ">
            <input type="text" className="form-control" name="name" value={user.name} onChange={handleInput} placeholder="Full Name"/>
            <input type="text" className="form-control mt-3" name="email" value={user.email} onChange={handleInput} placeholder="Email"/>
            <input type="text" className="form-control mt-3" name="phone" value={user.phone} onChange={handleInput} placeholder="Phone Number"/>
            <input type="text" className="form-control mt-3" name="city" value={user.city} onChange={handleInput} placeholder="City"/>
       
            <button type="submit" className="btn-grad form-control mt-5 mb-4" onClick={SaveUser} >Submit</button>
          </div>
         </form>
      </div>
    </div>
   </div>
  </div>
 </div>
  )
}

export default AddUser;