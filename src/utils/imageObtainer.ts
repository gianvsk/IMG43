const image = "https://picsum.photos/378/378?random="

const imageExplore = "https://picsum.photos/290/290?random="

export const convertNumberToSrc = () => {
    return image + Math.floor(Math.random() * 10).toString()
}

export const convertNumberToSrcExplore = () => {
    return imageExplore + Math.floor(Math.random() * 10).toString()
}