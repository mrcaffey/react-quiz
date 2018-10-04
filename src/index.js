import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
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

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ''
  };
}

function reducer(state = { authors, turnData: getTurnData(authors), highlight: ''},
action) {
  switch (action.type) {
    case 'ANSWER_SELECTED'
      const isCorrect = state.turnData.author.books.some((book) => book === action;
      return Object.assign(
        {}, 
        state, {
           highlight: isCorrect ? 'correct' : 'wrong'
          });
  }
  return state;
}

let store = Redux.createStore(reducer);
let state = resetState();

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function App() {
return <ReactRedux.Provider store={store}>
<ReactQuiz/>
</ReactRedux.Provider>;
}

const AuthorWrapper = withRouter(({ history}) =>
  <AddAuthorForm onAddAuthor={(author) => {
    authors.push(author);
    history.push('/');
  }}/>
);

function render() {
  ReactDOM.render(
  <BrowserRouter>
  <React.Fragment>
  <Route exact path="/" component={App} />
  <Route path="/add" component={AuthorWrapper} />
  </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));
}
render();
registerServiceWorker();