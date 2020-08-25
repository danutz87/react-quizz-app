import React, { Component } from "react";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 'start',
      title: 'Welcome to Quizz',
      text: 'This is a quiz application built using ReactJS. <br /><br /> Currently it\'s loaded with CSS questions from W3Scools, but you can easily load any type of questions into it. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.' ,
      buttonText: 'Start the quiz'
    };
    this.popupHandle = this.popupHandle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + '</strong> out of <strong>' +this.props.total +'</strong> questions right.'
    });
  }

  popupHandle() {
    const { time } = this.state;
    if (time === 'start') {
      this.setState({
        time: 'end',
        title: 'Congratulations!',
        buttonText: 'Restart'
      });
      this.props.startQuiz();
    } else {
      location.reload();// restart the application
    }
  }

  createMarkup(text) {
    return { __html: text };
  }

  render() {
    const { title, text, buttonText } = this.state;
    const { style } = this.props;

    return (
      <div className="popup-container" style={style}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="popup">
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={this.createMarkup(text)} />
              <button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
