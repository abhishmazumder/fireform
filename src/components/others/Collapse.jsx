import React, { useState } from "react";

const Title = ({ children, actionIcon: Icon, onClick, isOpen }) => {
  return (
    <div
      className="text-primary font-medium text-md flex items-center gap-1 cursor-pointer"
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={`size-5 ${
            isOpen ? "rotate-90" : "rotate-0"
          } transition-all duration-300`}
        />
      )}
      {children}
    </div>
  );
};

const Body = ({ children, isOpen }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-80" : "max-h-0"
      }`}
    >
      {children}
    </div>
  );
};

const Collapse = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const title = React.Children.toArray(children)?.find(
    (child) => child?.type === Title
  );
  const body = React.Children.toArray(children)?.find(
    (child) => child?.type === Body
  );

  return (
    <div className="py-3">
      {title && React.cloneElement(title, {
        onClick: handleToggle,
        actionIcon: title?.props?.actionIcon,
        isOpen: isOpen,
      })}
      {body && React.cloneElement(body, {
        isOpen: isOpen,
      })}
    </div>
  );
};

export { Collapse, Body, Title };
