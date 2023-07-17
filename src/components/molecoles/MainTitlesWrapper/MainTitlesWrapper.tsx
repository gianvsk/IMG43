import { Icon1 } from "../../atoms/Icon1/Icon1"
import { MainSearchbar } from "../MainSearchbar/MainSearchbar"
import './style.css'


export const MainTitlesWrapper = () => {
    return (
        <div className="hero-container">
            <Icon1 />
            <div className="hero-container-title">
                <h2 className="hero-container-title__first-title">The world's best photo archive</h2>
                <h3 className="hero-container-title__second-title">Beautiful licensed photos, for free.</h3>
            </div>
            <MainSearchbar />
        </div>
    )
}