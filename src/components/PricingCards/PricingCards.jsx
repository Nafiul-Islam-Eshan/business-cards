import React from 'react';

const PricingCards = ({memberPlanPriceOption}) => {
    console.log(memberPlanPriceOption);
    const {title, price, currency, duration, features} = memberPlanPriceOption

    return (
        <div className='border-2 bg-amber-400 shadow-2xl rounded-lg p-4 space-y-7'>
            {/* Header */}
            <header>
                <h1 className="text-4xl font-bold">{title} <span className="font-semibold">({duration})</span> </h1>
                <h3 className="text-3xl">{price} {currency}</h3>
            </header>

            {/* Featueres */}
            <main className="space-y-2">
                <h2 className="text-3xl font-bold underline decoration-wavy">Features : </h2>
                <ol className='list-decimal text-xl ml-11'>
                    {
                        features.map((feature, index) => <li key={index} >{feature}</li> )
                    }
                </ol>
            </main>
        </div>
    );
};

export default PricingCards;