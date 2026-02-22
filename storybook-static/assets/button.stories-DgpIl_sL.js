import { B as l } from './button-C8H0ZFJw.js';
const p = {
    title: 'Components/Button',
    component: l,
    args: { children: 'Button', size: 'medium', disabled: !1 },
    argTypes: {
      disabled: { control: 'boolean' },
      variant: { control: 'select', options: ['primary', 'secondary', 'destructive'] },
      size: { control: 'radio', options: ['small', 'medium', 'large'] },
    },
  },
  r = { args: { children: 'Button', variant: 'primary' } },
  e = { args: { children: 'Button', variant: 'secondary' } },
  t = { args: { children: 'Button', variant: 'destructive' } };
var a, o, n;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((a = r.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,
      ...((n = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : n.source),
    },
  },
};
var s, c, i;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((s = e.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}`,
      ...((i = (c = e.parameters) == null ? void 0 : c.docs) == null ? void 0 : i.source),
    },
  },
};
var d, u, m;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((d = t.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    children: 'Button',
    variant: 'destructive'
  }
}`,
      ...((m = (u = t.parameters) == null ? void 0 : u.docs) == null ? void 0 : m.source),
    },
  },
};
const g = ['Primary', 'Secondary', 'Destructive'],
  y = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Destructive: t,
        Primary: r,
        Secondary: e,
        __namedExportsOrder: g,
        default: p,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { y as B };
