import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import preset from './vuetify/default-preset/preset'

Vue.use(Vuetify)

export default new Vuetify({
    preset,
    icons: {
        iconfont: 'mdiSvg',
    },
    theme: {
        options: {
            customProperties: true,
            variations: false,
        },
    },
})