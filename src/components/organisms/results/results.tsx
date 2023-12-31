import { useLocationPath } from '../../../contexts/locationContext'
import { Card } from '../../molecoles/Card/Card'
import './style.scss'

export const Results = () => {

    const {locationPath} = useLocationPath()

    return (

        <div className="results">
            {locationPath === '/' && 
            Array.from(Array(12).keys()).map((el,index) => <Card key={index}/>)
            }
        </div>
        
    )
}