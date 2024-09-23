import all_member from "assets/svg/all_member.svg";
import moniter from "assets/svg/moniter.svg";
import shield from "assets/svg/shield.svg";
import softwere from "assets/svg/softwere.svg";
import BoxItem from "./BoxItem";
import st from "./CompareBox.module.scss";

const CompareBox = () => {
  return (
    <div className={st.compare_box}>
      <div className={st.compareRow}>
        <BoxItem
          imgSrc={all_member}
          title="전체 회원사"
          description="152개사"
        />
        <BoxItem imgSrc={shield} title="보호 소프트웨어" description="786개" />
      </div>
      <div className={st.compareRow}>
        <BoxItem imgSrc={softwere} title="등록소프트웨어" description="382개" />
        <BoxItem imgSrc={moniter} title="전체 모니터링 수" description="1.7M" />
      </div>
    </div>
  );
};

export default CompareBox;
