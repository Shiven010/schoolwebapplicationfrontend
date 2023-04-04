import React from "react";

const HeadingWrapper = ({ children }) => {
  return (
    <h1 className="font-extrabold h-fit text-transparent text-3xl  mb-10 w-fit bg-clip-text bg-gradient-to-r from-slate-400 to-blue-900">
      {children}
    </h1>
  );
};

export default HeadingWrapper;
