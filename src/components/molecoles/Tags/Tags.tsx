import './style.scss'
import { Text } from '../../atoms/Text/Text'
import { Tag } from '../../atoms/Tag/Tag'
import { useState } from 'react'

export const Tags = () => {

    

    const [values, setValues] = useState( {tags: [
        {tag: 'Mountain', value: 312},
        {tag: 'Friends', value: 309},
        {tag: 'Dinner', value: 298},
        {tag: 'Good life', value: 264},
        {tag: 'Nature', value: 189},
        {tag: 'Love', value: 20},
        {tag: 'Beatiful', value: 16}
        ]}
    )

    return (
        <div className="tags">
            <div className="categories-wrapper">
                <Text tag='h3' size='f-size-26' color='color-main' modifier='no-margin' >
                    Popular tags
                    <a className="text-span">View all</a>
                </Text>
            </div>
            <ul className='tags-container'>
                <li><Tag text={values.tags[0].tag} value={values.tags[0].value} /></li>
                <li><Tag text={values.tags[1].tag} value={values.tags[1].value}/></li>
                <li><Tag text={values.tags[2].tag} value={values.tags[2].value} /></li>
                <li><Tag text={values.tags[3].tag} value={values.tags[3].value} /></li>
                <li><Tag text={values.tags[4].tag} value={values.tags[4].value}/></li>
                <li><Tag text={values.tags[5].tag} value={values.tags[5].value} /></li>
                <li><Tag text={values.tags[6].tag} value={values.tags[6].value} /></li>
            </ul>
        </div>
    )
}