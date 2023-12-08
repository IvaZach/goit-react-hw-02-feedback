import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <table className="table">
    <tbody>
      <tr>
        <th scope="row">Good:</th>
        <td>{good}</td>
      </tr>
      <tr>
        <th scope="row">Neutral:</th>
        <td>{neutral}</td>
      </tr>
      <tr>
        <th scope="row">Bad:</th>
        <td>{bad}</td>
      </tr>
      <tr>
        <th scope="row">Total:</th>
        <td>{total}</td>
      </tr>
      <tr>
        <th scope="row">PositiveFeedback:</th>
        <td>{positivePercentage}%</td>
      </tr>
    </tbody>
  </table>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
