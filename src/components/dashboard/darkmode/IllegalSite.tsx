import { ReactComponent as OrangeCircle } from "assets/svg/orange_circle.svg";
import { ReactComponent as PurpleCircle } from "assets/svg/purple_circle.svg";
import { ReactComponent as RealRedCircle } from "assets/svg/real_red_circle.svg";
import { ReactComponent as RedCircle } from "assets/svg/red_circle.svg";
import { ReactComponent as SkyblueCircle } from "assets/svg/skyblue_circle.svg";

import st from "./IllegalSite.module.scss";
import SiteItem from "./SiteItem";

const IllegalSite = () => {
  const siteData = [
    { Icon: SkyblueCircle, title: "www.4shared.com", count: "1,750건" },
    { Icon: PurpleCircle, title: "filehippo.com", count: "600건" },
    { Icon: OrangeCircle, title: "softpedia.com", count: "1,200건" },
    { Icon: RedCircle, title: "majorgeeks.com", count: "450건" },
    { Icon: RealRedCircle, title: "taiwebs.com", count: "1,000건" },
  ];

  const countriesData = [
    { countryFlagNum: "001", percentage: 30, color: "#00BDD6" },
    { countryFlagNum: "002", percentage: 10, color: "#8353E2" },
    { countryFlagNum: "003", percentage: 30, color: "#ED7D2D" },
    { countryFlagNum: "004", percentage: 20, color: "#E05858" },
    { countryFlagNum: "005", percentage: 20, color: "#0097FF" },
  ];

  return (
    <div className={st.container}>
      <p>주요 플랫폼 불법 사이트</p>
      <div className={st.percent_container}>
        <div className={st.combined_bar}>
          {countriesData.map((item, index) => (
            <div
              key={index}
              className={st.bar_segment}
              style={{
                width: `${item.percentage}%`,
                backgroundColor: item.color,
              }}
            >
              <span className={st.illegal_percent} />
            </div>
          ))}
        </div>
        {siteData.map((site, index) => (
          <SiteItem
            key={index}
            Icon={site.Icon}
            title={site.title}
            count={site.count}
          />
        ))}
      </div>
    </div>
  );
};

export default IllegalSite;
