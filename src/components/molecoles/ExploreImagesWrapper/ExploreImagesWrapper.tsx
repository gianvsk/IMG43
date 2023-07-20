import './style.scss'
import { convertNumberToSrcExplore } from '../../../utils/imageObtainer'

export const ExploreImagesWrapper = () => {


    return (
        <div className="images-wrapper">
            <img className='images-wrapper__images--main image-position'src={convertNumberToSrcExplore()}></img>
            <img className='images-wrapper__images--secondary image-position' src={convertNumberToSrcExplore()}></img>
            <img className='images-wrapper__images--third image-position' src={convertNumberToSrcExplore()}></img>
        </div>
    )

}