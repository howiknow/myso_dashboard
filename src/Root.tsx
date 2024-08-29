import { Outlet } from "react-router-dom";
import st from "./Root.module.scss";
import Nav from "./layout/Nav";

const Root = () => {
  return (
    <section className={st.section}>
      <div className={st.container}>
        <div id={st.menu_container}>
          <Nav />
        </div>
        <div id={st.outlet_container}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Root;
