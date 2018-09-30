import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactQuiz from './ReactQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle} from 'underscore';


const authors = [
  {
    name: 'David Benioff',
    imageUrl: 'images/authors/davidbenioff.jpg',
    imageSource: 'Wikipedia',
    books: ['City of Thieves',
            'The 25th Hour',
            'When the Nines Roll Over'
          ]
  },
  {
    name: 'Leo Tolstoy',
    imageUrl: 'images/authors/tolstoy.jpg',
    imageSource: 'Google',
    books: ['War and Peace',
            'The Death of Ivan Ilyich',
            'Anna Karenina'
  ]
},
{
    name: 'Isaac Asimov',
    imageUrl: 'images/authors/asimov_isaac.jpg',
    imageSource: 'The Olympians',
    books: [ 'The Foundation Trilogy',
             'The Stars, Like Dust',
             'Fantasic Voyage'
]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p,c, i) {
    return p.concat(c.books);
  }, []);
}

const state =  {
  turnData: getTurnData(authors)
};

ReactDOM.render(<ReactQuiz {...state} />, document.getElementById('root'));
registerServiceWorker();
