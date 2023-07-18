import { Button } from "../atoms/Button/Button"
import { LoginText } from "../atoms/LoginText/LoginText"
import { CheckboxReminder } from "../molecoles/CheckboxReminder/CheckboxReminder"
import { useState } from 'react';
import { UserSignUp } from "../../model/UserSignUp";
import './style.css';
import '../../style/style.css';
import { validateEmail, validateName, validateNumber, validatePassword } from "../../utils/validators";

type FormProps = {
    closeModal?: () => void
    activeUser: string
}

export const CompletedForm = ({ closeModal, activeUser }: FormProps) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')
    const [companyAddress, setCompanyAddress] = useState('')
    const [vat, setVat] = useState('')
    const [instragramUsername, setInstagramUsername] = useState('')

    const onSubmit = () => {
        let newUser: UserSignUp
        checkUserInput() ? (newUser = { name: name, surname: surname, telephone: telephone, email: email, password: password },
            closeModal!(),
            resetForm(),
            console.log(newUser, name, surname))
            : console.log('not valid')
    }

    const resetForm = () => {
        setName(''),
            setSurname(''),
            setTelephone(''),
            setEmail(''),
            setPassword('')
    }

    const checkUserInput = (): boolean => {
        if (validateName(name) &&
            validateName(surname) &&
            validateNumber(telephone) &&
            validateEmail(email) &&
            validatePassword(password)) return true; else return false
    }



    return (
        <div className="completed-form">
            {(activeUser === 'user' || activeUser === 'contributor') &&
                <form className="navbar-button-modal-form" onSubmit={onSubmit}>
                    <input type="text" className="navbar-button-modal-form__input--start" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
                    <input type="text" className="navbar-button-modal-form__input--center" onChange={(e) => setSurname(e.target.value)} placeholder="Surname" />
                    <input type="number" className="navbar-button-modal-form__input--center" onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone" />
                    <input type="email" className="navbar-button-modal-form__input--center" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                    <input type="password" className="navbar-button-modal-form__input--end" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </form>
            }
            {activeUser === 'brand' &&
                <form className="navbar-button-modal-form" onSubmit={onSubmit}>
                    <input type="text" className="navbar-button-modal-form__input--start" onChange={(e) => setName(e.target.value)} value={name} placeholder="Referent's name" />
                    <input type="text" className="navbar-button-modal-form__input--center" onChange={(e) => setSurname(e.target.value)} placeholder="Referent's surname" />
                    <input type="text" className="navbar-button-modal-form__input--center" onChange={(e) => setCompany(e.target.value)} placeholder="Company name" />
                    <input type="text" className="navbar-button-modal-form__input--center" onChange={(e) => setCompanyAddress(e.target.value)} placeholder="Company address" />
                    <input type="number" className="navbar-button-modal-form__input--center" onChange={(e) => setVat(e.target.value)} placeholder="VAT Number" />
                    <input type="number" className="navbar-button-modal-form__input--center" onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone" />
                    <input type="email" className="navbar-button-modal-form__input--center" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                    <input type="password" className="navbar-button-modal-form__input--center" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <input type="text" className="navbar-button-modal-form__input--end" onChange={(e) => setInstagramUsername(e.target.value)} placeholder="Instagram username" />
                </form>
            }
            <CheckboxReminder />
            <Button type='submit' size='large' title='Sign up' click={onSubmit} />
            <LoginText />
        </div>
    )
}