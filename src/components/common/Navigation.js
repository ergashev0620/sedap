import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from '@/styles/Aside.module.css'
import Section from "./Section";

function Navigation(props) {
  const router = useRouter();
  console.log("router", router.asPath);

  const links = [
    {
      linkName: "Dashboard",
      linkImg: "./home.png",
      href: "/",
      active: true
    },
    {
      linkName: "Order List",
      linkImg: "./list.png",
      href: "/orders",
      active: true
    },    {
      linkName: "Order Detail",
      linkImg: "./order.png",
      href: "/orderDetail",
      active: true
    },    {
      linkName: "Customers",
      linkImg: "./Customer.png",
      href: "/customers",
      active: true
    },    {
      linkName: "Dashboard",
      linkImg: "./home.png",
      href: "/",
      active: true
    },    {
      linkName: "Dashboard",
      linkImg: "./home.png",
      href: "/",
      active: true
    },    {
      linkName: "Dashboard",
      linkImg: "./home.png",
      href: "/",
      active: true
    },    {
      linkName: "Dashboard",
      linkImg: "./home.png",
      href: "/",
      active: true
    },    {
      linkName: "Dashboard",
      linkImg: "./home.png",
      href: "/",
      active: true
    },    {
      linkName: "Dashboard",
      linkImg: "./home.png",
      href: "/",
      active: true
    },    {
      linkName: "Dashboard",
      linkImg: "./home.png",
      href: "/",
      active: true
    }, 
  ]
  return (
    <div>
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
          {links.map(() => {
            return (<Links linkName={linkName} linkImg={linkImg} href={href} active={active}/>)
          })}
          <Link className={`${router.asPath === '/analis' ? styles.active : ''}`} href='#'
            style={{
              background: router.asPath === '/analis' ? '#00B07426' : '',
              color: router.asPath === '/analis' ? '#177556' : ''
            }}><img src="./analis.png" alt="" />Analytics</Link>
          <Link className={`${router.asPath === '/review' ? styles.active : ''}`} href='#'
            style={{
              background: router.asPath === '/review' ? '#00B07426' : '',
              color: router.asPath === '/review' ? '#177556' : ''
            }}><img src="./review.png" alt="" />Reviews</Link>
          <Link className={`${router.asPath === '/foods' ? styles.active : ''}`} href='#'
            style={{
              background: router.asPath === '/foods' ? '#00B07426' : '',
              color: router.asPath === '/foods' ? '#177556' : ''
            }}><img src="./food.png" alt="" />Foods</Link>
          <Link className={`${router.asPath === '/foodDetail' ? styles.active : ''}`} href='#'
            style={{
              background: router.asPath === '/foodDetail' ? '#00B07426' : '',
              color: router.asPath === '/foodDetail' ? '#177556' : ''
            }}><img src="./foodDetail.png" alt="" />Food Detail</Link>
          <Link className={`${router.asPath === '/customerDetail' ? styles.active : ''}`} href='#'
            style={{
              background: router.asPath === '/customerDetail' ? '#00B07426' : '',
              color: router.asPath === '/customerDetail' ? '#177556' : ''
            }}><img src="./customerDetail.png" alt="" />Customer Detail</Link>
          <Link className={`${router.asPath === '/calendar' ? styles.active : ''}`} href='#'
            style={{
              background: router.asPath === '/calendar' ? '#00B07426' : '',
              color: router.asPath === '/calendar' ? '#177556' : ''
            }}><img src="./calendar.png" alt="" />Calendar</Link>
          <Link className={`${router.asPath === '/chat' ? styles.active : ''}`} href='#'
            style={{
              background: router.asPath === '/chat' ? '#00B07426' : '',
              color: router.asPath === '/chat' ? '#177556' : ''
            }}><img src="./chat.png" alt="" />Chat</Link>
          <Link className={`${router.asPath === '/wallet' ? styles.active : ''}`} href='#'
            style={{
              background: router.asPath === '/wallet' ? '#00B07426' : '',
              color: router.asPath === '/wallet' ? '#177556' : ''
            }}><img src="./wallet.png" alt="" />Wallet</Link>
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
      {/* <Section/> */}
    </div>
  );
}

function Links(props) {
  const [linkName, linkImg, href, active] = props
  return (
    <>
      <Link className={`${router.asPath === href ? styles.active : ''}`} href={href}
        style={{
          background: router.asPath === href ? '#00B07426' : '',
          color: router.asPath === href ? '#177556' : ''
        }}
      ><img src={linkImg} alt={linkName} />{linkName}</Link>
    </>
  )
}

export default Navigation;
