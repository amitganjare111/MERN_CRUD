import axios from "axios"


//const URL = "http://localhost:4041";

const URL = "https://hilarious-tweed-jacket-bee.cyclic.app";

class userService{
 
    saveUser(user)
    {
        return axios.post(URL+"/AddUser",user)
    }

    getAllUser()
    {
        return axios.get(URL+"/AllUsers")
    }

    getOneUser(id)
    {
        return axios.get(URL+`/${id}`)
    }

    editUser(user, id)
    {
       return axios.put(URL+`/${id}`,user)
    }

    deleteUser(id)
    {
        return axios.delete(URL+`/${id}`)
    }
}

export default new userService;