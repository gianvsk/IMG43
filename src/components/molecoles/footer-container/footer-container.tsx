
import { Icon } from '../../atoms/Icon/Icon'
import { Image } from '../../atoms/Image/Image'
import { Links } from '../../atoms/Links/Links'
import './style.css'

export const FooterContainer = () => {

    return(
        <div className="footer-container">
            <Image/>
            <Links/>
            <Icon/>
        </div>
    )
}