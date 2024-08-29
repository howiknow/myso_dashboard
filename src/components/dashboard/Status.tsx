import { ReactComponent as Chart } from "assets/svg/chart.svg";
import { ReactComponent as DataGraph } from "assets/svg/datagraph.svg";
import { ReactComponent as PeopleIcon } from "assets/svg/people.svg";
import StatusComponent from "./StatusComponent";

const Status = () => {
  return (
    <div>
      <StatusComponent
        title="전체 회원수 현황"
        icon={PeopleIcon}
        amount="23,423"
        percent="65%"
        percentBgColor="#e9f6ff"
        percentTextColor="#0097ff"
      />
      <StatusComponent
        title="전체 수집 데이터 현황"
        icon={Chart}
        amount="14.6M"
        percent="80%"
        percentBgColor="#E9FFF5"
        percentTextColor="#007C5E"
      />
      <StatusComponent
        title="대응 데이터 현황"
        icon={DataGraph}
        amount="4.5K"
        percent="80%"
        percentBgColor="#FFE8E9"
        percentTextColor="#E53622"
      />
    </div>
  );
};

export default Status;
