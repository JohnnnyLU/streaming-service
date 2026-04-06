import type { ComponentType, SVGProps } from 'react';
import styles from "./Button.module.scss";
import {Link} from "react-router-dom";
import clsx from "clsx";

type ButtonProps = {
  children: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  variant?: 'primary' | 'secondary' | 'link';
  to?: string;
}

export function Button({children, icon: Icon, variant = 'primary', to}: ButtonProps) {
  const className = clsx(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
  })

  if (to) {
    return (
      <Link to={to} className={className}>
        {Icon && <Icon />}
        {children}
      </Link>
    );
  }

  if (variant === 'secondary') {
    return (
      <button className={className} type="button">
        {Icon && <Icon />}
        {children}
      </button>
    )
  }

  return (
    <button className={className} type="button">
      {Icon && <Icon />}
      {children}
    </button>
  )
}
