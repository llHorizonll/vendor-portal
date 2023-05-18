import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const data = useLoaderData();
  return <div>Dashboard {data[0].name}xx</div>;
};

export default Dashboard;
