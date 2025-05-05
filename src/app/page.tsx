import Image from "next/image";

export default function Home() {
  return (
    <div className=" mx-auto">
      <div className="relative w-full h-[700px] overflow-hidden">
        <Image
          src="/herosection.jpg"
          alt="Descriptive text"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
