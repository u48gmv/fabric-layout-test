
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import App from './App/App';
import Search from './Search/Search';
import HeaderContent from './HeaderContent/HeaderContent';

// import './index.css';
import './index.scss';
import 'office-ui-fabric-react/dist/css/fabric.min.css';




import { initializeIcons } from '@uifabric/icons';
initializeIcons();


ReactDOM.render(
  <Fabric>
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row app-header-area">
        <div className="ms-Grid-col ms-sm10 ms-md10 ms-lg10"><HeaderContent /></div>
        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2"><Search /></div>
      </div>
      <div className="ms-Grid-row app-main-area">
        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 app-left-hand">app-left-hand</div>
        <div className="ms-Grid-col ms-sm8 ms-md8 ms-lg8 app-middle">app-middle<App /></div>
        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 app-right">app-right</div>
      </div>
      <div className="ms-Grid-row app-footer-area">
        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">app-footer-area A</div>
        <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">app-footer-area B</div>
      </div>             
    </div>    
  </Fabric>,
  document.getElementById('root') as HTMLElement);
registerServiceWorker();
