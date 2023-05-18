import express from 'express'; 
import {adduser, getAllusers, getOneUser, editUser, deleteUser} from '../Controller/userController.js'

const router = express.Router();

router.post('/AddUser', adduser);
router.get('/AllUsers', getAllusers);
router.get('/:id', getOneUser)
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;