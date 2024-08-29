import Amount from "./Amount";
import Chart from "./Chart";
import st from "./CopyrightStatus.module.scss";
import Graph from "./Garph";

const CopyrightStatus = () => {
  return (
    <div className={st.border_container}>
      <p className={st.title}>저작권 유통관리 현황</p>
      <div className={st.graph_container}>
        <Chart />
        <Amount />
      </div>
      <p className={st.title}>일자별 데이터 수집 현황</p>
      <Graph />
    </div>
  );
};

export default CopyrightStatus;
