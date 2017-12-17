import m from 'mithril';

import { OptionsDisplayTable } from './options-display-table';
import { OptionsMenu } from './options-menu';

export class OptionsPage {
	view() {
		return m('div', [
			m(OptionsMenu),
			m(OptionsDisplayTable)
		])
	}
}
