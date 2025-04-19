import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoHome, GoListUnordered } from "react-icons/go";
import styles from "@/styles/Aside.module.css";
import Image from "next/image";

function Navigation(props) {
  const router = useRouter();

  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      linkImg: "/home.png",
      href: "/dashboard",
      icon: <GoHome />,
    },
    {
      id: 2,
      linkName: "Order List",
      linkImg: "/list.png",
      href: "/orders",
      icon: <GoListUnordered />,
    },
    // // {
    // //   id: 3,
    // //   linkName: "Order Detail",
    // //   linkImg: "/order.png",
    // //   href: "/orderDetail",
    // // },
    {
      id: 4,
      linkName: "Customers",
      linkImg: "/customer.png",
      href: "/customers",
      icon: <GoHome />,
    },
    {
      id: 5,
      linkName: "Analytics",
      linkImg: "/analis.png",
      href: "/analis",
      icon: GoHome,
    },
    {
      id: 6,
      linkName: "Review",
      linkImg: "/review.png",
      href: "/review",
      icon: GoHome,
    },
    {
      id: 7,
      linkName: "Foods",
      linkImg: "/food.png",
      href: "/foods",
      icon: GoHome,
    },
    // {
    //   id: 8,
    //   linkName: "Food Detail",
    //   linkImg: "/foodDetail.png",
    //   href: "/foodDetail",
    //   icon: GoHome,
    // },
    // {
    //   id: 9,
    //   linkName: "Customer Detail",
    //   linkImg: "/customerDetail.png",
    //   href: "/customerDetail",
    // },
    {
      id: 10,
      linkName: "Calendar",
      linkImg: "/calendar.png",
      href: "/calendar",
      icon: GoHome,
    },
    {
      id: 11,
      linkName: "Chat",
      linkImg: "/chat.png",
      href: "/chat",
      icon: GoHome,
    },
    {
      id: 12,
      linkName: "Wallet",
      linkImg: "/wallet.png",
      href: "/wallet",
      icon: GoHome,
    },
  ];
  return (
    <aside className={styles["aside"]}>
      <div className={styles["aside-header"]}>
        <Image
          src="/Sedap.png"
          alt=""
          className={styles["logo"]}
          width={167}
          height={49}
        />
        <p
          style={{
            color: "#B9BBBD",
            fontSize: "18px",
            backgroundColor: "unset",
          }}
        >
          Modern Admin Dashboard
        </p>
      </div>
      <div className={styles["buttonsMenu"]}>
        {links.map(({ id, href, linkName, linkImg, icon }) => {
          const active = router.pathname.startsWith(href);
          return (
            <CustomLink
              key={id}
              linkName={linkName}
              href={href}
              active={active}
              icon={icon}
            />
          );
        })}
      </div>
      <div className={styles["addMenus"]}>
        <div className={styles["addMenusText"]}>
          <p>Please, organize your menus through button bellow!</p>
          <button>+Add Menus</button>
        </div>
        <Image
          src="/illustration.png"
          alt="illustration"
          width={76.6}
          height={90.8}
        />
      </div>
      <div className={styles["about"]}>
        <p>Sedap Restaurant Admin Dashboard</p>
        <p>© 2020 All Rights Reserved</p>
        <p>Made with ♥ by Peterdraw</p>
      </div>
    </aside>
  );
}

function CustomLink(props) {
  const { linkName, href, active, icon } = props;
  return (
    <>
      <Link
        className={`${active ? styles.active : ""}`}
        href={href}
        style={{
          background: active ? "#00B07426" : "",
          color: active === href ? "#177556" : "",
        }}
      >
        {icon}
        <p style={{ marginLeft: "10px" }}>{linkName}</p>
      </Link>
    </>
  );
}

export default Navigation;
