import { useState } from 'react';
import { UserSignUp } from '../../../model/UserSignUp';
import '../../../utils/validators'
import './style.css';
import '../../../style/style.css';
import { validateEmail, validateName, validateNumber, validatePassword } from '../../../utils/validators';

export const Form = () => {

    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')
    const[telephone, setTelephone] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const onSubmit = () => {
        let newUser : UserSignUp 
        checkUserInput() ? (newUser = {name: name, surname: surname, telephone: telephone, email: email, password: password},
                            console.log(newUser))
        : false
    }

    const checkUserInput = () : boolean => {
        if(validateName(name) &&
        validateName(surname) &&
        validateNumber(telephone) &&
        validateEmail(email) &&
        validatePassword(password)) return true; else return false
    }

    return (
        <form className="navbar-button-modal-form" onSubmit={onSubmit}>
            <input type="text" className="navbar-button-modal-form__input--start"  onChange={(e) => setName(e.target.value)} placeholder="Name"/>
            <input type="text" className="navbar-button-modal-form__input--center"  onChange={(e) => setSurname(e.target.value)} placeholder="Surname"/>
            <input type="text" className="navbar-button-modal-form__input--center"  onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone"/>
            <input type="text" className="navbar-button-modal-form__input--center"  onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
            <input type="text" className="navbar-button-modal-form__input--end"  onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        </form>
    )
}