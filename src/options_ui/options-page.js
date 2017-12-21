import m from 'mithril';

import { OptionsDisplayTable } from './options-display-table';
import { NewOptionForm } from './new-option-form';
import { OptionsMenu } from './options-menu';
import { fetchUserOptions } from './util';

export class OptionsPage {
  oninit(vnode) {
    vnode.state.options = fetchUserOptions();
  }

  view(vnode) {
    const { options } = vnode.state;
    const addOption = newOption => options.push(newOption);
	  const deleteOption = (index) => options.splice(index, 1);

    return m('div.p-3', [
      m(OptionsMenu),
	    m(NewOptionForm, { addOption }),
	    m(OptionsDisplayTable, { deleteOption, options }),
    ]);
  }
}
