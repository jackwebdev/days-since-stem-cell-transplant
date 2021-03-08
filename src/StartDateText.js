import React from 'react'

const StartDateText = (props) => {
    const date = props.startDate;

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = date.getDate();
    const m = months[date.getMonth()]
    const y = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();

    const ampm = hour >= 12 ? 'am' : 'pm';
    const time = `${hour}:${min} ${ampm}`

    
    return (
        <h2 className="formatTime">{d} {m} {y} - {time}</h2>
    )
}

export default StartDateText
