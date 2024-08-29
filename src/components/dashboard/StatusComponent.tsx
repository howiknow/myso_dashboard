import st from "./StatusComponent.module.scss";

interface StatusProps {
  title: string;
  amount: string;
  percent: string;
  percentBgColor: string;
  percentTextColor: string;
  icon: any;
}

const StatusComponent = ({
  title,
  icon: IconComponent,
  amount,
  percent,
  percentBgColor,
  percentTextColor,
}: StatusProps) => {
  return (
    <div className={st.status_container}>
      <IconComponent className={st.icon} />
      <div className={st.title}>
        <p className={st.status_label}>{title}</p>
        <div className={st.amount_container}>
          <p className={st.amount}>{amount}</p>
          <div
            className={st.percent_container}
            style={{ backgroundColor: percentBgColor }}
          >
            <p className={st.percent} style={{ color: percentTextColor }}>
              {percent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusComponent;
