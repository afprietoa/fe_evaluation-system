import {Landing, Error, Register, ProtectedRoute, Hero} from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import { AddJob, AllJobs, Profile, Stats, SharedLayout } from '../pages/dashboard/'

const AppRouter = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <ProtectedRoute >
                <SharedLayout/>
              </ProtectedRoute>
              }>
              <Route index element={<Stats/>}/>
              {/* <Route path='add-job' element={<AddJob/>}/>
              <Route path='all-jobs' element={<AllJobs/>}/> */}
              <Route path='profile' element={<Profile/>}/>
            </Route>
            <Route path='hero' element={<Hero/>}/>
            <Route path='landing' element={<Landing/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
          <ToastContainer position='top-center'/>
        </BrowserRouter>
      )
}

export default AppRouter
