
import { Icon } from '../../atoms/Icon/Icon'
import {ImageParagraph} from '../ImageParagraph/ImageParagraph'
import './style.scss'
import '../../../style/style.css';

export const MultiLinkWrapper = () => {

    return (
        <div className="footer-container">
            <ImageParagraph />
            <ul className='footer-container-links'>
                <a className='link footer-container-links__link--start'>Explore</a>
                <a className='link footer-container-links__link--center'>Ranking</a>
                <a className='link footer-container-links__link--center'>About</a>
                <a className='link footer-container-links__link--center footer-container-links__link--side'>Privacy Policy</a>
                <a className='link footer-container-links__link--end'>Terms and Conditions</a>
            </ul>
            <Icon />
        </div>
    )
}