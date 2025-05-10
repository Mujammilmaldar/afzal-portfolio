import { ReactNode } from "react";

export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="cards-style">

    <div className="main-card-service p-10 relative shadow-sm hover:shadow-md transition flex gap-4 overflow-hidden">
      <div className="text-primary text-4xl">{icon}</div>
      <div className="content px-4">
        <h3 className="text-lg font-semibold text-dark cursor-pointer text-left mb-3 hover:text-primary">
          {title}
        </h3>
        <p className="text-gray-500 text-sm text-left mb-4">{description}</p>
      </div>
    </div>
    <div className="upside-conetnt absolute sec-card-blur -z-1"></div>
    <div className="down-side-content sec-card-content absolute -z-1">
      <div className="card-heading">
        <h2>Card Benefits for Afzal</h2>
      </div>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere praesentium vel laborum!</p>
      </div>
    </div>
    </div>
  );
}
