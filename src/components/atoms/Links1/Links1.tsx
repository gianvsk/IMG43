import clsx from 'clsx'
import './style.css'

type LinksProps = {
    direction: 'row' | 'column'
}

export const Links1 = ({direction} : LinksProps) => {

    return (
            <ul className={clsx('nav-links-container', {'nav-links-container-column' : direction === 'column'})}>
            <h5 className={clsx("nav-links-container__link", {'nav-links-container__link--no-margin': direction === 'column'})}>Explore</h5>
            {direction && <div className='separator-line'/> }
            <h5 className={clsx("nav-links-container__link", {'nav-links-container__link--no-margin': direction === 'column'})}>Ranking</h5>
            </ul>
    )
}