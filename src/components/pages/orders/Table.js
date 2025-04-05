import React from "react";
import styles from "@/styles/order.module.css";
import orderListData from "./Data";
import { useRouter } from "next/router";

export default function Table() {
  return (
    <>
      <table className={styles["table"]}>
        <thead>
          <tr className={styles["tr"]}>
            <th className={styles["th"]}>
              <div>
                <p>Order ID</p>
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
                <p>Date</p>
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
                <p>Amount</p>
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
                <p>Status Order</p>
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
        </tbody>
      </table>
    </>
  );
}

function TableMap() {
  const route = useRouter();
  const goToDetails = (id) => {
    route.push(`/orders/${id}`);
  };
  return (
    <>
      {orderListData.map((item) => (
        <tr
          key={item.userId}
          className={styles["tr2"]}
          style={{ cursor: "pointer" }}
          onClick={() => goToDetails(item.userId)}
        >
          <td className={styles["td"]}>#{item.userId}</td>
          <td className={styles["td"]}>{item.date}</td>
          <td className={styles["td"]}>{item.userName}</td>
          <td className={styles["td"]}>{item.location}</td>
          <td className={styles["td"]}>${item.amount}</td>
          <td className={styles["td"]}>
            {item.status === "On Delivery" ? (
              <div className={styles["onDelivery"]}>{item.status}</div>
            ) : (
              ""
            )}
            {item.status === "New Order" ? (
              <div className={styles["newOrder"]}>{item.status}</div>
            ) : (
              ""
            )}
            {item.status === "Delivered" ? (
              <div className={styles["delivered"]}>{item.status}</div>
            ) : (
              ""
            )}
          </td>
        </tr>
      ))}
    </>
  );
}
