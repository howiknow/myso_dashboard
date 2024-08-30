import { ReactComponent as BlueCircle } from "assets/svg/blue_circle.svg";
import { ReactComponent as OrangeCircle } from "assets/svg/orange_circle.svg";
import { ReactComponent as PurpleCircle } from "assets/svg/purple_circle.svg";
import { ReactComponent as RedCircle } from "assets/svg/red_circle.svg";
import { ReactComponent as SkyblueCircle } from "assets/svg/skyblue_circle.svg";

import SiteItem from "./SiteItme";
import st from "./SiteStatus.module.scss";

const SiteStatus = () => {
  const siteData = [
    { Icon: SkyblueCircle, title: "www.4shared.com", count: "1,750건" },
    { Icon: PurpleCircle, title: "filehippo.com", count: "600건" },
    { Icon: OrangeCircle, title: "softpedia.com", count: "1,200건" },
    { Icon: RedCircle, title: "majorgeeks.com", count: "450건" },
    { Icon: BlueCircle, title: "taiwebs.com", count: "1,000건" },
  ];

  const countriesData = [
    { countryFlagNum: "001", percentage: 30, color: "#00BDD6" },
    { countryFlagNum: "002", percentage: 20, color: "#8353E2" },
    { countryFlagNum: "003", percentage: 10, color: "#ED7D2D" },
    { countryFlagNum: "004", percentage: 20, color: "#E05858" },
    { countryFlagNum: "005", percentage: 20, color: "#0097FF" },
  ];

  return (
    <div className={st.site_container}>
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

export default SiteStatus;
