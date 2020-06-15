import {showCats} from "./cats/index";
import {sliders} from "./sliding";

const app = document.getElementById('app');
app.innerHTML = '';

showCats(app);
sliders(app);