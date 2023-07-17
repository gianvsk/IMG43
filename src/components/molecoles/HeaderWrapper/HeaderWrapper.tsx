import { SignUp } from "../SignUp/SignUp";
import './style.css'
import { Links1 } from "../../atoms/Links1/Links1";
import { useState } from "react";
import { MainSearchbar } from "../MainSearchbar/MainSearchbar";

export const HeaderWrapper = () => {

    const [pushed, setPushed] = useState(false)
    const [search, setSearch] = useState('')

    const isPushed = () => {
        setPushed(pushed === true ? false : true)
        console.log('pushed', pushed)
    }

    return (
        <>
            <div className='navbar-container'>
                <Links1 />
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
                    <MainSearchbar />
                    <div className="burger-body__links-container">
                        <Links1 />
                    </div>
                </div>
            }
        </>
    )
}