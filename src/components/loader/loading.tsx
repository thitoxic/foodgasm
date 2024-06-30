import React from "react";

interface msgProps {
  message: string;
}
const Loader = (props : msgProps) => {
  return (
    <>
      <div role="status" className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 z-50">
        <span className="text-xl text-orange-300">{props.message}</span>
      </div>
    </>
  );
};

export default Loader;
