import CompareBox from "components/dashboard/CompareBox";
import CopyrightStatus from "components/dashboard/CopyrightStatus";
import Status from "components/dashboard/Status";
import Title from "components/dashboard/Title";
import st from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={st.layout}>
      <Title />
      <div className={st.status_container}>
        <CopyrightStatus />
        <div>
          <CompareBox />
          <Status />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
