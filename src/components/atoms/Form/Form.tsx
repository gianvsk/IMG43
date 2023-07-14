import { useEffect, useState } from 'react';
import { UserSignUp } from '../../../model/UserSignUp';
import '../../../utils/validators'
import './style.css';
import { validateEmail, validateName, validateNumber, validatePassword } from '../../../utils/validators';

export const Form = () => {

    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')
    const[telephone, setTelephone] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const onSubmit = () => {
        let newUser : UserSignUp 
        checkUserInput() ? newUser = {name: name, surname: surname, telephone: telephone, email: email, password: password}
        : console.log('not valid')
    }

    const setValidName = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value),
        validateName(name) ? console.log(name) : console.log('false')
    }

    const setValidSurname = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value),
        validateName(name) ? console.log(name) : console.log('false')
    }

    const setValidNumber = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTelephone(e.target.value),
        validateNumber(telephone) ? console.log(telephone) : console.log('false')
    }

    const setValidEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value),
        validateEmail(email) ? console.log(email) : console.log('false')
    }

    const setValidPassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        validatePassword(password) ? console.log(password) : false
    }

    const checkUserInput = () : boolean => {
        if(validateName(name) &&
        validateName(surname) &&
        validateNumber(telephone) &&
        validateEmail(email) &&
        validatePassword(password)) return true; else return false
    }

    return (
        <form className="navbar-button-modal-form">
            <input type="text" className="navbar-button-modal-form__input--start"  onChange={(e) => setValidName(e)} placeholder="Name"/>
            <input type="text" className="navbar-button-modal-form__input--center"  onChange={(e) => setValidSurname(e)} placeholder="Surname"/>
            <input type="text" className="navbar-button-modal-form__input--center"  onChange={(e) => setValidNumber(e)} placeholder="Telephone"/>
            <input type="text" className="navbar-button-modal-form__input--center"  onChange={(e) => setValidEmail(e)} placeholder="E-mail"/>
            <input type="text" className="navbar-button-modal-form__input--end"  onChange={(e) => setValidPassword(e)} placeholder="Password"/>
        </form>
    )
}