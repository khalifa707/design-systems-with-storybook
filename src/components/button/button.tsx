import { type ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.secondary]: variant === 'secondary',
        [styles.destructive]: variant === 'destructive',
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
      })}
      {...props}
    />
  );
};
