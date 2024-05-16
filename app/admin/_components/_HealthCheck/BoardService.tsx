import { healthCheckAPI } from "@/api/admin/adminDashboardAPI";
import { useQuery } from "@tanstack/react-query";

const AIService = () => {
  const { data } = useQuery({
    queryKey: ["healthCheck", "Board-Service"],
    queryFn: () => healthCheckAPI("Board-Service"),
  });
  console.log(data);
  return <div> {data?.application?.instance[0].status} </div>;
};

export default AIService;
