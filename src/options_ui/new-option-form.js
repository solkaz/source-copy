import m from 'mithril';

export class NewOptionForm {
  view() {
    return m('form', [
      m('div.row.p-3', [
        m('div.col', [
          m('input.form-control', { type: 'text', placeholder: 'Name' }),
        ]),
        m('div.col', [
          m('input.form-control', { type: 'text', placeholder: 'Pattern' }),
        ]),
        m('div.col', [
          m('div.form-check.form-check-inline', [
            m('label.form-check-label', [
              m('input.form-check-input', { type: 'checkbox' }),
              'Enabled',
            ]),
          ]),
        ]),
        m('div.col', [
          m('input.form-control', { type: 'text', placeholder: 'Selector (Optional)' }),
        ]),
      ]),
    ]);
  }
}
