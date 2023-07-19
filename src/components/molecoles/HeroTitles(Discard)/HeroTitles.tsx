import './style.css'
import '../../../style/style.css';
import { MainTitle } from '../../atoms/MainTitle/MainTitle';
import { SecondaryTitle } from '../../atoms/SecondaryTitle/SecondaryTitle';
import { useLocationPath } from '../../../contexts/locationContext';
import { BackgroundSingleImageCard } from '../HeroCards/HeroCards';

export const HeroTitles = () => {

    const {locationPath} = useLocationPath()

    return (
        
        <div className="hero-container-title">
             {locationPath === '/' &&
              <>
                <MainTitle/>
                <SecondaryTitle/>
              </> 
              }
              {locationPath === '/explore' &&
              <>
                <MainTitle title='Explore'/>
                <SecondaryTitle/>
                <BackgroundSingleImageCard/>
              </> 
              }
            
        </div>
    )
}