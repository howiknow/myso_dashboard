import start_button from "assets/svg/start_button.svg";
import title_background from "assets/svg/title_background.svg";
import st from "./Title.module.scss";

const Title = () => {
  return (
    <div className={st.title_container}>
      <img src={title_background} />
      <div className={st.button_container}>
        <p>저작권 보호센터 현황보드</p>
        <button className={st.button}>
          상황실보기 ON
          <img src={start_button} />
        </button>
      </div>
    </div>
  );
};

export default Title;
