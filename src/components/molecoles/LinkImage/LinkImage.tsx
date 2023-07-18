import { Image } from '../../atoms/Image/Image';
import { Links } from '../../atoms/Links/Links';
import './style.css'
import '../../../style/style.css';
import { MainSearchbar } from '../MainSearchbar/MainSearchbar';

export const LinkImage = () => {

    return (
        <div className='navbar-image-link-container'>
            <Image/>
            <Links/>
            {location.pathname === '/explore' && <MainSearchbar size='big'/>}
        </div>
    )
}