import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import ReactQuiz from './ReactQuiz';
import AddAuthorForm from './AddAuthorForm';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';


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
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
        author.books.some((title) => 
          title === answer))
  }
}

const state =  {
  turnData: getTurnData(authors),
  highlight: ''
};

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function AddAuthorForm({match}) {
  return <div>
    <h1>Add Author</h1>
    <p>{JSON.stringify(match)}</p>
    </div>;
}

function App() {
return <ReactQuiz {...state} onAnswerSelected={onAnswerSelected} />;
}

function render() {
  ReactDOM.render(
  <BrowserRouter>
  <React.Fragment>
  <Route exact path="/" component={App} />
  <Route path="/add" component={AddAuthorForm} />
  </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));
}
render();
registerServiceWorker();