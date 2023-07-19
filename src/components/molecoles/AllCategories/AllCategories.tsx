import { BeautyFashion } from "../BeautyFashion/BeautyFashion"
import { Business } from "../Business/Business"
import { FoodDrink } from "../FoodDrink/FoodDrink"
import { Landscape } from "../Landscape/Landscape"
import { People } from "../People/People"
import { Sport } from "../Sport/Sport"
import './style.css'


export const AllCategories = () => {

    return (
        <div className="all-categories">
            <BeautyFashion/>
            <Sport/>
            <People/>
            <Business/>
            <FoodDrink/>
            <Landscape/>
        </div>
    )
}