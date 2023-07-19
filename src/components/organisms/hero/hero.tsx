import { MainTitlesWrapper } from '../../molecoles/MainTitlesWrapper/MainTitlesWrapper'
import './style.css'
import '../../../style/style.css';
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