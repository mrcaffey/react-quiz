import React from 'react';
import ReactDOM from 'react-dom';
import ReactQuiz from './ReactQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet' ],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikipedia',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
  },
  highlight: 'none'
}

describe("React Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ReactQuiz {...state} onAnswerSelected={()=>{ }} />, div);
  });

  describe("When no answer has been selected", ()=>{
    let wrapper;
    beforeAll(()=> {
    wrapper = mount(<ReactQuiz {...state} onAnswerSelected={()=> {}}/>);
    });
  });
});
