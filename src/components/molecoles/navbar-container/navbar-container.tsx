import { NavbarSignUp } from "../navbar-signUp/navbar-signUp";
import './style.css'
import { Links1 } from "../../atoms/Links1/Links1";
import { useState } from "react";
import { HeroContainerSearchbar } from "../hero-container-searchbar/hero-container-searchbar";

export const NavbarContainer = () => {

    const [pushed, setPushed] = useState(false)
    const [search, setSearch] = useState('')

    const isPushed = () => {
        setPushed(pushed === true ? false : true)
        console.log('pushed', pushed)
    }

    return (
        <>
            <div className='navbar-container'>
                <Links1 direction='row'/>
                <NavbarSignUp />
            </div>
            <div className="burger-menu-container">
                <div className="burger-menu" onClick={isPushed}>
                    <div className="burger-lines"></div>
                    <div className="burger-lines"></div>
                    <div className="burger-lines"></div>
                </div>
            </div>

            {pushed &&
                <div className="burger-body">
                    <HeroContainerSearchbar/>
                    <div className="links-container">
                    <Links1 direction='column'/>
                    </div>
                </div>
                    }
        </>
    )
}