import './style.css'
import { Text } from '../Text/Text'

type TagProps = {
    text: string
    value: number
}

export const Tag = ({ text, value }: TagProps) => {

    return (

        <a className='over'>
            <Text tag='h3' size='f-size-15' color='color-blue-opacity80'>{text}</Text>
            <div className='tag-number'>
                <span className='span-tag'>{value.toString()}</span>
            </div>
            <div className="tag"></div>
        </a>
    )
}