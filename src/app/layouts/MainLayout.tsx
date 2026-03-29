import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";
import {Outlet} from "react-router-dom";
import styles from "./MainLayout.module.scss";

export function MainLayout () {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
