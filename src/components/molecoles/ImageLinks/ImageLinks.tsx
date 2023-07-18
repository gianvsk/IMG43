import './style.css'
import '../../../style/style.css';
import { Image } from '../../atoms/Image/Image';
import { Links1 } from '../../atoms/Links1/Links1';
import { useLocation } from 'react-router-dom';

export const ImageLinks = () => {

    const location = useLocation()

  return (
    <div className='image-links-container'>
      <Image />
      <Links1 size='sm-hidden'/>
    </div>
  )
}