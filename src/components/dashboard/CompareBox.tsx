import all_member from "assets/svg/all_member.svg";
import moniter from "assets/svg/moniter.svg";
import shield from "assets/svg/shield.svg";
import softwere from "assets/svg/softwere.svg";
import st from "./CompareBox.module.scss";
import CompareComponents from "./CompareComponents";

const CompareBox = () => {
  return (
    <div className={st.compareBoxContainer}>
      <div className={st.compareRow}>
        <CompareComponents
          imageSrc={all_member}
          titleText="전체 회원사"
          subtitleText="152개사"
          backgroundColor="linear-gradient(90deg, #007df0 0%, #653ac1 100%)"
        />
        <CompareComponents
          imageSrc={softwere}
          titleText="등록 소프트웨어"
          subtitleText="382개"
          backgroundColor="linear-gradient(90deg, #49C8DB 0%, #007AD3 100%)"
        />
      </div>
      <div className={st.compareRow}>
        <CompareComponents
          imageSrc={shield}
          titleText="보호 소프트웨어"
          subtitleText="786개"
          backgroundColor="linear-gradient(90deg, #31D8A4 0%, #009E7E 100%)"
        />
        <CompareComponents
          imageSrc={moniter}
          titleText="전체 모니터링 수"
          subtitleText="1.7M"
          backgroundColor="linear-gradient(90deg, #A331D8 0%, #3C009E 100%)"
        />
      </div>
    </div>
  );
};

export default CompareBox;
