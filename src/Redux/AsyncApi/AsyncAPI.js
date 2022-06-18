import { createHeaders } from '../../CommonFunctions/CommonFunction';
import { appbaseURL } from '../../Environment/Environment';
import { createAsyncThunk } from "@reduxjs/toolkit";


// generates pending, fullfilled and rejected action type
const fetchAllUser = createAsyncThunk('user/fetchAllUser', (pagenumber) => {
    const config = {
        method: 'GET',
        params:{
            page: pagenumber
        },
        headers: createHeaders()
    }

    return appbaseURL(config).then(response =>  {
        let responseData = response.data.data
        return responseData
    }).catch(e => {
        console.log(e);
        let errorData = "Something went wrong"
        return errorData
    })
})


const createUser = createAsyncThunk('user/createUser', (userObj) => {
    const payload = {
        "name": "Aniket",
        "job": "leader"
    }
    const config = {
        method: 'POST',
        data: payload,
        headers: createHeaders()
    }

    return appbaseURL(config).then(response =>  {
        let tempObj = {
            ...userObj,
            ...response.data
        }
        console.log("tempObj", tempObj);
        let responseData = tempObj
        return responseData
    }).catch(e => {
        console.log(e);
        let errorData = "Something went wrong"
        return errorData
    })
})


const updateUser = createAsyncThunk('user/updateUser' , (userObj) => {
    const payload = {
        "name": "Aniket",
        "job": "leader"
    }
    const config = {
        method: 'PUT',
        url:'/'+ userObj.id,
        data: payload,
        headers: createHeaders()
    }

    return appbaseURL(config).then(response =>  {
        let tempObj = {
            ...userObj,
            ...response.data
        }
        let responseData = tempObj
        return responseData
    }).catch(e => {
        console.log(e);
        let errorData = "Something went wrong"
        return errorData
    })
})

const deleteUser = createAsyncThunk('user/deleteUser', (userId) => {
    const config = {
        method: 'DELETE',
        url:'/'+ userId,
        headers: createHeaders()
    }
    return appbaseURL(config).then(response => {
        console.log(response);
        return userId
    }).catch(e => {
        console.log(e);
    })
})


export {
    fetchAllUser,
    createUser,
    updateUser,
    deleteUser
}