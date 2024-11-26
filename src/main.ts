import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import ru from 'element-plus/es/locale/lang/ru'; // Импортируйте русскую локаль
import 'dayjs/locale/ru'; // Импортируйте русскую локаль для Day.js
import './assets/main.css';

const app = createApp(App);

// Настройка локализации для Element Plus
app.use(ElementPlus, {
    locale: {
        ...ru,
        datePicker: {
            firstDayOfWeek: 1, // Установите понедельник как первый день недели
        },
    },
});

// Установка Pinia для управления состоянием
app.use(createPinia());

app.mount('#app');