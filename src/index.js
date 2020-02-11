import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';

// const App2 = React.lazy(()=>import ('./App2'));
// ReactDOM.render(<Suspense fallback={<div>Loading...</div>}><App2 /></Suspense>, document.getElementById('root'));
ReactDOM.render(  <App2 />, document.getElementById('root'));
