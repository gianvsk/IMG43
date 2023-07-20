import './style.scss'

type MainTitleProps = {
    title?: string
}

export const MainTitle = ({title} : MainTitleProps) => {

    return (
        <>
        {!title && <h2 className="main-title">The world's best photo archive</h2>}
        {title && <h2 className="main-title main-title-left">{title}</h2>}
        </>
    )
}