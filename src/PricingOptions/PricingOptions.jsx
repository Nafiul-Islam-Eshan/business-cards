import { use } from "react";
import PricingCards from "../components/PricingCards/PricingCards";

const PricingOptions = ({ pricingOptionsData }) => {
  const priceOptions = use(pricingOptionsData);
  const memberPlanPriceOptions = priceOptions.membership_plans;
  console.log(memberPlanPriceOptions);

  return (
    <div className="space-y-11">
      <h2 className="text-4xl font-bold">All Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {memberPlanPriceOptions.map((memberPlanPriceOption, index) => (
          <PricingCards
            key={index}
            memberPlanPriceOption={memberPlanPriceOption}
          ></PricingCards>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
