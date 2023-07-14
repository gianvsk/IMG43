import { Button } from "../../atoms/Button/Button"
import { CheckboxReminder } from "../CheckboxReminder/CheckboxReminder"
import { Form } from "../../atoms/Form/Form"
import { LoginText } from "../../atoms/LoginText/LoginText"


export const NavbarButtonModalMainContent = () => {

    return (
        <div className="navbar-button-modal-main-content">
            <Form/>
            <CheckboxReminder/>
            <Button size='large' title='Sign up'/>
            <LoginText/>
        </div>
    )
}