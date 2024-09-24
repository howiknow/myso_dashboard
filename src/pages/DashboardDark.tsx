import AllUpdata from "components/dashboard/darkmode/AllUpdate";
import CompareBox from "components/dashboard/darkmode/CompareBox";
import CopyRightAmount from "components/dashboard/darkmode/CopyRightAmount";
import CopyRightManage from "components/dashboard/darkmode/CopyRightManage";
import IllegalSite from "components/dashboard/darkmode/IllegalSite";
import Title from "components/dashboard/darkmode/Title";
import st from "./DashboardDark.module.scss";

const DashboardDark = () => {
  return (
    <div className={st.bg_container}>
      <Title />
      <div className={st.box_container}>
        <div className={st.amount_container}>
          <CompareBox />
          <CopyRightAmount />
        </div>
        <div>
          <CopyRightManage />
        </div>
        <div className={st.data_container}>
          <AllUpdata />
          <IllegalSite />
        </div>
      </div>
    </div>
  );
};

export default DashboardDark;
