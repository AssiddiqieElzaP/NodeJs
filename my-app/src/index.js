import React from 'react';
import ReactDOM from 'react-dom';
// import App from './ReactjsDasar/App';
// import Variable from './ReactjsDasar/Variable'
// import StateProps from './ReactjsDasar/StateProps'
// import Map from './ReactjsDasar/Map'
// import Lifecycle from './ReactjsDasar/Lifecycle'

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);
