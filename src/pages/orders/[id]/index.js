import { useParams } from "next/navigation";
import orderListData from "@/components/pages/orders/Data";
import MainLayout from "@/components/common/layouts/MainLayout";
import Orders from "..";
import styles from "@/styles/orderDetail.module.css";
import PageTitle from "../PageTitle2";
import Image from "next/image";
function OrderDetail() {
  const route = useParams();
  const currentOrder = orderListData.find((item) => {
    if (item.orderID === parseInt(route?.id)) {
      return true;
    }
  });
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["orderFilterNav"]}>
          <PageTitle
            title={`Order ID #${currentOrder?.orderID}`}
            subtitle={`Orders / orderDetail`}
          />
          <div className={styles["calendar"]}>
            <button className={styles['cancel']}>Cancel Order</button>
            <select className={styles['calendar1']}>
              <option>On Delivery</option>
            </select>
          </div>
        </div>
        <div className={styles["itemSection"]}>
          <div className={styles["aboutUser"]}>
            <div className={styles["aboutUserCard"]}>
              <div style={{ width: '160px', height: '160px', background: 'gray', borderRadius: '50%', margin: '30px auto' }}></div>
              <p>{currentOrder?.userName}</p>
              <div>Customer</div>
              <div className={styles["noteOrder"]}>
                <h2>Note Order</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className={styles["manzil"]}>
                  <div style={{ width: '49px', height: '49px', background: 'gray', borderRadius: '50%', margin: '30px 30px' }}></div>
                  <p>6 The Avenue, London EC50 4GN</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["aboutOrders"]}>b</div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;

OrderDetail.getLayout = (pageProps) => (
  <MainLayout>
    <OrderDetail {...pageProps} />
  </MainLayout>
);
