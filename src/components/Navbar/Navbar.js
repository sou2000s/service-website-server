import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
   
    const {user ,logout} = useContext(AuthContext)
    const handleLogout = ()=>{
        logout()
        .then(()=>{})
        .catch(error=> console.log(error.message))
    }
    return (
        <div className='text-center bg-base-300 text-[#190e0e]'> 
            <Link to='/'>Home</Link>
            <Link className='ml-5' to='/tours'>Tours</Link>
            {
                user?.email ? <>
                 <Link className='ml-5'  to='/addtour'>Add Tour</Link>
            <Link className='ml-5' to='/myreview'>My review</Link>
            <Link className='ml-5' onClick={handleLogout}>Logout</Link>
            </> : 
            <>  
            <Link className='ml-5' to='/register'>Register</Link>
            <Link className='ml-5' to='/login'>Login</Link>
            </>
            }
           
          
           
            

         



        </div>
    );
};

export default Navbar;