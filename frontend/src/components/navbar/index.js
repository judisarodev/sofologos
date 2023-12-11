import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {

    return(
        <nav className="navbar">
            <div className='d-flex flex-row gap-5 justify-content-md-start justify-content-center'>
                <NavLink style={( { isActive } ) => isActive ? {textDecoration: 'underline'} : {textDecoration: 'none'} } className="navbar__item m-0 align-self-center" to={'/'}>Inicio</NavLink>
                <NavLink style={( { isActive } ) => isActive ? {textDecoration: 'underline'} : {textDecoration: 'none'} } className="navbar__item m-0 align-self-center" to={'/about'}>Sobre mí</NavLink>
            </div>
        </nav>
    );
}

export { Navbar };