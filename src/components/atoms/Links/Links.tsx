import './style.scss'
import '../../../style/style.css';
import clsx from 'clsx';
import { Text } from '../Text/Text';

type Links1Props = {
  size?: 'sm-hidden'
}

export const Links = ({size} : Links1Props) => {

  return (
      <ul className={clsx('nav-links-container', {'nav-links-container--hidden' : size})}>
        <Text tag='a' size='f-size-15' color='color-main'>Explore</Text>
        <div className='separator-line' />
        <Text tag='a' size='f-size-15' color='color-main'>Ranking</Text>
      </ul>
  )
}