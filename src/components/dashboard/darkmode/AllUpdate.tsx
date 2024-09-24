import Person from "assets/svg/person.svg";
import st from "./AllUpdate.module.scss";

const AllUpdata = () => {
  return (
    <div className={st.container}>
      <div>
        <div>
          <img src={Person}></img>
          <div>
            <p>전체회원수 현황</p>
            <p>23,423 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUpdata;
