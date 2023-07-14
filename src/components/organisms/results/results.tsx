import { Card } from '../../atoms/Card/results.card'
import './style.css'

export const Results = () => {

    return (
        <div className="results">
            {Array.from(Array(12).keys()).map((el,index) => <Card key={index}/>)}
        </div>
    )
}