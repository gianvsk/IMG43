
import './style.css'

export const Card = () => {

    const image = "https://picsum.photos/378/378?random="

    const convertNumberToSrc = () => {
        return image + Math.floor(Math.random()*10).toString()
    }

    return (
        <div className="results-card">
            <img className="results-card__image" src={convertNumberToSrc()}></img>
        </div>
    )
}