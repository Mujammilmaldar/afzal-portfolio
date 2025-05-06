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
    <div className="p-10 shadow-sm hover:shadow-md transition flex gap-4">
      <div className="text-primary text-4xl">{icon}</div>
      <div className="content px-4">
        <h3 className="text-lg font-semibold text-dark cursor-pointer text-left mb-3 hover:text-primary">
          {title}
        </h3>
        <p className="text-gray-500 text-sm text-left mb-4">{description}</p>
        <button className="mt-auto text-sm font-medium flex items-center gap-2 text-gray-900 cursor-pointer hover:text-primary transition duration-300">
          <span className="inline-block flex items-center justify-center bg-white shadow-md w-[28px] h-[28px] rounded-full transition hover:bg-primary hover:text-white span-for-about">
            →
          </span>
          Read More
        </button>
      </div>
    </div>
  );
}
