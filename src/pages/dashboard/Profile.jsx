import { useState } from "react";
import {FormRow} from "../../components"; 
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const {isLoading, user} = useSelector((store) =>store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name:user?.name || '',
    email:user?.email || '',
    lastName:user?.lastName || '',
    location:user?.location || '',
  });

  const onSubmit = (event)=>{
    event.preventDefault();
    const {name, email, lastName, location} = userData;
    if(!name || !email || !lastName || !location){
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
            name='name'
            labelText='nombre'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow 
            type='text'
            labelText='nivel academico'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow 
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow 
            type='text'
            labelText='departamento'
            name='location'
            value={userData.location}
            handleChange={handleChange}
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