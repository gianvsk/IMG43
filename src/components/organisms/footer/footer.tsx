import { FooterContainer } from "../../molecoles/footer-container/footer-container"
import { Paragraph } from "../../atoms/Paragraph/Paragraph"
import './style.css'

export const Footer = () => {
    return (
        <div className="footer">
            <FooterContainer/>
            <Paragraph/>
        </div>
    )
}