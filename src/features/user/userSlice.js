import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage
} from '../../utils/localStorage';
// import { loginUserThunk, registerUserThunk, updateUserThunk } from './userThunk';

const initialState = {
    user: getUserFromLocalStorage(),
    isLoading: false,
    isSidebarOpen: false,
}

// export const registerUser = createAsyncThunk(
//     'user/registerUser',
//     async (user, thunkAPI) =>{
//         console.log(`Register user: ${JSON.stringify(user)}`)
//         // return registerUserThunk('/user/register', user, thunkAPI);
//     }
// ); 

// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (user, thunkAPI) =>{
//         console.log(`Login user: ${JSON.stringify(user)}`)
//         console.log(loginUserThunk('/user/login', user, thunkAPI))
//         return loginUserThunk('/user/login', user, thunkAPI);
//     }
// );

// export const updateUser = createAsyncThunk(
//     'user/updateUser',
//     async (userId, user, thunkAPI) =>{
//         console.log(`update user: ${JSON.stringify(user)}`)
//         return updateUserThunk('/user/update' + userId, user, thunkAPI);
//     }
// );


const userSlice =   createSlice({
    name: 'user',
    initialState,
    reducers:{

        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logoutUser: (state, {payload}) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
            if(payload){
                toast.success(payload);
            }
        },
        setUser:(state, action) =>{
            state.isLoading = false;
            console.log(action.payload.user)
            state.user = action.payload.user;
        },
        startLoading: (state, )=>{
            state.isLoading = true;
        }
    },
    // extraReducers: (builder) =>{
    //     builder.addCase(registerUser.pending, (state) =>{
    //         state.isLoading = true;
    //     }).addCase(registerUser.fulfilled, (state, {payload}) =>{
    //         state.isLoading = false;
    //         const {user} = payload;
    //         console.log(`register user: ${JSON.stringify(user)}`)
    //         state.user = user;
    //         addUserToLocalStorage(user);
    //         toast.success(`Hello There ${user.username}`);
    //     }).addCase(registerUser.rejected, (state, {payload}) =>{
    //         state.isLoading = false;
    //         //console.log(`Error : ${payload}`);
    //         toast.error(payload);
    //     }).addCase(loginUser.pending, (state)=>{
    //         state.isLoading = true;
    //     }).addCase(loginUser.fulfilled, (state, {payload}) =>{
    //         state.isLoading = false;
    //         const {user} = payload;
    //         state.user = user;
    //         addUserToLocalStorage(user);
    //         console.log(user)
    //         toast.success(`Welcome Back ${user.username}`)
    //     }).addCase(loginUser.rejected, (state, {payload}) =>{
    //         state.isLoading = false;
    //         toast.error(payload);
    //     }).addCase(updateUser.pending, (state)=>{
    //         state.isLoading = true;
    //     }).addCase(updateUser.fulfilled, (state, {payload}) =>{
    //         state.isLoading = false;
    //         const {user} = payload;
    //         state.user = user;
    //         addUserToLocalStorage(user);
    //         toast.success(`User Updated`)
    //     }).addCase(updateUser.rejected, (state, {payload}) =>{
    //         state.isLoading = false;
    //         toast.error(payload);
    //     });
    // }
});

export const {toggleSidebar, logoutUser, setUser, startLoading} = userSlice.actions;
export default userSlice.reducer;