import { useState } from "react";
import {FormRow} from "../../components"; 
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { updateUser } from "../../features/user/userSlice";
import FormRowSelect from "../../components/FormRowSelect";
import { updateUser } from "../../features/user/userThunk";

const Profile = () => {
  const {isLoading, user} = useSelector((store) =>store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username:user?.username || '',
    password:user?.password || '',
    role:user?.role || '',
  });
  const roleList = ['teacher', 'student'];

  const onSubmit = (event)=>{
    event.preventDefault();
    const {username, password, role} = userData;
    if(!username || !password || !role){
      console.log(userData)
      toast.error('Please fill out all fields.');
      return;
    }
    dispatch(updateUser(userData));
    
  }   

  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [name]: value});
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h3>Perfil</h3>
        <div className="form-center">
          <FormRow 
            type='text'
            name='username'
            labelText='username'
            value={userData.username}
            handleChange={handleChange}
          />
          <FormRow 
            type='password'
            labelText='password'
            name='password'
            value={userData.password}
            handleChange={handleChange}
          />
           <FormRowSelect 
           labelText='role'
           name='role'
           value={userData.role}
           handleChange={handleChange}
           list={roleList}
         />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile