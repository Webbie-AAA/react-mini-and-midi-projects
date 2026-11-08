import { useState } from "react"
import './GetDateTime.css'
export default function GetDateTime(){


    const [currentDate, setDate ] = useState('Day Month dd Year');

    const getCurrentDate = () => {
        setDate(new Date().toDateString())
    }

    const[currentTime, setTime] = useState('00:00:00')

    const getCurrentTime = () => {
        setTime(new Date().toLocaleTimeString())
    }  

    const [reset] = useState(0)
    return(
        <div className='datetime-sticker'>
            <div className='date-box'>
                <h1>{currentDate}</h1>
            </div>

            <div className='time-box'>
                <h1>{currentTime}</h1>
            </div>

            <div className='datetime-button-group'>
                <button onClick={getCurrentDate}>Click For Date</button>
                <button onClick={getCurrentTime}>Click For Time</button>
            </div>
        </div>
    )
}