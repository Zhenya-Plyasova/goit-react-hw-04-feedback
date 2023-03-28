import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const Feedback = ({ buttonsData }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const incrementButton = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      default:
        console.log("об'єкт не обробляється");
        break;
    }
    countPositiveFeedbackPercentage();
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonsData}
          onLeaveFeedback={incrementButton}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
