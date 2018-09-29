import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactQuiz from './ReactQuiz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactQuiz />, document.getElementById('root'));
registerServiceWorker();
