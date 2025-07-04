import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import dark from '../icons/contrast_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import light from'../icons/dark_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';

function Nav() {
    const{theme,setTheme}=useContext(ThemeContext);
    console.log(theme);

    let themestyle={}
    if(theme==='light')
    {

        themestyle={
            background :'rgb(225, 240, 95)',
            color:'black'
        }
    }
    else
    {
  themestyle={
            background :'pink',
            color:'white'
    }
}
    return (<>
    <header>
        <nav className="navbar navbar-expand-sm" style={themestyle} 
        //onClick={()=>setTheme('dark')}
        
        >
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                     <NavLink to={'/home'} className='nav-link'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                          <NavLink to={'/contact'} className='nav-link'>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                          <NavLink to={'/about'} className='nav-link'>AboutUs</NavLink>
                    </li>
                    <li className="nav-item">
                           <NavLink to={'/portfolio'} className='nav-link'>Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                           <NavLink to={'/product'} className='nav-link'>Product</NavLink>
                    </li>

                    {
                        theme==='light'?
                        (
                            <img src={dark} onClick={()=>setTheme('dark')}/>
                        ):

                        (
                            <img src={light} onClick={()=>setTheme('light')}/>
                        )
                    }
                  

                </ul>
            </div>
        </nav>
        </header>
        <main>
            <Outlet />
        </main>

    </>);
}

export default Nav;