import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchAllUser, updateUser } from "../AsyncApi/AsyncAPI";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        data:[],
        loading:false,
        errorMessage:""
    },
    reducers:{
        fetchApiCall:(state)=>{
            state.loading = true
        },

        fetchApiSuccess:(state, action)=>{
            state.data = action.payload
            state.loading = false
        },

        fetchApiFail:(state, action)=>{
            state.loading = false
            state.errorMessage = action.payload
        }
    },
    extraReducers: builder => {
        // fetch all user api call and then add all user in redux store
        builder.addCase(fetchAllUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchAllUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.errorMessage = ""
        })
        builder.addCase(fetchAllUser.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.errorMessage = action.payload
        })

        // create user api call and then add user in redux store
        builder.addCase(createUser.pending, state => {
            state.loading = true
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = [...state.data, action.payload]
            state.errorMessage = ""
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.errorMessage = action.payload
        })

        // update user api call and then update user in redux store
        builder.addCase(updateUser.pending, state => {
            state.loading = true
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = updateEditedRowState(state, action)
            state.errorMessage = ""
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false
            state.errorMessage = action.payload
        })

        // delete user api call and then delete user from redux store
        builder.addCase(deleteUser.pending, state => {
            state.loading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = deleteRowState(state, action.payload)
            state.errorMessage = ""
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
            state.errorMessage = action.payload
        })
    }
})

const updateEditedRowState = (state, payloadObj) => {
    let updateState = [...state.data]

    const index = updateState.findIndex(object => {
        return object.id.toString() === payloadObj.payload.id.toString();
    });

    updateState[index].id = payloadObj.payload.id
    updateState[index].username = payloadObj.payload.username
    updateState[index].first_name = payloadObj.payload.firstname
    updateState[index].last_name = payloadObj.payload.lastname
    updateState[index].email = payloadObj.payload.email
    updateState[index].address = payloadObj.payload.address
    updateState[index].phonenumber = payloadObj.payload.phonenumber
    updateState[index].pincode = payloadObj.payload.pincode

    return updateState
}

const deleteRowState = (state, payloadId) => {
    let deleteRowState = [...state.data]

    const index = deleteRowState.findIndex(object => {
        return object.id.toString() === payloadId.toString();
    });
    deleteRowState.splice(index, 1);
    return deleteRowState
}

export const {fetchApiCall, fetchApiSuccess, fetchApiFail} = userSlice.actions
export default userSlice.reducer