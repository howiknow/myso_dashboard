import CompareBox from "components/dashboard/compareBox";
import CopyrightStatus from "components/dashboard/copyrightStatus";
import st from "./dashboard.module.scss";
const Dashboard = () => {
  return (
    <div className={st.container}>
      <div className={st.border_container}>
        <p className={st.title}>저작권 보호센터 현황보드</p>
        <button className={st.button}>상황실보기</button>
      </div>
      <div className={st.status_container}>
        <CopyrightStatus />
        <CompareBox />
      </div>
    </div>
  );
};

export default Dashboard;
