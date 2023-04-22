import VInput from './VInput.vue';
import VButton from './VButton.vue';

const components = [
    { name: 'VInput', component: VInput },
    { name: 'VButton', component: VButton },
];

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component);
        })
    }
}