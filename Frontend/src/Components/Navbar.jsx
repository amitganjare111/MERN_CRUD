import React from 'react'
import{Link} from 'react-router-dom';
import './main.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar-expand-sm navbar-light">
      <div className="container-fluid">
        <div className="navbar-brand navbar-collapse text-light bold">
            <Link to="/" className="text-light ml-5" href="#"><b>MERN-CRUD</b></Link>
            <Link to="AddUser" className="nav-link text-light mr-4 ml-auto" href="#">AddUser</Link>
            <Link to="EditUser" className="nav-link text-light mr-4 " href="#">EditUser</Link>
            <Link to="AllUsers" className="nav-link text-light mr-4 " href="#">AllUsers</Link>
        </div>
      </div>
    </nav>  
    </>
  )
}

export default Navbar;