import { ExploreImagesWrapper } from "../ExploreImagesWrapper/ExploreImagesWrapper"
import { Text } from "../../atoms/Text/Text"
import './style.css'


export const People = () => {

    return (
        <div className="explore-card-container">
            <ExploreImagesWrapper/>
            <div className="explore-card-container__titles">
            <Text tag='h3' size='f-size-20' color='color-black'>People</Text>
            <Text tag='p' size='f-size-16' color='color-main-opacity60'>Discover the most beautiful pictures about People</Text>
            </div>
        </div>
    )

}