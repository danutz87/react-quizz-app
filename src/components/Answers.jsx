import React, { Component } from 'react';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false,
      classNames: ['', '', '', '']
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  shouldComponentUpdate() {
    this.setState({
      classNames: ['', '', '', '']
    });
    return true;
  }

  checkAnswer(e) {
    const { isAnswered } = this.props;
    if (!isAnswered) {
      const elem = e.currentTarget;
      const { correct, increaseScore } = this.props;
      const answer = Number(elem.dataset.id);
      const updatedClassNames = this.state.classNames;

      if (answer === correct) {
        updatedClassNames[answer - 1] = 'right';
        increaseScore();
      } else {
        updatedClassNames[answer - 1] = 'wrong';
      }

      this.setState({
        classNames: updatedClassNames
      });
      this.props.showButton();
    }
  }

  render() {
    const { answers } = this.props;
    const { classNames } = this.state;
    const transition = {
      transitionName: "example",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300
    };

    return (
      <div id="answers">
        <ul>
          <li onClick={this.checkAnswer} className={classNames[0]} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
          <li onClick={this.checkAnswer} className={classNames[1]} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
          <li onClick={this.checkAnswer} className={classNames[2]} data-id="3"><span>C</span> <p>{answers[2]}</p></li>
          <li onClick={this.checkAnswer} className={classNames[3]} data-id="4"><span>D</span> <p>{answers[3]}</p></li>
        </ul>
      </div>
    );
  }
}

export default Answers;
