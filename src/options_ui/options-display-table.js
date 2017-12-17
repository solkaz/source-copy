import m from 'mithril';

import { fetchUserOptions } from './util';

export const OptionsDisplayTableHeader = () => ({
  view() {
    return m('thead', [
      m('tr', [
        m('th', 'Name'),
        m('th', 'Pattern'),
        m('th', 'Enabled'),
        m('th', 'Selector (Optional)'),
      ]),
    ]);
  },
});

export class OptionsDisplayTableBody {
  constructor(vnode) {
    this.options = vnode.attrs.options;
  }

  view() {
    return m(
      'tbody',
      this.options.map(option => {
	      return m(OptionsDisplayTableRow, { option, key: option.name });
      })
    );
  }
}

export class OptionsDisplayTableRow {
  constructor(vnode) {
	  this.option = vnode.attrs.option;
  }

  view() {
	  const { name, pattern, enabled, selector } = this.option;

    return m('tr', [
      m('td', name),
	    m('td', m('pre', pattern.toString())),
      m('td', enabled),
      m('td', selector),
    ]);
  }
}

export class OptionsDisplayTable {
  constructor(vnode) {
    this.options = fetchUserOptions();
  }

  view(vnode) {
    const { options } = this;
    return m('table.table.table-bordered', [
      m(OptionsDisplayTableHeader),
      m(OptionsDisplayTableBody, { options }),
    ]);
  }
}
