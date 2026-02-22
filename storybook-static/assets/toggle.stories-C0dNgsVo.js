import { j as e } from './jsx-runtime-X2b_N9AH.js';
import './index-uCp2LrAq.js';
import './_commonjsHelpers-BosuxZz1.js';
const t = ({ label: r, ...s }) =>
  e.jsxs('label', {
    className: 'inline-flex cursor-pointer items-center',
    children: [
      e.jsx('input', { type: 'checkbox', className: 'peer sr-only', ...s }),
      e.jsx('div', {
        className:
          "peer-checked:bg-primary-600 peer-focus:ring-primary-600 pointer-events-none relative h-6 w-11 rounded-full bg-slate-300 ring-offset-slate-50 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 dark:bg-slate-700 dark:ring-offset-slate-900",
      }),
      e.jsx('span', { className: 'ml-3 text-sm font-medium', children: r }),
    ],
  });
t.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Toggle',
  props: { label: { required: !0, tsType: { name: 'string' }, description: '' } },
};
const l = { title: 'Components/Toggle', component: t, args: { label: 'Toggle' } },
  i = [];
export { i as __namedExportsOrder, l as default };
