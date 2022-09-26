import React from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'

import styles from '../styles/index.module.scss'

const Theme = ({ className }: any) => {
    const theme = useSelector((state: any) => state.theme)

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div
            className={cn(
                className,
                styles.root,
                theme === 'dark' ? styles.dark : styles.light
            )}
        />
    )
}

export default Theme
