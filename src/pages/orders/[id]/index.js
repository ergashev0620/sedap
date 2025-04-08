import { useParams } from "next/navigation";
import orderListData from "@/components/pages/orders/Data";
function OrderDetail() {
  const route = useParams();
  const currentOrder = orderListData.find((item) => {
<<<<<<< HEAD
    if (item.orderID === parseInt(route?.id)) {
      return true;
    }
  });
  return <div>Hello. This is Order ID {currentOrder?.orderID}</div>;
=======
    if (item.userId === parseInt(route?.id)) {
      return true;
    }
  });
  console.log("OrderDetail", currentOrder);
  return <div>Hello {currentOrder.userId}</div>;
>>>>>>> main
}

export default OrderDetail;
