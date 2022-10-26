import PropTypes from "prop-types";

/**
 * @param {String} Title - The Title of the Title Component
 * @component
 */

function Title({ title }) {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
}

Title.prototype = {
  title: PropTypes.string.isRequired,
};

export default Title;
