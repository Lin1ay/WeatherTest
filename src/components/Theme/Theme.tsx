import React, { ReactNode, useEffect } from 'react'
import cn from 'classnames'
import { store } from '../../store/store'
import { useSelector } from 'react-redux'

interface IProps {
    className?: string
    children: ReactNode | ReactNode[]
}

const Theme = ({ className, children }: IProps) => {
    const theme = useSelector(store.getState).theme

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className={cn(className, theme === 'dark' ? 'dark' : 'light')}>
            {children}
        </div>
    )
}

export default Theme
