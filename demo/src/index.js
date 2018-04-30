import './setUp';

import { startApp, start } from '../..';

window.removeEventListener('load', start);
window.addEventListener('load', startApp);
