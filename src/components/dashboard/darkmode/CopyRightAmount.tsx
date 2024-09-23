import st from "./CopyRightAmout.module.scss";
import CopyRightBox from "./CopyRightBox";

const CopyRightAmount = () => {
  return (
    <div className={st.container}>
      <p>주요저작권 유통 금액</p>
      <CopyRightBox
        title="합동유동 판매 노출 금액"
        amount="2,345,000원"
        platformInfo="합법 플랫폼 판매 금액 * 판매노출건수"
      />
      <CopyRightBox
        title="불법유통 피해금액"
        amount="1,234,000원"
        platformInfo="불법 플랫폼 판매 금액 *  모니터링건수 * 예상피해규모 "
      />
      <CopyRightBox
        title="미확인 유통금액"
        amount="234,000,000원"
        platformInfo="불법 플랫폼 판매 금액 *  모니터링건수 * 예상피해규모 "
      />
    </div>
  );
};

export default CopyRightAmount;
