import m from 'mithril';

export const validateForm = ({ name, pattern }) => Boolean(name && pattern);

export const Col = el => m('div.col', [el]);

export class NewOptionForm {
  oninit(vnode) {
    vnode.state.newOption = {
      name: '',
      pattern: '',
      selector: '',
      enabled: true,
    };
  }

  view(vnode) {
    const { name, pattern, selector, enabled } = vnode.state.newOption;

    return m(
      'form',
      {
        onsubmit: event => event.preventDefault(),
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
              oninput: m.withAttr('value', pattern => {
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
