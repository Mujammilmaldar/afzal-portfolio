import { ReactNode } from "react";

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
  benefitsdesc
}: {
  icon: ReactNode;
  title: string;
  description: string;
  benefits:string;
  benefitsdesc:string;
}) {
  return (
    <div className="cards-style">
      <div className="main-card-service group p-2 py-5 md:p-5 lg:p-10 relative shadow-sm hover:shadow-md transition flex gap-4 overflow-hidden cursor-pointer md:h-[300px] lg:h-[200px]">
        <div className="text-primary text-4xl">{icon}</div>
        <div className="content px-4">
          <h3 className="text-lg font-semibold text-dark cursor-pointer text-left mb-3 group-hover:text-primary">
            {title}
          </h3>
          <p className="text-gray-500 text-sm text-left mb-4">{description}</p>
        </div>
        <div className="down-side-content absolute">
          <div className="card-heading text-center">
            <h3 className="text-white! text-2xl!">{benefits}</h3>
          </div>
          <div className="content text-center w-full mt-3 flex items-center justify-center">
            <p className="text-white! w-[70%]">{benefitsdesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}