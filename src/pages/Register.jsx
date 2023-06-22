import React from 'react'
import {useState, useEffect } from 'react'
import {Logo, FormRow} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom'
import FormRowSelect from '../components/FormRowSelect';
import axios from 'axios';
import { loginUser, registerUser } from '../features/user/userThunk';

const initialState = {
    username:'',
    password:'',
    role:'',
    isMember: true
}

function Register() {

    const [values, setvalues] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isLoading, user} = useSelector((store) =>store.user)
    const roleList = ['teacher', 'student'];

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setvalues({...values, [name]: value})
    }
    const onSubmit = async (event)=>{
        event.preventDefault();
        const {username, password, role,isMember} = values;
        if(!username || !password){
            toast.error('Please fill out all fields');
            console.log(values);
            return;
        }
        if(isMember){
            console.log(user);
            dispatch(loginUser({username: username, password:password}));
            console.log(user);
            return;
        }
        console.log(user);
            dispatch(registerUser({username, password, role}));
            console.log(user);

            
        //console.log(event.target);
    }
    const toggleMember = ()=>{
        setvalues({...values, isMember: !values.isMember});
    }

    useEffect(() => {
      if(user)
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, [user])
    

  return (
    <Wrapper>
        <form className='form' onSubmit={onSubmit}>
            <h3 >Edificando</h3>

            <h3>{values.isMember ? 'Login': 'Register'}</h3>


            {/*email filed*/}
            <FormRow 
                type='text'
                name='username'
                value={values.username}
                handleChange={handleChange}
            />

            {/*password filed*/}
            <FormRow 
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
            />

            {/*name filed*/}
            {!values.isMember && (

           <FormRowSelect 
           labelText='role'
           name='role'
           value={values.role}
           handleChange={handleChange}
           list={roleList}
         />
              )
            }
            <button type="submit" className='btn btn-block' disabled={isLoading}>
                submit
            </button>

            <p>
                {values.isMember ?'Not a member yet?' : 'Already a member?'}
                <button type='button' className='member-btn' onClick={toggleMember}>
                    {values.isMember ?'Register' : 'Login'}
                </button>
            </p>
        </form>
    </Wrapper>
  )
}

export default Register