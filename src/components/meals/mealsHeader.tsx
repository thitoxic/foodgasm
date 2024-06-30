import Link from "next/link";
import React from "react";

const MealsHeader = () => {
  return (
    <div className="px-3">
      <h1 className="bg-gradient-to-r from-orange-300 to-orange-500 inline-block text-transparent bg-clip-text lg:text-5xl py-3">
        Delicious meals created by you.
      </h1>
      <p className="text-2xl py-3">We love when you share your meal recipes to us, <Link className="underline bg-gradient-to-r from-orange-300 to-orange-500 inline-block text-transparent bg-clip-text " href="/community">join the community.</Link></p>

    </div>
  );
};

export default MealsHeader;
