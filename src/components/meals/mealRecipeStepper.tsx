import React from "react";

interface InstructionComponentProps {
  mealInstructions: string[];
}

const MealRecipeStepper = (props: InstructionComponentProps) => {
  const { mealInstructions } = props;

  const combinedInstructions: string[] = [];
  let currentStep = "";

  for (let i = 0; i < mealInstructions.length; i++) {
    const line = mealInstructions[i].trim();

    if (/^\d+\./.test(line)) {
      if (currentStep !== "") {
        combinedInstructions.push(currentStep.trim());
      }
      currentStep = line;
    } else {
      currentStep += " " + line;
    }
  }

  if (currentStep !== "") {
    combinedInstructions.push(currentStep.trim());
  }

  const renderMealInstructions = () => {
    return combinedInstructions.map((step, index) => {
      return (
        <>
          <li
            className={`relative flex-1 ${
              combinedInstructions.length - 1 !== index &&
              "after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5"
            }`}
          >
            <a className="flex items-center font-medium w-full  ">
              <span className="w-8  h-8 bg-black border-2 border-orange-400 rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                {index}
              </span>
              <div className="block">
                <h4 className="text-lg  text-orange-300">
                  {step.split(":")[0]}
                </h4>
                <span className="text-sm">{step.split(":")[1]}</span>
              </div>
            </a>
          </li>
        </>
      );
    });
  };
  return (
    <div className="">
      <ol className=" overflow-hidden space-y-8">
        <span>{renderMealInstructions()}</span>
      </ol>
    </div>
  );
};

export default MealRecipeStepper;
