import VueI18n from 'vue-i18n';
import messages from '~/src/locale/index';
import vuetify from '../helpers/config.helper';     


export function initializeObjects () {
    return {
        i18n: new VueI18n({messages}),
        vuetify
    }
}