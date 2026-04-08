import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../../shared/constants/routes.ts';
import logoDesktop from '../../../shared/assets/images/logo-desktop.png';
import styles from './Header.module.scss';
import { Container } from '../../../shared/ui/container/Container.tsx';
import SearchIcon from '../../../shared/assets/icons/search-icon.svg?react';
import BellIcon from '../../../shared/assets/icons/bell-icon.svg?react';
import clsx from 'clsx';
import { headerNavItems } from '../lib/header.data';

export function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) => {
    return clsx(styles.link, {
      [styles.active]: isActive,
    });
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link to={routes.home}>
            <img src={logoDesktop} alt="Logo" width="199" height="60" loading="lazy" />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {headerNavItems.map((item) => (
                <li key={item.to} className={styles.item}>
                  <NavLink className={navLinkClass} to={item.to} end={item.end}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.icons}>
            <SearchIcon className={styles.icon} />
            <BellIcon className={styles.icon} />
          </div>
        </div>
      </Container>
    </header>
  );
}
