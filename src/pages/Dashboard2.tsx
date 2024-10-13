import CompareBox from "components/dashboard/CompareBox";
import CopyrightStatus from "components/dashboard/CopyrightStatus";
import SiteStatus from "components/dashboard/SiteStatus";
import Status from "components/dashboard/Status";
import Title from "components/dashboard/Title";
import st from "./Dashboard2.module.scss";

const Dashboard = () => {
  return (
    <div className={st.layout}>
      <Title />
      <div className={st.status_container}>
        <CopyrightStatus />
        <div>
          <CompareBox />
          <div className={st.site_container}>
            <Status />
            <SiteStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
