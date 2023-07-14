import { NavbarContainer } from '../../molecoles/navbar-container/navbar-container'
import { Image } from '../../atoms/Image/Image'
import './style.css'

export const Navbar = () => {

    return (
        <nav className='navbar'>
            <Image/>
            <NavbarContainer/>
        </nav>
    )
}