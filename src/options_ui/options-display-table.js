import m from 'mithril';

export const OptionsDisplayTableHeader = () => ({
  view() {
    return m('thead', [
      m('tr', [
        m('th', 'Name'),
        m('th', 'Pattern'),
        m('th', 'Selector'),
        m('th', 'Enabled'),
      ]),
    ]);
  },
});

export class OptionsDisplayTableBody {
  view(vnode) {
    return m(
      'tbody',
      vnode.attrs.options.map(option => {
        return m(OptionsDisplayTableRow, {
          option,
          key: option.name,
          onEnabledChange: () => {
            option.enabled = !option.enabled;
          },
        });
      })
    );
  }
}

export class OptionsDisplayTableRow {
  view(vnode) {
    const {
      option: { name, pattern, enabled, selector },
      onEnabledChange,
    } = vnode.attrs;

    return m('tr', [
      m('td', name),
      m('td', m('pre', pattern.toString())),
      m('td', selector),
      m(
        'td',
        m('label.form-check-label', [
          m('input.form-check-input', {
            type: 'checkbox',
            checked: enabled,
            onchange: onEnabledChange,
          }),
          'Enabled',
        ])
      ),
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
