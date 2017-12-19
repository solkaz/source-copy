import m from 'mithril';

export const OptionsDisplayTableHeader = () => ({
  view() {
    return m('thead', [
      m('tr', [
        m('th', 'Name'),
        m('th', 'Pattern'),
        m('th', 'Enabled'),
        m('th', 'Selector'),
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
  view(vnode) {
    const { options } = vnode.attrs;
    return m('table.table.table-bordered', [
      m(OptionsDisplayTableHeader),
      m(OptionsDisplayTableBody, { options }),
    ]);
  }
}
