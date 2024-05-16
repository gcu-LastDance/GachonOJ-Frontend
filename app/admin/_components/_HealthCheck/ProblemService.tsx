import { healthCheckAPI } from "@/api/admin/adminDashboardAPI";
import { useQuery } from "@tanstack/react-query";

const ProblemService = () => {
  const { data } = useQuery({
    queryKey: ["healthCheck", "Problem-Service"],
    queryFn: () => healthCheckAPI("Problem-Service"),
  });
  console.log(data);
  return <div> {data?.application?.instance[0].status} </div>;
};

export default ProblemService;
