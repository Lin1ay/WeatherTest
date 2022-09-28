import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/index.scss'

function LoadingSpinner() {
    const isLoad = useSelector((state: any) => state.loader)
    if (isLoad) {
        return (
            <div className="loader">
                <div className="spinner-container">
                    <div className="loading-spinner"></div>
                </div>
            </div>
        )
    } else return null
}

export default LoadingSpinner
