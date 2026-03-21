import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingCards = ({ memberPlanPriceOption }) => {
  console.log(memberPlanPriceOption);
  const { title, price, currency, duration, features } = memberPlanPriceOption;

  return (
    <div className="border-2 bg-amber-400 shadow-2xl rounded-lg p-4 space-y-7 flex flex-col ">
      {/* Header */}
      <header className="flex-1 space-y-3">
        <h1 className="text-4xl font-bold">
          {title} <span className="font-semibold">({duration})</span>{" "}
        </h1>
        <h3 className="text-3xl">
          {price} {currency}/Month
        </h3>
        <h2 className="text-3xl font-bold underline decoration-wavy flex-1">
          Features :{" "}
        </h2>
        <ol className="text-xl ml-11 space-y-2 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-1">
              {" "}
              <CircleCheckBig className="text-green-500"></CircleCheckBig>{" "}
              {feature}
            </li>
          ))}
        </ol>
      </header>

      <button className="btn btn-ghost bg-amber-500 hover:bg-amber-600 shadow-xl shadow-amber-900/50 w-full">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCards;
