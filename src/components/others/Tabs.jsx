import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ children, defaultActiveTab = null }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    children.forEach((child, index) => {
      if (
        child?.props?.label?.toLowerCase() === defaultActiveTab?.toLowerCase()
      ) {
        setActiveTab(index);
      }
    });
  }, [children, defaultActiveTab]);

  const handleClick = (e, newIndex) => {
    e.preventDefault();
    setActiveTab(newIndex);
  };

  const activeChildIndex = useMemo(() => activeTab, [activeTab]);

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex justify-start gap-2">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`${
              activeChildIndex === index
                ? "bg-primary text-white  hover:bg-primary-dark"
                : "bg-white text-black hover:bg-neutral-300"
            } px-3 py-2 transition-all rounded-md`}
          >
            <h1 className="text-sm">{child.props.label}</h1>
          </button>
        ))}
      </div>
      <div className="my-1">{children[activeChildIndex]}</div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  defaultActiveTab: PropTypes.string,
};

const Tab = ({ children }) => {
  return <div className="transition-all">{children}</div>;
};

Tab.propTypes = {
  children: PropTypes.node,
};

export { Tabs, Tab };
