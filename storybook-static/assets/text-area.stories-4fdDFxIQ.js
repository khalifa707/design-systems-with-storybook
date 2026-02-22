import { j as r } from './jsx-runtime-X2b_N9AH.js';
import { c as o } from './clsx-B-dksMZM.js';
import { r as i } from './index-uCp2LrAq.js';
import './_commonjsHelpers-BosuxZz1.js';
const u = (e) => (typeof e != 'string' ? 0 : e.length),
  m = (e, t) => (typeof e != 'string' || !t ? !1 : e.length > t),
  c = ({ label: e, required: t, maxLength: s, ...n }) => {
    const [a, f] = i.useState(n.value ?? ''),
      l = i.useMemo(() => m(a, s), [a, s]),
      g = i.useMemo(() => u(a), [a]);
    return (
      console.log({ label: e, required: t, maxLength: s, value: a, ...n }),
      r.jsxs('label', {
        className: 'flex flex-col gap-1.5',
        children: [
          r.jsx('span', {
            className: o(
              'inline-flex items-center gap-1 text-sm font-medium',
              t && 'after:bg-accent-500 after:h-1.5 after:w-1.5 after:rounded-full',
            ),
            children: e,
          }),
          r.jsx('textarea', {
            className: o(
              'invalid:bg-danger-50 focus:bg-primary-50 focus:ring-primary-600 w-full gap-2 rounded-md bg-transparent bg-white p-4 text-sm placeholder-slate-400 shadow-sm ring-1 ring-inset ring-slate-500 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-800 dark:placeholder-slate-300',
              l && 'ring-danger-500 dark:ring-danger-500 ring-2',
            ),
            ...n,
            onChange: (d) => {
              f(d.target.value), typeof n.onChange == 'function' && n.onChange(d);
            },
            value: a,
            required: t,
            'aria-invalid': l,
          }),
          s &&
            r.jsx('div', {
              className: 'gap-1.4 flex justify-end text-xs',
              children: r.jsxs('p', {
                className: o(l ? 'text-danger-500' : 'text-slate-600'),
                children: [r.jsx('span', { 'data-testid': 'length', children: g }), '/', s],
              }),
            }),
        ],
      })
    );
  };
c.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TextArea',
  props: { label: { required: !0, tsType: { name: 'string' }, description: '' } },
};
const y = {
    title: 'Components/TextArea',
    component: c,
    args: {
      label: 'Text Area Label',
      placeholder: 'Enter some text here…',
      disabled: !1,
      required: !1,
    },
    argTypes: {
      label: { name: 'Label', control: 'text', description: 'Label of the text area' },
      placeholder: {
        name: 'Placeholder',
        control: 'text',
        description: 'Placeholder text of the text area',
      },
      disabled: {
        name: 'Disabled',
        control: 'boolean',
        description: 'Disables the text area',
        table: { defaultValue: { summary: !1 } },
      },
      required: {
        name: 'Required',
        control: 'boolean',
        description: 'Marks the text area as required',
        table: { defaultValue: { summary: !1 } },
      },
    },
  },
  j = [];
export { j as __namedExportsOrder, y as default };
