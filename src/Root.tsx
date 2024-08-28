import { Outlet } from "react-router-dom";
import st from "./Root.module.scss";

const Root = () => {
  return (
    <section>
      {/* {!_cookie && <Login />} */}
      <>
        <div className={st.outlet_container}>
          <Outlet />
        </div>
      </>
    </section>
  );
};

export default Root;
