import { useParams } from "next/navigation";
import CustomerData from "@/components/pages/customers/CustomerData";
function CustomerDetail() {
  const route = useParams();
  const currentOrder = CustomerData.find((item) => {
    if (item.userId === parseInt(route?.id)) {
      return true;
    }
  });
  return <div>Hello. This is User ID {currentOrder?.userId}</div>;
}

export default CustomerDetail;
