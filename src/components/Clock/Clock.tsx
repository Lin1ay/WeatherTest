import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loading } from '../../slices/loaders'

interface ITimezone {
    timezone: number
}

const Clock = (props: ITimezone) => {
    const dispatch = useDispatch()
    const [timers, setTime] = useState<string>('')
    useEffect(() => {
        function time() {
            const dt = new Date()
            const newDt = new Date(
                dt.valueOf() +
                    props.timezone * 1000 +
                    dt.getTimezoneOffset() * 60 * 1000
            ).toLocaleString()
            setTime(newDt)
            dispatch(loading(false))
        }
        const timerId = setInterval(time, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [props.timezone, dispatch])
    return <>{timers}</>
}

export default Clock
