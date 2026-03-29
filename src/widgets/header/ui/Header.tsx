import {Link, NavLink} from "react-router-dom";
import {routes} from "../../../shared/constants/routes.ts";
import logoDesktop from "../../../shared/assets/images/logo-desktop.png"
import styles from "./Header.module.scss"
import {Container} from "../../../shared/ui/container/Container.tsx";
import {BellIcon} from "../../../shared/ui/icon/BellIcon/BellIcon.tsx";
import {SearchIcon} from "../../../shared/ui/icon/SearchIcon/SearchIcon.tsx";
import clsx from "clsx";

export function Header() {

  const navLinkClass = ({isActive}: {isActive: boolean}) => {
    return clsx(styles.link, {
      [styles.active]: isActive,
    })
  }

  return (
    <header>
      <Container>
        <div className={styles.inner}>
          <Link to={routes.home}>
            <img
              src={logoDesktop}
              alt="Logo"
              width="199"
              height="60"
              loading="lazy"
            />
          </Link>

          <nav className={styles.navBar}>
            <ul className={styles.list}>
              <li className={styles.item}><NavLink className={navLinkClass} to={routes.home} end>Home</NavLink></li>
              <li className={styles.item}><NavLink className={navLinkClass} to={routes.moviesShows} end>Movies & Shows</NavLink></li>
              <li className={styles.item}><NavLink className={navLinkClass} to={routes.support} end>Support</NavLink></li>
              <li className={styles.item}><NavLink className={navLinkClass} to={routes.subscriptions} end>Subscriptions</NavLink></li>
            </ul>
          </nav>

          <div className={styles.icons}>
            <SearchIcon />
            <BellIcon />
          </div>
        </div>
      </Container>
    </header>
  )
}
