import { NavbarSignUp } from "../navbar-signUp/navbar-signUp";
import './style.css'
import { Links1 } from "../../atoms/Links1/Links1";

export const NavbarContainer = () => {

    return (
        <div className='navbar-container'>
            <Links1/>
            <NavbarSignUp/>
        </div>
    )
}