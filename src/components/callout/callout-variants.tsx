import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['p-4', 'rounded-2xl', 'border', 'shadow-md', 'space-y-4'], {
  variants: {
    variant: {
      primary: [
        'bg-primary-50',
        'text-primary-600',
        'border-primary-500',
        'dark:bg-primary-800',
        'dark:text-primary-300',
      ],
      information: [
        'bg-information-50',
        'text-information-600',
        'border-information-400',
        'dark:bg-information-800',
        'dark:text-information-300',
      ],
      success: [
        'bg-success-50',
        'text-success-700',
        'border-success-600',
        'dark:bg-success-800',
        'dark:text-success-300',
      ],
      warning: [
        'bg-warning-50',
        'text-warning-800',
        'border-warning-600',
        'dark:bg-warning-800',
        'dark:text-warning-300',
      ],
      danger: [
        'bg-danger-50',
        'text-danger-700',
        'border-danger-400',
        'dark:bg-danger-800',
        'dark:text-danger-300',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type CalloutVariant = VariantProps<typeof variants>;
