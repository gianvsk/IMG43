import { Image } from '../../atoms/Image/Image';
import { Links } from '../../atoms/Links/Links';
import './style.css'

export const NavbarImageLinkContainer = () => {

    return (
        <div className='navbar-image-link-container'>
            <Image/>
            <Links/>
        </div>
    )
}