import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')



document.querySelector("body").insertAdjacentHTML("afterbegin", `<div id="loading">
<img src="../src/assets/loader.gif">
</div>`);