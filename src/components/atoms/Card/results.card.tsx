
import './style.css'

export const Card = () => {

    const image = "https://picsum.photos/378/378?random="

    const convertNumberToSrc = () => {
        return image + Math.floor(Math.random()*10).toString()
    }

    return (
        <div className="results-card">
            <div className='results-card-highlights'>
                <div className='hightlights-top-container'>
                    <div className='hightlights-top-container-column'>
                      <img className='hightlights-top-container-column__image' src='images/icons/arrow-down.png'></img> 
                      <span>1230</span>
                   </div>
                </div>
            </div>
            <img className="results-card-image" src={convertNumberToSrc()}/>
        </div>
    )
}