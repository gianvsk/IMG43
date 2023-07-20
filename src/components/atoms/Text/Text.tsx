import React, { useMemo } from "react"
import './style.scss'

type TextProps = {
    tag: 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'a' | 'span' 
    size?: 'f-size-13' | 'f-size-14' |'f-size-15' | 'f-size-16' | 'f-size-17' |'f-size-18' |'f-size-20' | 'f-size-26'
    color: 'color-main' | 'color-white' | 'color-blue' | 'color-black' | 'color-main-opacity60' | 'color-blue-opacity80'
    modifier?: 'span-tag' | 'no-margin'
    children: React.ReactNode
    font?: 'RobotoRegular' | 'RobotoMedium'
}

export const Text = ({tag, size, color, modifier, font, children} : TextProps) => {

    const Tag = tag

    const textSize = useMemo(() => {
        switch(tag) {
            case 'h2':
                return 'heading-2'
            case 'h3':
                 if(modifier === 'no-margin')
                   return 'heading-3--no-margin';
                   else return 'heading-3'
            case 'h4':
                return 'heading-4'
            case 'h5':
                return 'heading-5'
            case 'p':
                return 'paragraph-text'
            case 'span':
                return 'span'
            case 'a':
                if(font === 'RobotoRegular') return 'a-text' + ' ' +'RobotoRegular' 
                else return 'a-text' + ' ' + 'RobotoMedium'  
            default:
                return ''
        } }
    , [tag, modifier, font] ) 


    return (
        <Tag className={textSize + ' ' + size! + ' ' + color + ' ' + modifier!}>
            {children}
        </Tag>
    )
}
