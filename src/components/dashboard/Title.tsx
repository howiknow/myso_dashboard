import st from "./Title.module.scss";

const Title = () => {
  return (
    <div className={st.border_container}>
      <p className={st.title}>저작권 보호센터 현황보드</p>
      <button className={st.button}>상황실보기</button>
    </div>
  );
};

export default Title;
