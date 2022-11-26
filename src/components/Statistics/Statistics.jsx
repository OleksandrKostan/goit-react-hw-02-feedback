import propTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad }) => {
    return <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
    </ul>
};
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
//   total: propTypes.number.isRequired,
//   positivePercentage: propTypes.number.isRequired,
};