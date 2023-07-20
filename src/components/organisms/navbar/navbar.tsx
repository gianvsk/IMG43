import clsx from 'clsx'
import { HeaderWrapper } from '../../molecoles/HeaderWrapper/HeaderWrapper'
import './style.scss'
import { useLocationPath } from '../../../contexts/locationContext'

export const Navbar = () => {

    const {locationPath} = useLocationPath()
 
    return (
        <nav className={clsx('navbar', {'navbar-explore': locationPath === '/explore' })}>
            <HeaderWrapper/>
        </nav>
    )
}
