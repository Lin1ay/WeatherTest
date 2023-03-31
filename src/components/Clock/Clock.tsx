import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ITimeZone } from '../../../types/types'
import { loading } from '../../slices/loaders'

const Clock: FC<ITimeZone> = (props) => {
    const dispatch = useDispatch()
    const [timers, setTime] = useState<string>('')
    useEffect(() => {
        function time() {
            const dt = new Date()
            const newDt = new Date(
                dt.valueOf() +
                    props.timeZone * 1000 +
                    dt.getTimezoneOffset() * 60 * 1000
            ).toLocaleString()
            setTime(newDt)
            dispatch(loading(false))
        }
        const timerId = setInterval(time, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [props.timeZone, dispatch])
    return <>{timers}</>
}

export default Clock
