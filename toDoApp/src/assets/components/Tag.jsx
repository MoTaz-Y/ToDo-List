import "./tag.css";
import PropTypes from "prop-types";
const Tag = (props) => {
  const { tagName } = props || "";

  return <button className="tag">{tagName}</button>;
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Tag;
