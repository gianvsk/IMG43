
import { Icon } from '../../atoms/Icon/Icon'
import {ImageParagraph} from '../ImageParagraph/ImageParagraph'
import './style.css'
import '../../../style/style.css';

export const FooterContainer = () => {

    return (
        <div className="footer-container">
            <ImageParagraph />
            <ul className='footer-container-links'>
                <a className='footer-container-links__link--start'>Explore</a>
                <h5 className='footer-container-links__link--center'>Ranking</h5>
                <h5 className='footer-container-links__link--center'>About</h5>
                <h5 className='footer-container-links__link--center footer-container-links__link--side'>Privacy Policy</h5>
                <h5 className='footer-container-links__link--end'>Terms and Conditions</h5>
            </ul>
            <Icon />
        </div>
    )
}