import st from "./AmounBox.module.scss";

type AmountBoxProps = {
  data: Array<{
    title: string;
    amount: string;
    description: string;
  }>;
};

const AmountBox = ({ data }: AmountBoxProps) => {
  return (
    <div className={st.amount_total}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${st.amount} ${
            item.title === "불법유통 피해금액"
              ? st.illegalAmount
              : item.title === "미확인 유통금액"
              ? st.unknownAmount
              : ""
          }`}
        >
          <div className={st.amount_name}>
            <p>{item.title}</p>
            <p>{item.amount}</p>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AmountBox;
