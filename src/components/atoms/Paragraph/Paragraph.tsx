import './style.scss'
import '../../../style/style.css';

type ParagraphProps = {
    text?: string
}

export const Paragraph = ({ text }: ParagraphProps) => {

    return (
        <div className="paragraph">
            {!text &&
                <p className="paragraph__paragraph-text">The world's best photo archive <br />
                    Beautiful licensed photos, for free.</p>
            }
            {text && 
                <p className='paragraph__paragraph-text--passed'>{text}</p>
                }

        </div>
    )
}