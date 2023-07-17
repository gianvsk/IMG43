import { Button } from "../atoms/Button/Button"
import { Form } from "../atoms/Form/Form"
import { LoginText } from "../atoms/LoginText/LoginText"
import { CheckboxReminder } from "../molecoles/CheckboxReminder/CheckboxReminder"

export const CompletedForm = () => {
    return (
        <div className="completed-form">
        <Form/>
        <CheckboxReminder/>
        <Button size='large' title='Sign up'/>
        <LoginText/>
        </div>
    )
}