import React from 'react';
import ReactDOM from 'react-dom';
import ReactQuiz from './ReactQuiz';



describe("React Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ReactQuiz />, div);
  });
});
