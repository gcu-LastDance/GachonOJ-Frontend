import { healthCheckAPI } from "@/api/admin/adminDashboardAPI";
import { useQuery } from "@tanstack/react-query";

const SubmissionService = () => {
  const { data } = useQuery({
    queryKey: ["healthCheck", "Submission-Service"],
    queryFn: () => healthCheckAPI("Submission-Service"),
  });
  console.log(data);
  return <div> {data?.application?.instance[0].status} </div>;
};

export default SubmissionService;
