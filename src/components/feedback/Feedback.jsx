import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

export const Feedback = ({buttonsData}) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  
  const incrementButton = (e) => {
if (e.target.name === 'good') {
    setGood(prevGood => prevGood + 1);
}
else if (e.target.name === 'bad') {
  setBad(prevBad => prevBad + 1);
}
else {
  setNeutral((prevNeutral) => prevNeutral + 1);
  } 
        countPositiveFeedbackPercentage();
    }
        return (
            <>
    <Section title="Please leave feedback">
      <FeedbackOptions options={buttonsData} onLeaveFeedback={incrementButton}>
        </FeedbackOptions>
        </Section>              
    <Section title="Statistics">
    <Statistics 
    good={good} 
    neutral={neutral} 
    bad={bad} 
    total={countTotalFeedback()} 
    positivePercentage={countPositiveFeedbackPercentage()}/>
        </Section> 
        </>)   
}