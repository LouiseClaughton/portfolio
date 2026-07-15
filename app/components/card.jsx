"use client";

import { useState } from "react";
import Button from "./button";
import Image from "next/image";

export default function Card({ block, isEven }) {
  const fields = block?.fields;
  const [expandedImage, setExpandedImage] = useState(null);

  let textColour;

  if (fields.headingSpanColour == 'Blue') {
    textColour = '#60c1ff';
  }

  if (fields.headingSpanColour == 'Pink') {
    textColour = '#FF71D0';
  }

  return (
    <div className={`flex flex-col gap-8 py-12 ${fields?.hidePadding ? "" : "px-12 md:px-24 py-12 md:py-24"} ${fields?.image1 && fields?.image2 ? "pb-24" : ""}`}>
      <div
        className={`flex flex-col items-center lg:items-start
              ${fields?.textAlignment === "Center" ? "text-center items-center" : "text-left"} 
              ${fields?.border ? "border-b-2 border-[#E6E0DA] mx-12 md:mx-24" : ""}
          `}
      >
        <h2 className="font-bold text-3xl leading-[40px] md:leading-[60px] mb-8 text-center lg:text-left">
          {fields.headingText}
            <span className={`text-[${textColour}]`}> {fields.headingSpanText}</span>
        </h2>
        {fields.content && (
          <div className="whitespace-pre-line mb-6 text-center lg:text-left">
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
      {(fields?.image1 || fields?.image2) && (
        <div className="w-full overflow-hidden flex flex-col lg:grid lg:grid-cols-2 gap-8 mt-8">
          {fields?.image1 &&
            <div
              className="cursor-zoom-in"
              onClick={() =>
                setExpandedImage(`https:${fields.image1.fields.file.url}`)
              }
            >
              <Image
                src={`https:${fields.image1.fields.file.url}`}
                alt={fields.title}
                width={fields.image1.fields.file.details.image.width}
                height={fields.image1.fields.file.details.image.height}
                className="w-full rounded-2xl object-cover hover:cursor-pointer"
              />
            </div>
          }
          {fields?.image2 &&
            <div
              className="cursor-zoom-in"class="flex flex-col gap-4"
              onClick={() =>
                setExpandedImage(`https:${fields.image2.fields.file.url}`)
              }
            >
              <Image
                src={`https:${fields.image2.fields.file.url}`}
                alt={fields.title}
                width={fields.image2.fields.file.details.image.width}
                height={fields.image2.fields.file.details.image.height}
                className="w-full rounded-2xl object-cover hover:cursor-pointer"
              />
            </div>
          }
        </div>
      )}

      {expandedImage && (
        <div
          className="fixed inset-0 z-[102] bg-black/80 flex items-center justify-center py-12 px-8 lg:px-20"
          onClick={() => setExpandedImage(null)}
        >
          <Image
            src={expandedImage}
            alt={fields.title}
            width={1600}
            height={1200}
            className="max-w-full max-h-full object-contain lg:object-cover rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}
