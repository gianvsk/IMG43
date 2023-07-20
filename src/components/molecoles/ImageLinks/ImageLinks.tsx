import './style.scss'
import '../../../style/style.css';
import { Image } from '../../atoms/Image/Image';
import { Links } from '../../atoms/Links/Links';

export const ImageLinks = () => {

  return (
    <div className='image-links-container'>
      <Image />
      <Links size='sm-hidden'/>
    </div>
  )
}