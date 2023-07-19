import { Icon1 } from "../../atoms/Icon1/Icon1"
import { MainSearchbar } from "../MainSearchbar/MainSearchbar"
import './style.css'
import '../../../style/style.css';
import { useLocationPath } from "../../../contexts/locationContext";
import { MainTitle } from "../../atoms/MainTitle/MainTitle";
import { HeroCards } from "../HeroCards/HeroCards";
import clsx from "clsx";
import { Text } from "../../atoms/Text/Text";


export const MainTitlesWrapper = () => {

    const {locationPath} = useLocationPath()

    return (
        <div className={clsx("hero-container", {"hero-container-start" : locationPath === '/explore'})}>
            {locationPath === '/' &&
            <> 
            <Icon1 />
            <div className="hero-container-title">
                <h2 className="hero-container-title__first-title">The world's best photo archive</h2>
                <h3 className="hero-container-title__second-title">Beautiful licensed photos, for free.</h3>
            </div>
            <MainSearchbar />
            </>
            }
            {locationPath === '/explore' &&
                <>
                    <div>
                    <MainTitle title='Explore' />
                    <Text tag='p' size='f-size-20' color='color-main'>Explore our photographic catalog</Text>
                    </div>
                    <HeroCards/>
                </>
            }
        </div>

    )
}