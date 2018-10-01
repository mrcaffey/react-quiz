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

  describe("When the correct answer has been", ()=>{
    let wrapper;
    beforeAll(()=> {
    wrapper = mount(<ReactQuiz {...state} onAnswerSelected={()=> {}}/>);
    });

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('fuschia');
  });


  describe('When the wrong answer has been selected', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
      <AuthorQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={()=>{ }} />, div);
 });

    it('should have a red background color', () => {
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('red');
  });
});

    describe("When the first answer is selected")
      let wrapper;
      const handleAnswerSelected = jest.fn();

      beforeAll(()=>{
        wrapper = mount(
        <ReactQuiz {...state} onAnswerSelected={handleAnswerSelected} />);
      wrapper.find('.answer').first().simulate('click');
    });

    it("onAnswerSelected should be called", ()=>{
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should receive The Shining", ()=>{
      expect(handleAnswerSelected).toHaveBeenCalled("The Shining")
    });
  });
});