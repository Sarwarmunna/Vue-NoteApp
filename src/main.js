import { createApp } from 'vue';
import App from './App.vue';
import Noteapp from './Noteapp.vue';
import './assets/style.css';
import store from './store';

const app = createApp(Noteapp);

app.use(store)


app.mount('#app');
