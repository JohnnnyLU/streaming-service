import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";
import styles from "./MainLayout.module.scss";
import type {ReactNode} from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout ({children}: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
