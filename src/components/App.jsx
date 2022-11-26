import React, { Component } from 'react';
import { Section } from './Section/Section'
import { Btn } from './Btn/Btn';
import { Statistics } from './Statistics/Statistics';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleFeedback = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  render() {
    return (
      <><Section title="Please leave feedback">
        <Btn options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.handleFeedback} />{' '}
      </Section>
        <Section title="Statistics">
          <Statistics good={this.state.good}
            neutral={this.state.neutral}
          bad={this.state.bad}/>

        </Section></>

        
    );
  }
} 

