export default function Quote({ block }) {
  const fields = block?.fields;

  return (
    <div
      className={`flex flex-col md:flex-row px-12 md:px-24 py-24 gap-2 md:gap-8 overflow-x-hidden relative ${fields?.textAlignment === "Center" ? "text-center items-center" : "text-left"}`}
    >
      <div className="cloud w-[350px] h-[120px] bg-[#f2f9fe] rounded-full absolute mt-[120px] mx-auto mb-[20px] z-1 opacity-60 bottom-[30%] right-[-5%]"></div>
      <span className="font-bold text-3xl md:text-5xl">"</span>
      <div className="flex flex-col">
        <div className="mb-4 z-1">{fields?.content}</div>
        <p className="italic">{fields?.author}</p>
      </div>
    </div>
  );
}
