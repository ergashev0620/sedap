import { useParams } from "next/navigation";
import orderListData from "@/components/pages/orders/Data";
function OrderDetail() {
  const route = useParams();
  const currentOrder = orderListData.find((item) => {
    if (item.orderID === parseInt(route?.id)) {
      return true;
    }
  });
  return <div>Hello. This is User ID {currentOrder?.userId}</div>;
}

export default OrderDetail;
