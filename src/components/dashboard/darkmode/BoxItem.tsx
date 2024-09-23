import st from "./BoxItem.module.scss";

interface BoxItemProps {
  imgSrc: string;
  title: string;
  description: string;
}

const BoxItem = ({ imgSrc, title, description }: BoxItemProps) => {
  return (
    <div className={st.box_container}>
      <div className={st.title_contaienr}>
        <img src={imgSrc} className={st.image} />
        <div className={st.container}>
          <p className={st.title}>{title}</p>
          <p className={st.description}>{description}</p>
        </div>
      </div>
      <div className={st.additional_info_container}>
        <p className={st.additional_info}>전월대비</p>
        <div className={st.info_icon}></div>
      </div>
    </div>
  );
};

export default BoxItem;
