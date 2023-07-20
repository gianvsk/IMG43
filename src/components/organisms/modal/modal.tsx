import { Icon1 } from '../../atoms/Icon1/Icon1';
import { Title } from '../../atoms/Title/Title';
import { Users } from '../../atoms/Users/Users';
import clsx from 'clsx';
import './style.scss'
import { useModalSignup } from '../../../contexts/signUp.context';
import { CompletedForm } from '../../form/completedForm';
import { useState } from 'react';

type Props = {
    open: boolean
}

export const Modal = ({ open }: Props) => {

    const {setVisible} = useModalSignup()

    const [activeUser, setActiveUser] = useState('user')

    const closeModal = () => {
        setVisible(false)
    }

    return (
        <div className={clsx('navbar-button-modal', { 'navbar-button-modal--open': open })} onClick={closeModal} >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <Icon1/>
                <Title/>
                <Users activeUser={activeUser} setActiveUser={setActiveUser}/>
                <CompletedForm activeUser={activeUser}closeModal={closeModal}/>
            </div>
        </div>
    )
}