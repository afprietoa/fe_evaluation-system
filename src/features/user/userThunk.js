import {toast} from 'react-toastify';
import customFetch from '../../utils/axios';
import { addUserToLocalStorage } from '../../utils/localStorage';
import { setUser, startLoading } from './userSlice';
// export const registerUserThunk = async (url, user, thunkAPI) =>{
//     try {
//         const resp = await customFetch.post(url, user);
//         return resp.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
// }

// export const loginUserThunk = async (url, user, thunkAPI) =>{
//     try {
//         const resp = await customFetch.post(url, user);
//         console.log(resp.data);
//         return resp.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//     }
// }

// export const updateUserThunk = async (url, user, thunkAPI) =>{
//     try {
//         const resp = await customFetch.put(url , user);
//     console.log(resp.data);
//         return resp.data;
//     }catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
// }
export const loginUser=(user) =>{
    return async(dispatch, getState)=>{
        dispatch(startLoading());

        const {data} = await customFetch.post('/user/login', user);
        dispatch(setUser({ 
        username:data.username,
        password:data.password,
        role:data.role,}))
        addUserToLocalStorage(user);
         console.log(data)
         toast.success(`Welcome Back ${user.username}`)
    }
}
export const registerUser=(user) =>{
    return async(dispatch, getState)=>{
        dispatch(startLoading());

        const {data} = await customFetch.post('/user/register', user);
        dispatch(setUser({ 
        username:data.username,
        password:data.password,
        role:data.role,}))
        addUserToLocalStorage(user);
         console.log(data)
         toast.success(`Hello There ${user.username}`);
    }
}

export const updateUser=(user, id) =>{
    return async(dispatch, getState)=>{
        dispatch(startLoading());

        const {data} = await customFetch.post('/user/update', user);
        dispatch(setUser({ 
        username:data.username,
        password:data.password,
        role:data.role,}))
        addUserToLocalStorage(user);
         console.log(data)
         toast.success(`Hello There ${user.username}`);
    }
}