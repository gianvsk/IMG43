import { Button } from '../../atoms/Button/Button'
import './style.css'
import '../../../style/style.css';

export const SignUp = () => {

    return (
        <div className="navbar-signUp-container">
            <h5 className="navbar-signUp-container__signUp">Log in</h5>
            <Button type='submit' size='medium' title='Sign up'/>
        </div>
    )
}