import type { ComponentType, SVGProps } from 'react';
import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export function Button({children, icon: Icon}: ButtonProps) {
  return (
    <button className={styles.button}>
      {Icon && <Icon />}
      {children}
    </button>
  )
}
