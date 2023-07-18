import '../../../style/style.css';
import { AccountImage } from '../AccountImage/AccountImage';
import './style.css'

export const Card = () => {

    const image = "https://picsum.photos/378/378?random="

    const convertNumberToSrc = () => {
        return image + Math.floor(Math.random() * 10).toString()
    }

    return (
        <div className="results-card">
        
            <div className='results-card-highlights'>
                <div className='container-row-start'>
                    <div className='container-column'>
                        <div className='container-column__icon-span-container'>
                            <img className='img-card' src='images/icons/arrow-down.png'></img>
                            <span className='span-values'>1230</span>
                        </div>
                        <div className='container-column__icon-span-container'>
                            <img className='img-card' src='images/icons/eye.png'></img>
                            <span className='span-values'>3437</span>
                        </div>
                    </div>
                    <img className='img-card' src='images/icons/medal.png'></img>
                </div>



                <div className='container-row-end'>
                    <div className='container-row-end__account-image-name-container'>
                        <AccountImage/>
                        <span className='span-values'>Sebastiano Garilli</span>
                    </div>
                    <a className='container-row-end__container-download'>
                        <img className='img-card' src='images/icons/arrow-down.png'></img>
                        <span className='span-values'>Download</span>
                    </a>
                </div>
                <div className='results-card-hightlights--background'></div>
            </div>
            <img className="results-card-image" src={convertNumberToSrc()} />
        </div>
    )
}