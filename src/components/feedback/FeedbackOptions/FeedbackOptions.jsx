import css from "./FeedbackOptions.module.css";
import buttonsData from '../../buttonsData.json'

export const FeedbackOptions =({options, onLeaveFeedback})=>{
return (
  <div>
    {buttonsData.map(option => (
      <button
        className={css.feedbackButton}
        key={option.name}
        type="button"
        name={option.name}
        onClick={onLeaveFeedback}
      >
        {option.name}
      </button>
    ))}
  </div>
);
};