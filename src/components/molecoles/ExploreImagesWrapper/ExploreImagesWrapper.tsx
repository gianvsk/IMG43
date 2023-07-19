import './style.css'
import { convertNumberToSrcExplore } from '../../../utils/imageObtainer'

export const ExploreImagesWrapper = () => {


    return (
        <div className="images-wrapper">
            <img className='images-wrapper__images--main'src={convertNumberToSrcExplore()}></img>
            <img className='images-wrapper__images--secondary' src={convertNumberToSrcExplore()}></img>
            <img className='images-wrapper__images--third' src={convertNumberToSrcExplore()}></img>
        </div>
    )

}