import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>
        <span className={styles.title}>Good:</span>
        {good}
      </p>
      <p>
        <span className={styles.title}>Neutral:</span>
        {neutral}
      </p>
      <p>
        <span className={styles.title}>Bad:</span>
        {bad}
      </p>
      <p>
        <span className={styles.title}>Total:</span>
        {total}
      </p>
      <p>
        <span className={styles.title}>Positive feedback:</span>
        {positivePercentage} %
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
