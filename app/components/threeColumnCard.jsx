export default function ThreeColumnCard({ block, id }) {
    const fields = block?.fields;

    return (
        <div className="flex flex-col justify-center text-center py-12 md:py-24">
            <h2 className="font-bold text-3xl md:text-4xl tracking-[-2px] leading-[80px] md:leading-[110px]">{fields?.blockTitle}</h2>
            <div
                id={id}
                className="w-screen flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-24 px-12 md:px-24 py-12"
            >
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-xl">{fields?.column1Title}</span>
                    <div>{fields?.column1Content}</div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-xl">{fields?.column2Title}</span>
                    <div>{fields?.column2Content}</div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-xl">{fields?.column3Title}</span>
                    <div>{fields?.column3Content}</div>
                </div>
            </div>
        </div>
    );
}