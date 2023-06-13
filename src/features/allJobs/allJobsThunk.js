import customFetch from '../../utils/axios';
export const getAllJobsThunk = async (url, thunkAPI) =>{
    try {
        const resp = await customFetch.get(url, {
            headers:{
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        });
        console.log(resp.data);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error');
    }
}