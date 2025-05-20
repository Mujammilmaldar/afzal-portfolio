import { ReactNode, useState } from "react";

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
  benefitsdesc,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string;
  benefitsdesc: string;
}) {
  const [isCrauselActive, setIsCrauselActive] = useState(false);

  return (
    <div className="cards-style">
      <div
        className="
        main-card-service 
        p-4 
        py-6 
        relative 
        shadow-sm 
        hover:shadow-md 
        transition 
        flex 
        flex-col md:flex-row 
        gap-4 
        overflow-hidden 
        cursor-pointer 
        h-auto md:h-[20vw] lg:max-h-[30vh]
        "
      >
        {/* Icon + Text */}
        <div className="text-primary text-4xl">{icon}</div>
        <div className="content px-2 lg:px-4 text-left">
          <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
          <p className="text-gray-500 text-sm mb-10">{description}</p>

          {/* Toggle Arrow */}
          <button
            className="absolute bottom-4 right-4 transform transition-transform duration-300 ease-in-out z-30"
            style={{
              transform: isCrauselActive ? "rotate(180deg)" : "rotate(0)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsCrauselActive(!isCrauselActive);
            }}
            aria-label={isCrauselActive ? "Hide benefits" : "Show benefits"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 100 100"
              className="drop-shadow-md hover:drop-shadow-lg transition-all"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="#3B82F6"
                stroke="#2563EB"
                strokeWidth="2"
              />
              <path
                d="M30,40 L50,60 L70,40"
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Benefits Panel */}
        <div
          className={`
            absolute left-1/2 top-0 w-full h-full
            bg-primary bg-opacity-90
            flex flex-col justify-center items-center
            p-6
            transform transition-transform duration-700 ease-in-out
            -translate-x-1/2
            will-change-transform
            ${
              isCrauselActive
                ? "translate-y-[10%] opacity-100"
                : "translate-y-full opacity-0"
            }
          `}
        >
          <div className="text-center mb-3">
            <h3 className="text-white text-2xl font-bold">{benefits}</h3>
          </div>
          <p className="text-white! w-[85%] text-center">{benefitsdesc}</p>
        </div>
      </div>
    </div>
  );
}
