import axios from 'axios';


const appbaseURL = axios.create({
    baseURL: "https://reqres.in/api/users"
})



export{
    appbaseURL
}