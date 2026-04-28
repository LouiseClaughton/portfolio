import Button from "./button";

export default function Card({ block }) {
    const fields = block?.fields;

    return (
        <div className="flex flex-col px-12 md:px-24 py-24 gap-8">
            <h2 className="font-bold text-3xl md:text-5xl tracking-[-2px] leading-[80px] md:leading-[110px]">{fields?.title}</h2>
            <div className="text-gray-800">{fields?.content}</div>
            <Button buttonText={fields?.buttonText} buttonLink={fields.buttonLink}/>
        </div>
    );
}