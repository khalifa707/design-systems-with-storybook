import { j as t } from './jsx-runtime-X2b_N9AH.js';
import { useMDXComponents as s } from './index-CRbi4mQH.js';
import './button-C8H0ZFJw.js';
import { M as e, T as i, P as m, C as a } from './index-LP3i1jdM.js';
import { B as p } from './button.stories-DgpIl_sL.js';
import './index-uCp2LrAq.js';
import './_commonjsHelpers-BosuxZz1.js';
import './index-Bb4qSo10.js';
import './iframe-D2wSyy0Y.js';
import '../sb-preview/runtime.js';
import './index-BOkhicXD.js';
import './index-DXimoRZY.js';
import './index-B8K4vdXH.js';
import './index-DrFu-skq.js';
function r(o) {
  const n = { h2: 'h2', p: 'p', ...s(), ...o.components };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(e, { of: p }),
      `
`,
      t.jsx(i, { children: 'Button' }),
      `
`,
      t.jsx(n.p, { children: 'A button is a thing that you press in order to make stuff happen.' }),
      `
`,
      t.jsx(m, {}),
      `
`,
      t.jsx(n.h2, { id: 'controls', children: 'Controls' }),
      `
`,
      t.jsx(n.p, { children: 'Buttons have lots of little things that you can tweak about them.' }),
      `
`,
      t.jsx(a, {}),
    ],
  });
}
function X(o = {}) {
  const { wrapper: n } = { ...s(), ...o.components };
  return n ? t.jsx(n, { ...o, children: t.jsx(r, { ...o }) }) : r(o);
}
export { X as default };
