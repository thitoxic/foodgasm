import MealContent from "@/components/meals/mealContent";
import MealsHeader from "@/components/meals/mealsHeader";
import React, { Suspense } from "react";
import { getMeals } from "../../../lib/meals";
import Loader from "@/components/loader/loading";

const LoadMeals = async () => {
  const meals = await getMeals();
  return <MealContent meals={meals} />;
};

const MealPage = () => {
  return (
    <>
      <div className="flex flex-col  lg:m-12">
        <MealsHeader />
        <span className="lg:h-12"></span>
        <Suspense fallback={<Loader message="Savoring flavors... almost there!" />}>
          <LoadMeals />
        </Suspense>
      </div>
    </>
  );
};

export default MealPage;
