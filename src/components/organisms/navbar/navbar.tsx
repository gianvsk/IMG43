import { HeaderWrapper } from '../../molecoles/HeaderWrapper/HeaderWrapper'
import { Image } from '../../atoms/Image/Image'
import './style.css'

export const Navbar = () => {

    return (
        <nav className='navbar'>
            <Image/>
            <HeaderWrapper/>
        </nav>
    )
}