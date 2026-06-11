import Button from "./button";

export default function Card({ block, isEven }) {
  const fields = block?.fields;

  return (
    <div
      className={`flex flex-col gap-2 
            ${fields?.textAlignment === "Center" ? "text-center items-center" : "text-left"} 
            ${fields?.border ? "border-b-2 border-[#E6E0DA] mx-12 md:mx-24" : ""}
        `}
    >
      <h2 className="font-bold text-3xl md:text-4xl leading-[40px] md:leading-[60px] mb-8">
        {fields.title}
      </h2>
      {fields.content && (
        <div className="whitespace-pre-line mb-6">
          {fields.content}
        </div>
      )}
      {fields?.buttonText && fields.buttonLink && (
        <Button
          buttonText={fields?.buttonText}
          buttonLink={fields.buttonLink}
          isEven={isEven}
        />
      )}
    </div>
  );
}
