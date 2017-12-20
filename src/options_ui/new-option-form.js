import m from 'mithril';

export const validateForm = ({ name, pattern }) => Boolean(name && pattern);

export const Col = el => m('div.col', [el]);

class Option {
  constructor() {
    this.name = '';
    this.pattern = '';
    this.selector = '';
    this.enabled = true;
  }
}

export class NewOptionForm {
  oninit(vnode) {
    vnode.state.newOption = new Option();
  }

  view(vnode) {
    const { addOption } = vnode.attrs;
    const { name, pattern, selector, enabled } = vnode.state.newOption;

    return m(
      'form',
      {
        onsubmit: event => {
          event.preventDefault();
          addOption(vnode.state.newOption);
          vnode.state.newOption = new Option();
        },
      },
      [
        m('div.row.p-3', [
          Col(
            m('input.form-control', {
              type: 'text',
              placeholder: 'Name',
              value: name,
              oninput: m.withAttr('value', name => {
                vnode.state.newOption.name = name;
              }),
            })
          ),
          Col(
            m('input.form-control', {
              type: 'text',
              placeholder: 'Pattern',
              value: pattern,
              oninput: m.withAttr('value', pattern => {
                vnode.state.newOption.pattern = pattern;
              }),
            })
          ),
          Col(
            m('input.form-control', {
              type: 'text',
              placeholder: 'Selector (Optional)',
              value: selector,
              oninput: m.withAttr('value', selector => {
                vnode.state.newOption.selector = selector;
              }),
            })
          ),
          Col(
            m('div.form-check.form-check-inline', [
              m('label.form-check-label', [
                m('input.form-check-input', {
                  type: 'checkbox',
                  checked: enabled,
                  onchange: () => {
                    vnode.state.newOption.enabled = !enabled;
                  },
                }),
                'Enabled',
              ]),
            ])
          ),
          Col(
            m(
              'button.btn.btn-primary',
              { disabled: !validateForm(vnode.state.newOption) },
              '+'
            )
          ),
        ]),
      ]
    );
  }
}
