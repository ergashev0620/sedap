import { useParams } from "next/navigation";
import { orderListData } from "@/pages/Data";
function CustomerDetail() {
  const route = useParams();
  const currentOrder = orderListData.find((item) => {
    if (item.id === route?.id) {
      return true;
    }
  });
  return <div>Hello. This is User ID {currentOrder?.id}</div>;
}

export default CustomerDetail;
