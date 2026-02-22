import { j as r } from './jsx-runtime-X2b_N9AH.js';
import { c as i } from './index-Bb4qSo10.js';
const s = i(
    [
      'font-semibold',
      'border',
      'rounded',
      'shadow-sm',
      'inline-flex',
      'items-center',
      'cursor-pointer',
      'gap-1.5',
      'focus-visible:outline',
      'focus-visible:outline-2',
      'focus-visible:outline-offset-2',
      'transition-colors',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:pointer-events-none',
    ],
    {
      variants: {
        variant: {
          primary: [
            'bg-primary-600',
            'text-white',
            'border-transparent',
            'hover:bg-primary-500',
            'active:bg-primary-400',
          ],
          secondary: [
            'bg-white',
            'text-slate-900',
            'border-slate-300',
            'hover:bg-slate-50',
            'active:bg-slate-100',
          ],
          destructive: [
            'bg-danger-600',
            'text-white',
            'border-transparent',
            'hover:bg-danger-500',
            'active:bg-danger-400',
          ],
        },
        size: {
          small: ['px-2.5', 'py-1.5', 'text-xs'],
          medium: ['px-3', 'py-2', 'text-sm'],
          large: ['px-4', 'py-2.5', 'text-base'],
        },
      },
      defaultVariants: { variant: 'secondary', size: 'medium' },
    },
  ),
  l = ({ variant: e = 'primary', size: a = 'medium', ...t }) =>
    r.jsx('button', { ...t, className: s({ variant: e, size: a }) });
l.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Button',
  props: {
    variant: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'secondary' | 'destructive'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'secondary'" },
          { name: 'literal', value: "'destructive'" },
        ],
      },
      description: '',
      defaultValue: { value: "'primary'", computed: !1 },
    },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'small' | 'medium' | 'large'",
        elements: [
          { name: 'literal', value: "'small'" },
          { name: 'literal', value: "'medium'" },
          { name: 'literal', value: "'large'" },
        ],
      },
      description: '',
      defaultValue: { value: "'medium'", computed: !1 },
    },
  },
};
export { l as B };
