import { GreyLayout } from '../../components/atoms/GreyLayout/GreyLayout'
import { Tags } from '../../components/molecoles/Tags/Tags'
import { Categories } from '../../components/organisms/Categories/Categories'
import { Hero } from '../../components/organisms/hero/hero'
import './style.css'

export const Explore = () => {
    return (
        <div className="explore">
            <Hero/>
            <Categories/>
            <Tags/>
            <GreyLayout/>
        </div>
    )
}