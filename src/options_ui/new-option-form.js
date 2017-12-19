import m from 'mithril';

export const Col = (el) => m('div.col', [el])

export class NewOptionForm {
	oninit(vnode) {
		vnode.state.newOption = {
			name: '',
			pattern: '',
			selector: '',
			enabled: true
		};
	}

	view(vnode) {
		const {
			name,
			pattern,
			selector,
			enabled
		} = vnode.state.newOption;

    return m('form', [
      m('div.row.p-3', [
	      Col(m('input.form-control', { type: 'text', placeholder: 'Name', value: name})),
	      Col(m('input.form-control', { type: 'text', placeholder: 'Pattern', value: pattern })),
	      Col(m('input.form-control', { type: 'text', placeholder: 'Selector (Optional)', value: selector })),
	      Col(m('div.form-check.form-check-inline', [
            m('label.form-check-label', [
	            m('input.form-check-input', { type: 'checkbox', checked: enabled }),
              'Enabled',
            ]),
          ])),
	      Col(m('button.btn.btn-primary', { type: 'button' }, '+')),
      ]),
    ]);
  }
}
