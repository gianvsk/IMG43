import { Hero } from "../../components/organisms/Hero/Hero"
import { Results } from "../../components/organisms/results/results"
import './style.scss'
import { GreyLayout } from "../../components/atoms/GreyLayout/GreyLayout"



export const Homepage = () => {

    return (
        <div className="homepage">
            <Hero/>
            <Results/>
            <GreyLayout/>
        </div>
    )
}