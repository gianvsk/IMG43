import { Button } from '../../atoms/Button/Button'
import './style.css'

export const NavbarSignUp = () => {

    return (
        <div className="navbar-signUp-container">
            <h5 className="navbar-signUp-container__signUp">Log in</h5>
            <Button size='medium' title='Sign up'/>
        </div>
    )
}