import React from "react";
import st from "./SiteIteme.module.scss";

interface SiteItemProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  count: string;
}

const SiteItem = ({ Icon, title, count }: SiteItemProps) => {
  return (
    <div className={st.site_name}>
      <div className={st.site_name_container}>
        <Icon />
        <p>{title}</p>
      </div>
      <p className={st.count}>{count}</p>
    </div>
  );
};

export default SiteItem;
