import React from 'react'
import {useState, useEffect } from 'react'
import {Logo, FormRow} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, registerUser } from './../features/user/userSlice';
import { useNavigate } from 'react-router-dom'

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true
}

function Register() {

    const [values, setvalues] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isLoading, user} = useSelector((store) =>store.user)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setvalues({...values, [name]: value})
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        const {name, email, password, isMember} = values;
        if(!email || !password || (!isMember && !name)){
            toast.error('Please fill out all fields');
            return;
        }
        if(isMember){
            dispatch(loginUser({email: email, password:password}));
            return;
        }
            dispatch(registerUser({name, email, password}));
        

        //console.log(event.target);
    }
    const toggleMember = ()=>{
        setvalues({...values, isMember: !values.isMember});
    }

    useEffect(() => {
      if(user)
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, [user])
    

  return (
    <Wrapper>
        <form className='form' onSubmit={onSubmit}>
            <h3 >Edificando</h3>

            <h3>{values.isMember ? 'Login': 'Register'}</h3>
            {/*name filed*/}
            {!values.isMember && (
                <FormRow 
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />
              )
            }

            {/*email filed*/}
            <FormRow 
                type='email'
                name='email'
                value={values.email}
                handleChange={handleChange}
            />

            {/*password filed*/}
            <FormRow 
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
            />

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