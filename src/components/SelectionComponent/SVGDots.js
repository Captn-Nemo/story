import * as React from "react";

const SvgDots = (props) => {
  return (
    <svg viewBox="0 0 85 44" fill="black" preserveAspectRatio="none" {...props}>
      <circle cx="10" cy="22" r="10" />
      <circle cx="41" cy="22" r="10" />
      <circle cx="72" cy="22" r="10" />
    </svg>
  );
};

export default SvgDots;
