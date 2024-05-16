import { healthCheckAPI } from "@/api/admin/adminDashboardAPI";
import { useQuery } from "@tanstack/react-query";

const AIService = () => {
  const { data } = useQuery({
    queryKey: ["healthCheck", "AI-Service"],
    queryFn: () => healthCheckAPI("AI-Service"),
  });
  console.log(data);
  return <div> {data?.application?.instance[0].status} </div>;
};

export default AIService;
