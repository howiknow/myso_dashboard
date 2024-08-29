import arrow_up from "assets/svg/arrow_up.svg";
import st from "./CompareComponents.module.scss";

interface CompareBoxProps {
  imageSrc: string;
  titleText: string;
  subtitleText: string;
  backgroundColor: string;
}

const CompareComponents = ({
  imageSrc,
  titleText,
  subtitleText,
  backgroundColor,
}: CompareBoxProps) => {
  return (
    <div
      className={st.amount_container}
      style={{ background: backgroundColor }}
    >
      <div className={st.title_container}>
        <img src={imageSrc} className={st.svg} alt={titleText} />
        <div className={st.subtitle_container}>
          <p>{titleText}</p>
          <p>{subtitleText}</p>
        </div>
      </div>
      <div className={st.precent_container}>
        <p>전월대비</p>
        <div className={st.percent}>
          <img src={arrow_up} className={st.arrow} alt="Arrow Up" />
          <p>25%</p>
        </div>
      </div>
    </div>
  );
};

export default CompareComponents;
