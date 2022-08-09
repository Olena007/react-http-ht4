import ReactDOM from 'react-dom/client';
import './index.css';
import AppComponent from './AppComponent';
import reportWebVitals from './reportWebVitals';

console.log('Our application is started in index.tsx file.')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <AppComponent />
  // </React.StrictMode>
);

console.log("Rendered index.tsx");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
