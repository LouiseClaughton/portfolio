export default function Button({
  buttonText,
  buttonLink,
  isEven
}) {
  if (!buttonLink || !buttonText) return null;

  return (
    <a
      href={buttonLink}
      className={`rounded-full px-6 py-2 w-fit transition-colors uppercase
        ${isEven ? "bg-[#F9F8F4] text-black" : "bg-[#2D2D2D] text-white"}`}
    >
      {buttonText}
    </a>
  );
}