import PropTypes from "prop-types";

const SectionContentContainer = ({ children}) => {
  return <div className="w-full md:w-5/6 flex flex-wrap justify-center">{children}</div>;
};

SectionContentContainer.propTypes = {
  children: PropTypes.node,
};

export default SectionContentContainer;
