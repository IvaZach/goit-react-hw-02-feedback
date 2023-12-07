import React, { Component } from 'react';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onClickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  onClickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  onClickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h1 className="display-1">Please live feedback</h1>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.onClickGood}
          arial-label="good"
        >
          Good
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.onClickNeutral}
          arial-label="neutral"
        >
          Neutral
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.onClickBad}
          arial-label="bad"
        >
          Bad
        </button>

        <h2 className="display-4">Statistics</h2>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Good:</th>
              <td>{good}</td>
            </tr>
            <tr>
              <th scope="row">Neutral:</th>
              <td>{neutral}</td>
            </tr>
            <tr>
              <th scope="row">Bad:</th>
              <td>{bad}</td>
            </tr>
            <tr>
              <th scope="row">Total:</th>
              <td>{total}</td>
            </tr>
            <tr>
              <th scope="row">PositiveFeedback:</th>
              <td>{percent}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Feedback;
