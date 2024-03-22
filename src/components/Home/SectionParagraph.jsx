import PropTypes from "prop-types";

const SectionParagraph = ({ children }) => {
  return (
    <div className="w-full md:w-5/6">
      <p className="text-md md:text-lg leading-2 md:leading-6 font-light text-center text-neutral-300">
        {children}
      </p>
    </div>
  );
};

SectionParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionParagraph;
