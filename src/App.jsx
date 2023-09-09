import { Component } from 'react';

import { Section, Button, Feedback, Container, Statistics } from 'components';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <Feedback options={['GOOD', 'NEUTRAL', 'BAD']}></Feedback>
        </Section>
        <Section title={'Statistics'}></Section>
        <Statistics></Statistics>
      </Container>
    );
  }
}
