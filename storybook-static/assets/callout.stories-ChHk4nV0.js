import { j as t } from './jsx-runtime-X2b_N9AH.js';
import { c as C } from './index-Bb4qSo10.js';
import './index-uCp2LrAq.js';
import './_commonjsHelpers-BosuxZz1.js';
const I = C(['p-4', 'rounded-2xl', 'border', 'shadow-md', 'space-y-4'], {
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
    defaultVariants: { variant: 'primary' },
  }),
  w = ({ children: h, title: S, variant: j }) =>
    t.jsxs('div', {
      className: I({ variant: j }),
      children: [t.jsx('h2', { children: S }), t.jsx('p', { children: h })],
    });
w.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Callout',
  props: { title: { required: !0, tsType: { name: 'string' }, description: '' } },
};
const N = {
    title: 'Components/Callout',
    component: w,
    args: { title: 'An Important Message', children: 'This is a message that you should read.' },
    argTypes: {
      variant: {
        control: 'select',
        options: ['primary', 'information', 'success', 'warning', 'danger'],
      },
    },
  },
  r = { args: { variant: 'primary' } },
  a = { args: { variant: 'information' } },
  s = { args: { variant: 'success' } },
  e = { args: { variant: 'warning' } },
  n = { args: { variant: 'danger' } };
var o, i, c;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'primary'
  }
}`,
      ...((c = (i = r.parameters) == null ? void 0 : i.docs) == null ? void 0 : c.source),
    },
  },
};
var m, d, g;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((m = a.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'information'
  }
}`,
      ...((g = (d = a.parameters) == null ? void 0 : d.docs) == null ? void 0 : g.source),
    },
  },
};
var p, u, l;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((p = s.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'success'
  }
}`,
      ...((l = (u = s.parameters) == null ? void 0 : u.docs) == null ? void 0 : l.source),
    },
  },
};
var x, v, y;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((x = e.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'warning'
  }
}`,
      ...((y = (v = e.parameters) == null ? void 0 : v.docs) == null ? void 0 : y.source),
    },
  },
};
var b, f, k;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((b = n.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'danger'
  }
}`,
      ...((k = (f = n.parameters) == null ? void 0 : f.docs) == null ? void 0 : k.source),
    },
  },
};
const P = ['Primary', 'Information', 'Success', 'Warning', 'Danger'];
export {
  n as Danger,
  a as Information,
  r as Primary,
  s as Success,
  e as Warning,
  P as __namedExportsOrder,
  N as default,
};
