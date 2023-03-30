import { Outlet, NavLink } from 'react-router-dom'
import store from '../../store/Context';
import logo from '../../images/react-express.png'

export default function NavBar (){
    const { user } = store()
    return(
          <>
            <nav className='nav-bar'>
                <div className='nav-logo'>
                    <img src={logo} alt='Some Image'/>
                </div>
                <div className='nav-links'>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    {user 
                        ? <button>Logout</button>
                        : <button>Login</button>
                    }
                </div>
            </nav>
            
            <Outlet className="outlet"/>   
        </>
    )
}