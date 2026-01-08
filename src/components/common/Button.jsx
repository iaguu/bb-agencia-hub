import React from "react";

const Button = ({ variant = "primary", size = "md", children, ...rest }) => {
  const classes = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
