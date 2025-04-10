import React from "react";
import styles from "@/styles/customers.module.css";
import { orderListData } from "@/pages/Data";
import { useRouter } from "next/navigation";

export default function CustomerTable() {
  const columns = [
    {
      id: "0",
      name: "Customer ID",
    },
    {
      id: "1",
      name: "Join Date",
    },
    {
      id: "2",
      name: "Customer Name",
    },
    {
      id: "3",
      name: "Location",
    },
    {
      id: "4",
      name: "Total Spent",
    },
    {
      id: "5",
      name: "Last Order",
    },
  ];
  return (
    <>
      <table className={styles["orderTable"]}>
        <thead>
          <tr className={styles["tr"]}>
            {columns.map((col) => (
              <TableHead key={col.id} name={col.name} />
            ))}
          </tr>
        </thead>
        <tbody>
          {orderListData.map((item) => (
            <TableRow key={item.userId} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}

function TableHead({ name }) {
  return (
    <th className={styles["th"]}>
      <div>
        <p>{name}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <img src="./Vector1.png" />
          <img src="./Vector2.png" />
        </div>
      </div>
    </th>
  );
}

function TableRow(props) {
  const { item } = props;
  const route = useRouter();
  const goToDetails = (id) => {
    route.push(`/customers/${id}`);
  };
  return (
    <tr
      className={styles["tr"]}
      style={{ cursor: "pointer" }}
      onClick={() => goToDetails(item.userId)}
    >
      <td className={styles["td"]}>#C-{item.id}</td>
      <td className={styles["td"]}>{item.date}</td>
      <td className={styles["td"]}>{item.customer.name}</td>
      <td className={styles["td"]}>{item.location}</td>
      <td className={styles["td1"]}>${item.amount}</td>
      <td className={styles["td12"]}>${item.lastAmount}</td>
    </tr>
  );
}
