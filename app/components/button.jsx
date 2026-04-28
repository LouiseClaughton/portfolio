export default function Button ({ buttonText, buttonLink }) {
    if (buttonLink && buttonText) {
        return (
            <a href={buttonLink} className="rounded-full border border-black px-6 py-2 w-fit transition-colors hover:bg-[#E6E0DA]">
                {buttonText}
            </a>
        )   
    }
}