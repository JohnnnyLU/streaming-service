import {Container} from "../../../shared/ui/container/Container.tsx";
import styles from "./Footer.module.scss"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}></div>
      </Container>
    </footer>
  )
}