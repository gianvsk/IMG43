import { Text } from "../../atoms/Text/Text"
import './style.css'
import '../../../utils/imageObtainer'

export const ExploreTitles = () => {

    return (
        <div className="categories-wrapper">
            <Text tag='h3' size='f-size-26' color='color-main' >
                Categories
                <a className="text-span">View all</a>
            </Text>
        </div>
    )
}