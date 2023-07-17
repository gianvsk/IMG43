
import './style.css'

export const Card = () => {

    const image = "https://picsum.photos/378/378?random="

    const convertNumberToSrc = () => {
        return image + Math.floor(Math.random() * 10).toString()
    }

    return (
        <div className="results-card">
            <div className='results-card-highlights'>
                <div className='results-card-hightlights-container'>
                    <div>
                        <img src='images/icons/arrow-down.png'></img>
                        <span className='span-values'>1230</span>
                    </div>
                    <div>
                        <img src='images/icons/eye.png'></img>
                        <span className='span-values'>3437</span>
                    </div>
                </div>
                <div className='results-card-hightlights__container--second-quarter'>
                    <img src='images/icons/medal.png'></img>
                </div>
                <div className='results-card-hightlights__container--third-quarter'>
                    <div className='account-image'></div>
                    <span className='span-values--no-padding'>Sebastiano Garilli</span>
                </div>
                <div className='results-card-hightlights__container--fourth-quarter'>
                    <img src='images/icons/arrow-down.png'></img>
                    <span className='span-values'>Download</span>
                </div>
            </div>
            <img className="results-card-image" src={convertNumberToSrc()} />
        </div>
    )
}