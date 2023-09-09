import { StyledList, StyledItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { good, neutral, bad, total, positiveFeedback } = props;
  return (
    <StyledList>
      <li>
        Good: <StyledItem>{good}</StyledItem>
      </li>
      <li>
        Neutral: <StyledItem>{neutral}</StyledItem>
      </li>
      <li>
        Bad: <StyledItem>{bad}</StyledItem>
      </li>
      <li>
        Total: <StyledItem>{total}</StyledItem>
      </li>
      <li>
        Positive feedback: <StyledItem>{good}</StyledItem>
      </li>
    </StyledList>
  );
}
