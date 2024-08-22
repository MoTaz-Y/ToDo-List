import "./tag.css";
import PropTypes from "prop-types";
const Tag = (props) => {
  const { tagName, selected, selectTag } = props || "";

  const tagStyle = {
    HTML: {
      backgroundColor: "#fda821",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
    CSS: {
      backgroundColor: "#15d4c8",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
    JavaScript: {
      backgroundColor: "#ffd12c",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
    React: {
      backgroundColor: "#4cdafc",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
    Angular: {
      backgroundColor: "#d64c4c",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
    Vue: {
      backgroundColor: "rgb(195 255 111)",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
    Node: {
      backgroundColor: "rgb(56 236 80)",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
    Python: {
      backgroundColor: "rgb(76 119 252)",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
    default: {
      backgroundColor: "#f9f9f9",
      border: "1px solid #dfe3e6",
      color: "#000000",
    },
  };
  return (
    <button
      className="tag"
      onClick={() => selected(tagName)}
      style={selectTag ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Tag;
