import React, { useState } from "react";

const PremierPlan = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const plans = [
    {
      title: "Basic",
      price: "$10/month",
      features: [
        { text: "10GB Storage", strike: true },
        { text: "Basic Support", strike: true },
        { text: "Single User", strike: true },
        { text: "Community Access", strike: false },
        { text: "Weekly Updates", strike: false },
      ],
      buttonBg: "bg-gray-700 hover:bg-gray-900",
      badge: null,
    },
    {
      title: "Standard",
      price: "$20/month",
      features: [
        { text: "50GB Storage", strike: false },
        { text: "Priority Support", strike: false },
        { text: "Up to 5 Users", strike: false },
        { text: "Community Access", strike: false },
        { text: "Daily Updates", strike: false },
      ],
      buttonBg: "bg-[#3b82f6] hover:bg-[#2563eb]",
      badge: {
        text: "Bestseller",
        bg: "bg-[#3b82f6]",
      },
    },
    {
      title: "Premium",
      price: "$30/month",
      features: [
        { text: "200GB Storage", strike: false },
        { text: "24/7 Support", strike: false },
        { text: "Unlimited Users", strike: false },
        { text: "Community Access", strike: false },
        { text: "Real-time Updates", strike: false },
      ],
      buttonBg: "bg-purple-600 hover:bg-purple-700",
      badge: null,
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center">
        {plans.map((plan, idx) => (
          <div
            onClick={() => setSelectedIndex(idx)}
            key={idx}
            className={`w-96 rounded-2xl border p-6 flex flex-col items-center text-center hover:scale-105 justify-between shadow-lg bg-white dark:bg-[var(--primary-section-2-box)] relative ${
              selectedIndex === idx
                ? "border-2 border-blue-500"
                : "border-transparent"
            } transition duration-400`}
          >
            {plan.badge && (
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full font-semibold shadow ${plan.badge.bg}`}
              >
                {plan.badge.text}
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold">{plan.title}</h2>
              <p className="mt-6 mb-2">{plan.price}</p>
              <div className="space-y-2">
                {plan.features.map((feature, i) => (
                  <p key={i} className={feature.strike ? "line-through" : ""}>
                    {feature.text}
                  </p>
                ))}
              </div>
            </div>
            <button
              className={`mt-8 text-card dark:text-foreground cursor-pointer py-2 px-7 rounded-md ${plan.buttonBg}`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PremierPlan;
