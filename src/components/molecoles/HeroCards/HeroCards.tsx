import './style.css'
import { Text } from '../../atoms/Text/Text'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'

export const HeroCards = () => {

    return (
        <>
            <div className='background-single-image'>
                <div className='background-single-image-container'>
                    <a className="card-single-image background-single-image-container__card1">
                        <Text tag='h3' size='f-size-20' color='color-white'>Most Viewed</Text>
                        <div className='background-image-card-layout' />
                    </a>
                    <Paragraph text='Discover the photographs that have attracted the most attention' />
                </div>
                <div className='background-single-image-container'>
                    <a className="card-single-image background-single-image-container__card2">
                        <Text tag='h3' size='f-size-20' color='color-white'>Most Viewed</Text>
                        <div className='background-image-card-layout' />
                    </a>
                    <Paragraph text='Discover the most downloaded photos ever by our users' />
                </div>
                <div className='background-single-image-container'>
                    <a className="card-single-image background-single-image-container__card3">
                        <Text tag='h3' size='f-size-20' color='color-white'>Most Viewed</Text>
                        <div className='background-image-card-layout' />
                    </a>
                    <Paragraph text='Check out all the latest photos published by the users you follow.' />
                </div>
            </div>
        </>
    )
}