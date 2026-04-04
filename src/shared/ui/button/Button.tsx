import type { ComponentType, SVGProps } from 'react';
import styles from "./Button.module.scss";
import {Link} from "react-router-dom";

type ButtonProps = {
  children: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  to?: string;
}

export function Button({children, icon: Icon, to}: ButtonProps) {
  if (to) {
    return (
      <Link to={to} className={styles.button}>
        {Icon && <Icon />}
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.button}>
      {Icon && <Icon />}
      {children}
    </button>
  )
}
