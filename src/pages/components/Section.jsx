import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import YourOrder from './common/YourOrder'
import Status from './common/Status'
import Calendar from './common/Calendar'
import styles from '@/styles/order.module.css'
import Table from './Table'

export default function Section() {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap"
                />
            </Head>
            <div>
                <div className={styles["orderDiv"]}>
                    <YourOrder h1={'Your Orders'} text={'This is your order list data'}/>
                    <div className={styles["calendar"]}>
                        <Status />
                        <Calendar />
                    </div>
                </div>
                <div className={'tableData'}>
                    <Table/>
                </div>
            </div>
        </>
    )
}
