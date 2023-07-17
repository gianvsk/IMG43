import React, { useMemo } from "react"
import { Component } from "react"

type TextProps = {
    tag: 'h2' | 'h3' | 'h5' | 'p' | 'a'
    size?: '14' | '15' 
    children: any
}

export const Text = ({tag = 'a', size = '15', children} : TextProps) => {

    const Tag = tag

    const textSize = useMemo(() => {
        switch(tag) {
            case 'h2':
                return 'heading-2'
            case 'h3':
                return 'heading-3'
            case 'h5':
                return 'heading-5'
            case 'p':
                return 'paragraph'
            case 'a':
                size === '14' ? 
                    'paragraph-14' : 'paragraph-15'
                break
            default:
                return ''
        } }
    , [tag, size] ) 


    return (
        <Tag>
            {children}
        </Tag>
    )
}