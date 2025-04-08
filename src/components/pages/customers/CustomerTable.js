import React from "react";
import styles from "@/styles/customers.module.css";
import CustomerData from "./CustomerData";
import { useRouter } from "next/navigation";

export default function CustomerTable() {
<<<<<<< HEAD
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
          {CustomerData.map((item) => (
            <TableRow key={item.userId} item={item} />
          ))}
=======
  return (
    <>
      <table className={styles["table"]}>
        <thead>
          <tr className={styles["tr"]}>
            <th className={styles["th"]}>
              <div>
                <p>Customer ID</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Join Date</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Customer Name</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Location</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Total Spent</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Last Order</p>
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
          </tr>
        </thead>
        <tbody>
          <TableMap />
>>>>>>> main
        </tbody>
      </table>
    </>
  );
}

<<<<<<< HEAD
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
    route.push(`/orders/${id}`);
  };
  return (
    <tr
      className={styles["tr"]}
      style={{ cursor: "pointer" }}
      onClick={() => goToDetails(item.userId)}
    >
      <td className={styles["td"]}>#C-{item.userId}</td>
      <td className={styles["td"]}>{item.date}</td>
      <td className={styles["td"]}>{item.userName}</td>
      <td className={styles["td"]}>{item.location}</td>
      <td className={styles["td1"]}>${item.amount}</td>
      <td className={styles["td12"]}>${item.lastAmount}</td>
    </tr>
=======
function TableMap() {
  const route = useRouter();
  const goToDetails = (id) => {
    route.push(`/${id}`);
  };
  return (
    <>
      {CustomerData.map((item) => (
        <tr
          key={item.userId}
          className={styles["tr2"]}
          style={{ cursor: "pointer" }}
          onClick={() => goToDetails(item.userId)}
        >
          <td className={styles["td"]}>#C-{item.userId}</td>
          <td className={styles["td"]}>{item.date}</td>
          <td className={styles["td"]}>{item.userName}</td>
          <td className={styles["td"]}>{item.location}</td>
          <td className={styles["td1"]}>${item.amount}</td>
          <td className={styles["td12"]}>${item.lastAmount}</td>
        </tr>
      ))}
    </>
>>>>>>> main
  );
}
