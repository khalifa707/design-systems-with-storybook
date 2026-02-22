import { j as e } from './jsx-runtime-X2b_N9AH.js';
import { c as d } from './clsx-B-dksMZM.js';
const p = ({
  label: a,
  value: r,
  details: s,
  placeholder: n,
  required: l = !1,
  unlabeled: t = !1,
  disabled: o = !1,
  ...i
}) =>
  e.jsxs('label', {
    className: 'flex flex-col gap-1.5',
    children: [
      e.jsx('span', {
        className: d(
          'inline-flex items-center gap-1 text-sm font-medium',
          l && 'after:bg-accent-500 after:h-1.5 after:w-1.5 after:rounded-full',
          t && 'sr-only',
        ),
        children: a,
      }),
      e.jsx('input', {
        value: r,
        className:
          'focus:bg-primary-50 focus:ring-primary-600 block w-full gap-2 rounded-md bg-transparent bg-white px-3 py-1 text-sm placeholder-slate-400 shadow shadow-sm ring-1 ring-inset ring-slate-500 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-800 dark:placeholder-slate-300',
        placeholder: t ? a : n,
        disabled: o,
        required: l,
        ...i,
      }),
      s && e.jsx('span', { className: 'text-xs text-slate-500', children: s }),
    ],
  });
p.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Input',
  props: {
    label: { required: !0, tsType: { name: 'string' }, description: '' },
    details: { required: !1, tsType: { name: 'string' }, description: '' },
    required: {
      required: !1,
      tsType: { name: 'boolean' },
      description: '',
      defaultValue: { value: 'false', computed: !1 },
    },
    unlabeled: {
      required: !1,
      tsType: { name: 'boolean' },
      description: '',
      defaultValue: { value: 'false', computed: !1 },
    },
    disabled: {
      required: !1,
      tsType: { name: 'boolean' },
      description: '',
      defaultValue: { value: 'false', computed: !1 },
    },
  },
};
export { p as I };
