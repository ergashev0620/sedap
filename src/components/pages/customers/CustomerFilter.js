import React from "react";
import styles from "@/styles/order.module.css";
import Image from "next/image";

function CustomerFilter() {
  return (
    <div>
      <div className={styles["status"]}>
        <Image src="./allstatus.png" alt="allstatus" width={24} height={24}/>
        <select>
          <option>Filter</option>
          <option>Name</option>
          <option>ID</option>
        </select>
      </div>
    </div>
  );
}

export default CustomerFilter;
