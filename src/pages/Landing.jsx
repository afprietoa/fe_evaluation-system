import React from 'react'
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components';
import {Link} from 'react-router-dom'
import MultiForm from '../components/MultiForm';
const Landing = () => {
  return (
    <Wrapper>

      <nav className="d-flex justify-content-evenly">
        
        
            <h3>Edificando</h3>
          
          
            <Link to='/register' className='btn btn-outline-primary'>Login/Rgister</Link>
          

          
        
      
        

      </nav>

      <div className="d-flex justify-content-center">
        <MultiForm />

      </div>
    </Wrapper>
  )
}

export default Landing