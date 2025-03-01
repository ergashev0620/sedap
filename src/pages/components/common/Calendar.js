import React from 'react'
import styles from '@/styles/order.module.css'

function Calendar() {
    return (
        <div>
            <div className={styles['status']}>
                <img src='./greencalendar.png' />
                <select>
                    <option>Today</option>
                    <option>Today1</option>
                </select>
            </div>
        </div>
    )
}

export default Calendar
