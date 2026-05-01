export default function Quote({ block }) {
  const fields = block?.fields;

  return (
    <div
      className={`flex flex-col md:flex-row px-12 md:px-24 py-24 gap-8 ${fields?.textAlignment === "Center" ? "text-center items-center" : "text-left"}`}
    >
      <span className="font-bold text-3xl md:text-5xl">"</span>
      <div className="flex flex-col">
        <div className="mb-4">{fields?.content}</div>
        <p className="italic">{fields?.author}</p>
      </div>
    </div>
  );
}
