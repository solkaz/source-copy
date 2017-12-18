import m from 'mithril';

import { OptionsDisplayTable } from './options-display-table';
import { NewOptionForm } from './new-option-form';
import { OptionsMenu } from './options-menu';

export class OptionsPage {
	view() {
		return m('div', [
			m(OptionsMenu),
			m(NewOptionForm),
			m(OptionsDisplayTable)
		])
	}
}
