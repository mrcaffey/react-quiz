import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactQuiz from './ReactQuiz';
import registerServiceWorker from './registerServiceWorker';


const authors = [
  {
    name: 'David Benioff',
    imageUrl: 'images/authors/davidbenioff.jpeg',
    imageSource: 'Wikipedia',
    books: ['City of Thieves',
            'The 25th Hour',
            'When the Nines Roll Over'
          ]
  }
];

const state =  {
  turnData: {
    author: authors[0],
    books: authors[0].books
  }
};

ReactDOM.render(<ReactQuiz {...state} />, document.getElementById('root'));
registerServiceWorker();
