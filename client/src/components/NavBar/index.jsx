import { Outlet, NavLink } from 'react-router-dom'
import store from '../../store/Context';
import logo from '../../images/react-express.png'
import Logout from '../LogoutBtn';

export default function NavBar (){
    const { user } = store()
    return(
          <>
            <nav className='nav-bar'>
                <div className='nav-logo'>
                    <img src={logo} alt='Some Image'/>
                </div>
                <div className='nav-links'>
                    {user 
                        ? <>
                            <NavLink to="/">
                                Home
                            </NavLink>
                            <NavLink to="/about">
                                About
                            </NavLink>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                            <Logout/>
                          </>
                        : <button>
                            <NavLink to="/">
                               Login
                            </NavLink>
                          </button>
                    }
                </div>
            </nav>
            
            <Outlet className="outlet"/>   
        </>
    )
}