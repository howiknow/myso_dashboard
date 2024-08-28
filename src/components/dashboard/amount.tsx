import st from "./amount.module.scss";
import AmountBox from "./amountBox";

const Amount = () => {
  const data = [
    {
      title: "합법유통 판매금액",
      amount: "2,345,000",
      description: "합법 플랫폼 판매 금액 * 판매노출건수",
    },
    {
      title: "불법유통 피해금액",
      amount: "1,234,000",
      description: "불법 플랫폼 판매 금액 *  모니터링건수 * 예상피해규모 ",
    },
    {
      title: "미확인 유통금액",
      amount: "3,456,000",
      description: "불법 플랫폼 판매 금액 *  모니터링건수 * 예상피해규모 ",
    },
  ];

  return (
    <div className={st.amount_container}>
      <p className={st.title}>주요저작권 유통 금액</p>
      <AmountBox data={data} />
    </div>
  );
};

export default Amount;
