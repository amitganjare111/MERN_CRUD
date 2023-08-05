import React from 'react';
import { useState, useEffect } from 'react';
import Service from '../Service/api';
import { useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './main.css';

const EditUser = () => {

  const navigate = useNavigate();
  const [user, setUser]=useState([]);
  const{id}= useParams();

  useEffect(() =>{
      loadUserDetails();
  },[]);

    const  loadUserDetails = async () => {
     const res = await Service.getOneUser(id);
     setUser(res.data);
  };

  let name, value;
  const handleInput = (e) => {
     name = e.target.name
     value = e.target.value;
     setUser({...user, [name]:value});
     console.log(user);
  };

  const  UpdateUser = (e) => {
    e.preventDefault();
    Service.editUser(user, id).then((res) => 
    {
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
           Edit User 
        </div>
         <form >
          <div className="form-area ">
            <input type="text" className="form-control " name="name" value={user.name} onChange={handleInput} placeholder="Full Name"/>
            <input type="text" className="form-control mt-3" name="email" value={user.email} onChange={handleInput} placeholder="Email"/>
            <input type="text" className="form-control mt-3" name="phone" value={user.phone} onChange={handleInput} placeholder="Phone Number"/>
            <input type="text" className="form-control mt-3" name="city" value={user.city} onChange={handleInput} placeholder="City"/>
       
            <button type="submit" className="btn-grad form-control mt-5 mb-4" onClick={UpdateUser} >Update</button>
            
          </div>
         </form>
      </div>
    </div>
   </div>
  </div>
 </div>
  )
}

export default EditUser