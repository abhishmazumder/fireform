import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonPrimary = ({ size = "xl", variant = "bright", to, children }) => {
  return (
    <Link to={to}>
      <button
        className={`px-3 py-2 rounded-md ${
          variant === "bright"
            ? "bg-primary text-white hover:bg-primary-dark"
            : "bg-secondary text-primary hover:bg-secondary-light"
        } transition-all`}
      >
        <p className={`text-${size}`}>{children}</p>
      </button>
    </Link>
  );
};

ButtonPrimary.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]),
  variant: PropTypes.oneOf(["bright", "dark"]),
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonPrimary;
