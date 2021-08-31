import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { ButtonContainer } from '../actions/Button'



const Navabar = () => {
    return (
        <nav className='navbar navbar-expand-sm navbar-dark px-sm-5 navwraper'>
            <Link to='/'>
                <img src={logo} alt="xyz" />
                
            </Link> 
          <ul className="navbar-nav align-items-center">
              <li className='nav-item ml-5' >
                  <Link to='/' className='nav-link' >product</Link>

              </li>  
          </ul>
        
           <Link to='/Cards' className='ml-auto'>
               <ButtonContainer>
                   <i className="fas fa-cart-plus" />cart
               </ButtonContainer>
               
           </Link>

        </nav>
    )
}
//css by style component//



export default Navabar
