import './style.css'

export const CheckboxRememberMe = () => {

    return(
        <div className='navbar-button-modal-checkbox'>
        <input type="checkbox" className="navbar-button-modal-checkbox__checkbox"/>
        <span className="navbar-button-modal-checkbox__remember-me">Remember me</span>
        </div>
    )
}