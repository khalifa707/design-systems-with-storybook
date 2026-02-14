import { type ComponentProps } from 'react';

import { variants, type ButtonVariant } from './button-variant';

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariant & {
    variant?: 'primary' | 'secondary' | 'destructive';
    size?: 'small' | 'medium' | 'large';
  };

export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return <button {...props} className={variants({ variant, size })} />;
};
