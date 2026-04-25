export default function Card({ title, slug, date, technologies }) {
    return (
        <div className="bg-white w-full h-64 rounded-lg text-black">
            <h2>{title}</h2>
            <p>{slug}</p>
            <p>{date}</p>
            <p>{technologies}</p>
        </div>
    )
}