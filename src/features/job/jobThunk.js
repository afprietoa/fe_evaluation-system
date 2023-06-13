import customFetch from '../../utils/axios';
import { useDispatch } from 'react-redux';
import { clearValues } from './jobSlice';
import { getAllJobs } from '../allJobs/allJobsSlice';
export const createJobThunk = async (url, job, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.post(url, job, { 
            headers:
            { 
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            },
        });
        
        thunkAPI.dispatch(clearValues());
        
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const editJobThunk = async (url, job, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.patch(url, job, { 
            headers:
            { 
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            },
        });
        
        thunkAPI.dispatch(clearValues());
        
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const deleteJobThunk = async (url, thunkAPI) => {
    try {
        
        const resp = await customFetch.delete(url, { 
            headers:
            { 
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            },
        });
        
        thunkAPI.dispatch(getAllJobs());
        console.log(resp.data.msg);
        return resp.data.msg;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}