import './style.scss'
import { Text } from '../../atoms/Text/Text'
import { Tag } from '../../atoms/Tag/Tag'

export const Tags = () => {
    return (
        <div className="tags">
            <div className="categories-wrapper">
                <Text tag='h3' size='f-size-26' color='color-main' modifier='no-margin' >
                    Popular tags
                    <a className="text-span">View all</a>
                </Text>
            </div>
            <ul className='tags-container'>
                <li><Tag text='Mountain' value={312} /></li>
                <li><Tag text='Friends' value={309}/></li>
                <li><Tag text='Dinner' value={298} /></li>
                <li><Tag text='Good life' value={264} /></li>
                <li><Tag text='Nature' value={189}/></li>
                <li><Tag text='Love' value={20} /></li>
                <li><Tag text='Beautiful' value={16} /></li>
            </ul>
        </div>
    )
}