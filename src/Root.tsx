import { Outlet } from "react-router-dom";
import st from "./Root.module.scss";

const Root = () => {
  return (
    <section className={st.section}>
      <div className={st.container}>
        <Outlet />
      </div>
    </section>
  );
};

export default Root;
