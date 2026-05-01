import Button from "./button";

export default function Card({ block }) {
  const fields = block?.fields;

  return (
    <div
      className={`flex flex-col py-24 gap-2 
            ${fields?.textAlignment === "Center" ? "text-center items-center" : "text-left"} 
            ${fields?.border ? "border-b-2 border-[#E6E0DA] mx-12 md:mx-24" : "px-12 md:px-24"}
        `}
    >
      <h2 className="font-bold text-3xl md:text-5xl tracking-[-2px] leading-[40px] md:leading-[110px]">
        {fields?.title}
      </h2>
      {fields?.content && (
        <div className="text-gray-800 whitespace-pre-line mb-6">
          {fields?.content}
        </div>
      )}
      {fields?.buttonText && fields.buttonLink && (
        <Button
          buttonText={fields?.buttonText}
          buttonLink={fields.buttonLink}
          backgroundColour={fields?.backgroundColour}
          textColour={fields.textColour}
        />
      )}
    </div>
  );
}
