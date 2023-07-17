import { Footer } from "../footer/footer"
import { Hero } from "../hero/hero"
import { Navbar } from "../navbar/navbar"
import { Results } from "../results/results"
import './style.css'
import '../../../style/style.css';



export const ContainerComponents = () => {

    return (
        <div className="container-components">
            <Navbar/>
            <Hero/>
            <Results/>
            <Footer/>
        </div>
    )
}