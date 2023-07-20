import './style.scss'
import '../../../style/style.css';
import clsx from 'clsx';

type Links1Props = {
  size?: 'sm-hidden'
}

export const Links = ({size} : Links1Props) => {

  return (
      <ul className={clsx('nav-links-container', {'nav-links-container--hidden' : size})}>
        <a className='nav-links-container__link'>Explore</a>
        <div className='separator-line' />
        <a className='nav-links-container__link'>Ranking</a>
      </ul>
  )
}