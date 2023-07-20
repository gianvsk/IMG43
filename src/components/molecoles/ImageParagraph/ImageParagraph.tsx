import { Paragraph } from "../../atoms/Paragraph/Paragraph"
import { Image } from "../../atoms/Image/Image"
import './style.scss'


export const ImageParagraph = () => {

    return (
        <div className="image-paragraph-container">
        <Image/>
        <Paragraph/>
        </div>
    )
}