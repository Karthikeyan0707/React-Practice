// import React, { useContext } from "react";
// import NavigationContext from "../context/navigation";
import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    // console.log(event);
    event.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a href={to} className={classes} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
}

export default Link;
