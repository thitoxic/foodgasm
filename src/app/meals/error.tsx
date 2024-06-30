'use client'
import React from "react";

interface errorProps {
  errorMessage: string;
}

const Error = (props: errorProps) => {
  return (
    <div
      role="status"
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 z-50"
    >
      <span className="text-xl text-red-600">Uh-oh! It seems there's a recipe mix-up...</span>
    </div>
  );
};

export default Error;
