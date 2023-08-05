import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import AllUsers from './Components/AllUsers';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/AddUser" element={<AddUser/>}></Route>
       <Route path="/EditUser/:id" element={<EditUser/>}> </Route>
       <Route path="/AllUsers" element={<AllUsers/>}> </Route>
    </Routes>
    </>
  );
}

export default App;
