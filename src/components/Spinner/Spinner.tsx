import React from 'react'
import { useSelector } from 'react-redux'
import '../Spinner/Spinner.scss'
import { store } from '../../store/store'

function LoadingSpinner() {
    const isLoad = useSelector(store.getState).loader

    return isLoad ? (
        <div className="loader">
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        </div>
    ) : null
}

export default LoadingSpinner
