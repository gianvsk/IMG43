import { Hero } from "../../components/organisms/hero/hero"
import { Results } from "../../components/organisms/results/results"
import './style.css'
import { GreyLayout } from "../../components/atoms/GreyLayout/GreyLayout"



export const Homepage = () => {

    return (
        <div className="container-components">
            <Hero/>
            <Results/>
            <GreyLayout/>
        </div>
    )
}