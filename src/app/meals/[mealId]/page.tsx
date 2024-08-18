import React, { useEffect } from "react";
import { getSingleMeal } from "../../../../lib/meals";
import Image from "next/image";
import Link from "next/link";
import MealRecipeStepper from "@/components/meals/mealRecipeStepper";
import { notFound } from "next/navigation";

const MealById = ({ params }: any) => {
  const meal = getSingleMeal(params.mealId);
  let mealInstructions = meal.instructions
    .split("\n")
    .filter((step: string) => step.trim() !== "");

    if(!meal){
      notFound();
    }

  return (
    <div className=" flex justify-center flex-col  items-center">
      <div className="lg:w-2/3 w-full pt-3">
        <div className=" flex lg:flex-row flex-col">
          <div className="p-3">
            <Image
              className="rounded-lg"
              src={meal.image}
              width={400}
              height={400}
            />
          </div>
          <div className="lg:w-2/4 w-full p-3 flex flex-col justify-start">
            <p className=" text-5xl my-4 text-orange-300">{meal.title}</p>
            <p className=" text-lg my-2">By {meal.creator}</p>
            <Link
              href={`mailto:${meal.creator_email}`}
              className=" text-lg my-2"
            >
              {meal.creator_email}
            </Link>
            <p className=" text-xl my-2 text-orange-300">{meal.summary}</p>
          </div>
        </div>
        <div>
          <p className="text-4xl my-4">Recipe</p>
          {/* <p dangerouslySetInnerHTML={{
            __html: meal.instructions
          }}></p> */}
          <MealRecipeStepper mealInstructions={mealInstructions} />
        </div>
      </div>
    </div>
  );
};

export default MealById;
