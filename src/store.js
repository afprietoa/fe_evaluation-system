import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
import allJobsSlice from "./features/allJobs/allJobsSlice";
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer:{
        user: userSlice,
        job: jobSlice,
        allJobs: allJobsSlice,
    },
});