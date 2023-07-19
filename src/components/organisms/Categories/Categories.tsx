import { AllCategories } from "../../molecoles/AllCategories/AllCategories"
import { ExploreTitles } from "../../molecoles/ExploreTitles/ExploreTitles"


export const Categories = () => {
    return (
        <div className="categories">
            <ExploreTitles/>
            <AllCategories/>
        </div>
    )
}