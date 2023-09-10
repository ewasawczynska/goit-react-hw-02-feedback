import { Component } from 'react';

import { Section, Button, Feedback, Container, Statistics } from 'components';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const feedbackType = e.currentTarget.textContent.toLowerCase();
    this.setState({
      [feedbackType]: this.state[feedbackType] + 1,
    });
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;
  countPositiveFeedbackPercentage = (good, neutral, bad) =>
    Math.ceil((good / (good + neutral + bad)) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <Feedback
            options={['GOOD', 'NEUTRAL', 'BAD']}
            updateFeedback={this.addFeedback}
          ></Feedback>
        </Section>
        <Section title={'Statistics'}></Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          positivePercentage={this.countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        ></Statistics>
      </Container>
    );
  }
}
