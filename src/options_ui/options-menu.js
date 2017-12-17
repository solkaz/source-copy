import m from 'mithril';

export class OptionsMenu {
	view() {
		return m('div.w-100.p-3', [
			m('div.btn-group', { role: 'group' }, [
				m('button.btn.btn-secondary', { type: 'button' }, 'Import'),
				m('button.btn.btn-secondary', { type: 'button' }, 'Export')
			])
		])
	}
}
