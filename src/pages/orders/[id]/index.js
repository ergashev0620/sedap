import { useParams } from "next/navigation";
import orderListData from "@/components/pages/orders/Data";
import MainLayout from "@/components/common/layouts/MainLayout";
import Orders from "..";
import styles from "@/styles/orderDetail.module.css";
import PageTitle from "../PageTitle2";
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
            <select className={styles['calendar']}>
              <option>On Delivery</option>
            </select>
          </div>
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
