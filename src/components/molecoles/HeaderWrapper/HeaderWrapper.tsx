import { SignUp } from "../SignUp/SignUp";
import './style.css'
import '../../../style/style.css';
import { Links1 } from "../../atoms/Links1/Links1";
import { MainSearchbar } from "../MainSearchbar/MainSearchbar";
import { useLayout } from "../../../contexts/burgerMenuContext";
import { ImageLinks } from "../ImageLinks/ImageLinks";
import { useLocationPath } from "../../../contexts/locationContext";

export const HeaderWrapper = () => {

/*     const [pushed, setPushed] = useState(false) */

    const {pushed, setPushed} = useLayout()

    const isPushed = () => {
        setPushed(pushed === true ? false : true)
    }
 
    const {locationPath} = useLocationPath()

    return (
        <>
            <div className='navbar-container'>
                <ImageLinks />
                {locationPath === '/explore' && <MainSearchbar pathChanged={true} /> }
                <SignUp />
            </div>
            <div className="container-login-menu">
                <a className="container-login-menu__link">Login</a>
                <div className="burger-menu-container">
                    <div className="burger-menu" onClick={isPushed}>
                        <div className="burger-menu__lines"></div>
                        <div className="burger-menu__lines"></div>
                        <div className="burger-menu__lines"></div>
                    </div>
                </div>
            </div>

            {pushed &&
                <div className="burger-body">
                    <MainSearchbar/>
                    <div className="burger-body__links-container">
                        <Links1 />
                    </div>
                </div>
            }
            </>
    )
}