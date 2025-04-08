import React from "react";
import styles from "@/styles/orderDetail.module.css";

function PageTitle(props) {
  const { title, subtitle } = props;
  return (
    <div>
      <h1 className={styles["pagetitleh1"]}>{title}</h1>
      <p className={styles["pagetitleP"]}>{subtitle}</p>
    </div>
  );
}

export default PageTitle;
