import { healthCheckAPI } from "@/api/admin/adminDashboardAPI";
import { useQuery } from "@tanstack/react-query";

const MemberService = () => {
  const { data } = useQuery({
    queryKey: ["healthCheck", "Member-Service"],
    queryFn: () => healthCheckAPI("Member-Service"),
  });
  console.log(data);
  return <div> {data?.application?.instance[0].status} </div>;
};

export default MemberService;
