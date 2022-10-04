import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'

import '../Theme/Theme.scss'

interface IProps {
    className?: string
    children: ReactNode | ReactNode[]
}

const Theme = ({ className, children }: IProps) => {
    const theme = useSelector((state: any) => state.theme)

    React.useEffect(() => {
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
