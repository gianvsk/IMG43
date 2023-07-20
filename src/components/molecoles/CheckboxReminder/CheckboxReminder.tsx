import { CheckboxRememberMe } from "../../atoms/CheckboxRememberMe/CheckboxReminder"
import { ForgottenPassword } from "../../atoms/ForgottenPassword/ForgottenPassword"
import './style.scss'

export const CheckboxReminder = () => {

    return (
        <div className="navbar-button-modal-reminder">
            <CheckboxRememberMe/>
            <ForgottenPassword/>
        </div>
    )
}