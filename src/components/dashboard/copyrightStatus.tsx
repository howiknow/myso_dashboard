import Amount from "./amount";
import st from "./copyrightStatus.module.scss";

const CopyrightStatus = () => {
  return (
    <div className={st.border_container}>
      <p className={st.title}>저작권 유통관리 현황</p>
      <div className={st.graph_container}>
        <p>안녕하세요</p>
        <Amount />
      </div>
    </div>
  );
};

export default CopyrightStatus;
