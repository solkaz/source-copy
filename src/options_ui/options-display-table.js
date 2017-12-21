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
    const { deleteOption, options } = vnode.attrs;
    return m(
      'tbody',
      options.map((option, index) => {
        return m(OptionsDisplayTableRow, {
          option,
          key: option.name,
          onEnabledChange: () => {
            option.enabled = !option.enabled;
          },
          onDelete: () => deleteOption(index),
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
      onDelete,
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
      m('td', [
        m(
          'button.btn.btn-danger',
          { type: 'button', onclick: onDelete },
          'Delete'
        ),
      ]),
    ]);
  }
}

export class OptionsDisplayTable {
  view(vnode) {
    const { deleteOption, options } = vnode.attrs;
    return m('table.table.table-bordered', [
      m(OptionsDisplayTableHeader),
      m(OptionsDisplayTableBody, { deleteOption, options }),
    ]);
  }
}
