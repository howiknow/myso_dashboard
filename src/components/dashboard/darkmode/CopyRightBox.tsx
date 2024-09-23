import st from "./CopyRightBox.module.scss";

interface CopyRightBoxProps {
  title: string;
  amount: string;
  platformInfo: string;
}

const CopyRightBox = ({ title, amount, platformInfo }: CopyRightBoxProps) => {
  return (
    <div className={st.box_container}>
      <div className={st.title_cotainer}>
        <p>{title}</p>
        <p className={st.amount}>{amount}</p>
      </div>
      <p className={st.platform_info}>{platformInfo}</p>
    </div>
  );
};

export default CopyRightBox;
