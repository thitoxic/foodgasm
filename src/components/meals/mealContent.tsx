import React from "react";
import Image from "next/image";
import Link from "next/link";
interface mealType {
  id: number;
  mealId: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

const MealContent = (props: { meals: mealType[] }) => {
  const { meals } = props;
  const renderMeals = () => {
    return meals.map((meal) => (
      <div key={meal.id} className="p-3">
        <div className="max-w-sm border rounded-lg shadow bg-orange-200 text-black">
          <Link href={`/meals/${meal.id}`}>
            <Image
              width={100}
              height={100}
              className="rounded-t-lg w-full h-full"
              src={meal.image}
              alt={meal.title}
            />
          </Link>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                {meal.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-800">{meal.summary}</p>
            <Link
              href={`/meals/${meal.mealId}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-black hover:bg-gray-700"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return <div className="grid lg:grid-cols-4">{renderMeals()}</div>;
};

export default MealContent;
