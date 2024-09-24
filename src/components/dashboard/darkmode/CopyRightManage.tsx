import Chart from "assets/image/Chart.png";
import Graph from "assets/image/Graph.png";
import st from "./CopyRightManage.module.scss";

const CopyRightManage = () => {
  return (
    <div className={st.container}>
      <p>저작권 유통관리 현황</p>
      <img src={Graph} />
      <p>일자별 데이터 수집 현황</p>
      <img src={Chart} className={st.chart} />
    </div>
  );
};

export default CopyRightManage;
