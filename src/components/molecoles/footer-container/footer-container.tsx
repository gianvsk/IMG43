
import { Icon } from '../../atoms/Icon/Icon'
import { Links } from '../../atoms/Links/Links'
import { ImageParagraphContainer } from '../ImageParagraphContainer/ImageParagraphContainer'
import './style.css'

export const FooterContainer = () => {

    return(
        <div className="footer-container">
            <ImageParagraphContainer/>
            <Links/>
            <Icon/>
        </div>
    )
}