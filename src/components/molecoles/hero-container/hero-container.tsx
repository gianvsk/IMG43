import { HeroTitle } from "../../atoms/HeroTitle/HeroTitle"
import { Icon1 } from "../../atoms/Icon1/Icon1"
import { HeroContainerSearchbar } from "../hero-container-searchbar/hero-container-searchbar"
import './style.css'


export const HeroContainer = () => {
    return (
        <div className="hero-container">
            <Icon1/>
            <HeroTitle/>
            <HeroContainerSearchbar/>
        </div>
    )
}