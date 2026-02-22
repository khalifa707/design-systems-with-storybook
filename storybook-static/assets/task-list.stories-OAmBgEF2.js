import { j as a } from './jsx-runtime-X2b_N9AH.js';
import { r as s } from './index-uCp2LrAq.js';
import { B as h } from './button-C8H0ZFJw.js';
import { I as g } from './input-DAB-cy79.js';
import { c as b } from './clsx-B-dksMZM.js';
import './_commonjsHelpers-BosuxZz1.js';
import './index-Bb4qSo10.js';
const m = ({ label: r, className: n, ...l }) =>
  a.jsxs('label', {
    className: b(
      'inline-flex cursor-pointer select-none items-center gap-1.5',
      l.disabled && 'cursor-not-allowed opacity-50',
      n,
    ),
    children: [
      a.jsx('input', { type: 'checkbox', className: 'peer sr-only', ...l }),
      a.jsx('div', {
        className:
          "peer-checked:border-primary-800 peer-checked:bg-primary-600 peer-focus:ring-primary-500 dark:peer-checked:bg-primary-600 relative h-4 w-4 min-w-4 rounded border border-slate-500 bg-slate-50 shadow-sm after:absolute after:left-0.5 after:top-0 after:text-xs after:text-white after:drop-shadow-sm peer-checked:after:content-['✔'] peer-focus:ring-1 peer-focus:ring-offset-2 dark:bg-slate-700 dark:ring-offset-slate-800",
      }),
      a.jsx('span', { className: 'text-sm font-medium', children: r }),
    ],
  });
m.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Checkbox',
  props: { label: { required: !0, tsType: { name: 'string' }, description: '' } },
};
const w = s.createContext(void 0);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var M = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j = (r) => r.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e = (r, n) => {
  const l = s.forwardRef(
    (
      {
        color: i = 'currentColor',
        size: c = 24,
        strokeWidth: o = 2,
        absoluteStrokeWidth: d,
        className: p = '',
        children: t,
        ...u
      },
      x,
    ) =>
      s.createElement(
        'svg',
        {
          ref: x,
          ...M,
          width: c,
          height: c,
          stroke: i,
          strokeWidth: d ? (Number(o) * 24) / Number(c) : o,
          className: ['lucide', `lucide-${j(r)}`, p].join(' '),
          ...u,
        },
        [...n.map(([v, f]) => s.createElement(v, f)), ...(Array.isArray(t) ? t : [t])],
      ),
  );
  return (l.displayName = `${r}`), l;
};
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C = e('Bug', [
  ['path', { d: 'm8 2 1.88 1.88', key: 'fmnt4t' }],
  ['path', { d: 'M14.12 3.88 16 2', key: 'qol33r' }],
  ['path', { d: 'M9 7.13v-1a3.003 3.003 0 1 1 6 0v1', key: 'd7y7pr' }],
  [
    'path',
    {
      d: 'M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6',
      key: 'xs1cw7',
    },
  ],
  ['path', { d: 'M12 20v-9', key: '1qisl0' }],
  ['path', { d: 'M6.53 9C4.6 8.8 3 7.1 3 5', key: '32zzws' }],
  ['path', { d: 'M6 13H2', key: '82j7cp' }],
  ['path', { d: 'M3 21c0-2.1 1.7-3.9 3.8-4', key: '4p0ekp' }],
  ['path', { d: 'M20.97 5c0 2.1-1.6 3.8-3.5 4', key: '18gb23' }],
  ['path', { d: 'M22 13h-4', key: '1jl80f' }],
  ['path', { d: 'M17.2 17c2.1.1 3.8 1.9 3.8 4', key: 'k3fwyw' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N = e('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q = e('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A = e('CircleCheck', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L = e('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T = e('Clipboard', [
  ['rect', { width: '8', height: '4', x: '8', y: '2', rx: '1', ry: '1', key: 'tgr4d6' }],
  [
    'path',
    {
      d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
      key: '116196',
    },
  ],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z = e('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = e('Flame', [
  [
    'path',
    {
      d: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
      key: '96xj49',
    },
  ],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H = e('Hash', [
  ['line', { x1: '4', x2: '20', y1: '9', y2: '9', key: '4lhtct' }],
  ['line', { x1: '4', x2: '20', y1: '15', y2: '15', key: 'vyu0kd' }],
  ['line', { x1: '10', x2: '8', y1: '3', y2: '21', key: '1ggp8o' }],
  ['line', { x1: '16', x2: '14', y1: '3', y2: '21', key: 'weycgp' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = e('Heart', [
  [
    'path',
    {
      d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
      key: 'c3ymky',
    },
  ],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E = e('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V = e('Link', [
  ['path', { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', key: '1cjeqo' }],
  ['path', { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71', key: '19qd67' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S = e('List', [
  ['line', { x1: '8', x2: '21', y1: '6', y2: '6', key: '7ey8pc' }],
  ['line', { x1: '8', x2: '21', y1: '12', y2: '12', key: 'rjfblc' }],
  ['line', { x1: '8', x2: '21', y1: '18', y2: '18', key: 'c3b1m8' }],
  ['line', { x1: '3', x2: '3.01', y1: '6', y2: '6', key: '1g7gq3' }],
  ['line', { x1: '3', x2: '3.01', y1: '12', y2: '12', key: '1pjlvk' }],
  ['line', { x1: '3', x2: '3.01', y1: '18', y2: '18', key: '28t2mc' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B = e('Pencil', [
  ['path', { d: 'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z', key: '5qss01' }],
  ['path', { d: 'm15 5 4 4', key: '1mk7zo' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z = e('Plus', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'M12 5v14', key: 's699le' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P = e('Quote', [
  [
    'path',
    {
      d: 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z',
      key: '4rm80e',
    },
  ],
  [
    'path',
    {
      d: 'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z',
      key: '10za9r',
    },
  ],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $ = e('Skull', [
  ['circle', { cx: '9', cy: '12', r: '1', key: '1vctgf' }],
  ['circle', { cx: '15', cy: '12', r: '1', key: '1tmaij' }],
  ['path', { d: 'M8 20v2h8v-2', key: 'ded4og' }],
  ['path', { d: 'm12.5 17-.5-1-.5 1h1z', key: '3me087' }],
  ['path', { d: 'M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20', key: 'xq9p5u' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D = e('Star', [
  [
    'polygon',
    {
      points:
        '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
      key: '8f66p6',
    },
  ],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F = e('TriangleAlert', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
      key: 'wmoenq',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q = e('X', [
  ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
  ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R = e('Zap', [
    [
      'path',
      {
        d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
        key: '1xq2db',
      },
    ],
  ]),
  X = {
    bug: C,
    check: N,
    chevron: q,
    clipboard: T,
    external: z,
    flame: I,
    hash: H,
    heart: _,
    help: L,
    info: E,
    link: V,
    list: S,
    pencil: B,
    plus: Z,
    quote: P,
    skull: $,
    star: D,
    success: A,
    warning: F,
    x: Q,
    zap: R,
  },
  y = ({ type: r, ...n }) => {
    const l = X[r];
    return a.jsx(l, { ...n });
  };
y.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Icon',
  props: {
    type: {
      required: !0,
      tsType: {
        name: 'union',
        raw: `| 'bug'\r
| 'check'\r
| 'chevron'\r
| 'clipboard'\r
| 'external'\r
| 'flame'\r
| 'hash'\r
| 'heart'\r
| 'help'\r
| 'info'\r
| 'link'\r
| 'list'\r
| 'pencil'\r
| 'plus'\r
| 'quote'\r
| 'skull'\r
| 'star'\r
| 'success'\r
| 'warning'\r
| 'x'\r
| 'zap'`,
        elements: [
          { name: 'literal', value: "'bug'" },
          { name: 'literal', value: "'check'" },
          { name: 'literal', value: "'chevron'" },
          { name: 'literal', value: "'clipboard'" },
          { name: 'literal', value: "'external'" },
          { name: 'literal', value: "'flame'" },
          { name: 'literal', value: "'hash'" },
          { name: 'literal', value: "'heart'" },
          { name: 'literal', value: "'help'" },
          { name: 'literal', value: "'info'" },
          { name: 'literal', value: "'link'" },
          { name: 'literal', value: "'list'" },
          { name: 'literal', value: "'pencil'" },
          { name: 'literal', value: "'plus'" },
          { name: 'literal', value: "'quote'" },
          { name: 'literal', value: "'skull'" },
          { name: 'literal', value: "'star'" },
          { name: 'literal', value: "'success'" },
          { name: 'literal', value: "'warning'" },
          { name: 'literal', value: "'x'" },
          { name: 'literal', value: "'zap'" },
        ],
      },
      description: '',
    },
  },
};
const k = () => {
  const [r, n] = s.useState(''),
    {
      tasks: l,
      addTask: i,
      toggleTask: c,
      removeTask: o,
      total: d,
      incomplete: p,
    } = s.useContext(w);
  return a.jsxs('main', {
    className: 'space-y-8',
    children: [
      a.jsxs('form', {
        className: 'space-y-4',
        onSubmit: (t) => {
          t.preventDefault(), i(r);
        },
        children: [
          a.jsx(g, {
            label: 'Add a task',
            placeholder: 'New Task',
            value: r,
            onChange: (t) => n(t.target.value),
          }),
          a.jsxs('div', {
            className: 'flex justify-end gap-2',
            children: [
              a.jsx(h, { disabled: !r, children: 'Add Task' }),
              a.jsx(h, { variant: 'secondary', onClick: () => n(''), children: 'Clear' }),
            ],
          }),
        ],
      }),
      a.jsx('div', {
        className: 'flex flex-col rounded-md bg-slate-50 shadow-md dark:bg-slate-800',
        children: l.map((t) =>
          a.jsxs('div', {
            className:
              'flex items-center gap-2 border-b border-slate-200 px-4 py-2 last:border-b-0 dark:border-slate-800',
            children: [
              a.jsx(
                m,
                {
                  label: t.title,
                  checked: t.completed,
                  onChange: () => c(t.id),
                  className:
                    'w-full rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-700',
                },
                t.id,
              ),
              a.jsx(h, {
                variant: 'destructive',
                size: 'small',
                onClick: () => o(t.id),
                children: a.jsx(y, { type: 'x' }),
              }),
            ],
          }),
        ),
      }),
      a.jsxs('p', {
        className: "text-right font-semibold after:font-normal after:content-['_tasks_remaning']",
        children: [
          a.jsx('span', { 'data-testid': 'incomplete', children: p }),
          '/',
          a.jsx('span', { 'data-testid': 'total', children: d }),
        ],
      }),
    ],
  });
};
k.__docgenInfo = { description: '', methods: [], displayName: 'TaskList' };
const ee = { title: 'Components/TaskList', component: k },
  ae = [];
export { ae as __namedExportsOrder, ee as default };
