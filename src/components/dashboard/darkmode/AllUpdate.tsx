import ArrowUp from "assets/svg/arrow_up.svg";
import Person from "assets/svg/person.svg";
import st from "./AllUpdate.module.scss";

const AllUpdata = () => {
  return (
    <div className={st.container}>
      <div className={st.amount}>
        <img src={Person} className={st.img}></img>
        <div>
          <p className={st.subtitle}>전체회원수 현황</p>
          <div className={st.status}>
            <p className={st.count}>23,423 </p>
            <div className={st.percnet}>
              <img src={ArrowUp}></img>
              <p className={st.percentage}>65%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUpdata;
