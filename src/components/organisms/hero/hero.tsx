import { MainTitlesWrapper } from '../../molecoles/MainTitlesWrapper/MainTitlesWrapper'
import './style.scss'
import '../../../style/style.scss';
import { useLocationPath } from '../../../contexts/locationContext';
import clsx from 'clsx';


export const Hero = () => {

    const {locationPath} = useLocationPath()

    return (
        <section className={clsx("hero", {"hero-start": locationPath === '/explore'})}>
            <MainTitlesWrapper/>
        </section>
    )
}