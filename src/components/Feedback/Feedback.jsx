import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export default function Feedback(props) {
  const { good, neutral, bad } = props;
  return (
    <ul class="statistics">
      {' '}
      Statistics
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
    </ul>
  );
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
