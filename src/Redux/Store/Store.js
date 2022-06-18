import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Reducer/Reducer';
import logger from 'redux-logger';



export default configureStore({
    reducer:{
        userData: userReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})