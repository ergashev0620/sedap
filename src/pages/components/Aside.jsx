import React from 'react'
import styles from '@/styles/Aside.module.css'
import Head from 'next/head'
import Link from 'next/link'

function Aside() {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap"
                />
            </Head>

            <aside className={styles['aside']}>
                <div className={styles['aside-header']}>
                    <img src="./Sedap.png" alt="" className={styles['logo']} />
                    <p style={{ color: '#B9BBBD', fontSize: "18px", backgroundColor: 'unset' }}>Modern Admin Dashboard</p>
                </div>
                <div className={styles['buttonsMenu']}>
                    <Link href='#'><img src="./home.png" alt="" />Dashboard</Link>
                    <Link href='#'><img src="./list.png" alt="" />Order List</Link>
                    <Link href='#'><img src="./order.png" alt="" />Order Detail</Link>
                    <Link href='#'><img src="./customer.png" alt="" />Customer</Link>
                    <Link href='#'><img src="./analis.png" alt="" />Analytics</Link>
                    <Link href='#'><img src="./review.png" alt="" />Reviews</Link>
                    <Link href='#'><img src="./food.png" alt="" />Foods</Link>
                    <Link href='#'><img src="./foodDetail.png" alt="" />Food Detail</Link>
                    <Link href='#'><img src="./customerDetail.png" alt="" />Customer Detail</Link>
                    <Link href='#'><img src="./calendar.png" alt="" />Calendar</Link>
                    <Link href='#'><img src="./chat.png" alt="" />Chat</Link>
                    <Link href='#'><img src="./wallet.png" alt="" />Wallet</Link>
                </div>
                <div className={styles['addMenus']}>
                    <div className={styles['addMenusText']}>
                        <p>
                            Please, organize your
                            menus through button
                            bellow!
                        </p>
                        <button>+Add Menus</button>
                    </div>
                    <img src="./illustration.png" alt="" />
                </div>
                <div className={styles['about']}>
                    <p>Sedap Restaurant Admin Dashboard</p>
                    <p>© 2020 All Rights Reserved</p>
                    <p>Made with ♥ by Peterdraw</p>
                </div>
            </aside>
        </>
    )
}

export default Aside
