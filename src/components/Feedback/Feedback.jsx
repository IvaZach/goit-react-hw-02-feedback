import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(nameKey => (
      <button
        key={nameKey}
        name={nameKey}
        onClick={onLeaveFeedback}
        type="button"
        className="btn btn-outline-primary"
      >
        {nameKey}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
