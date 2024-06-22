import MealContent from "@/components/meals/mealContent";
import MealsHeader from "@/components/meals/mealsHeader";
import React from "react";
import { getMeals } from "../../../lib/meals";

const MealPage = async () => {

  const meals = await getMeals();
  return (
    <>
      <div className="flex flex-col  lg:m-12">
      <MealsHeader />
      <MealContent meals={meals}/>
      </div>
    </>
  );
};

export default MealPage;
