export default function Button({
  buttonText,
  buttonLink,
  backgroundColour,
  textColour,
}) {
  if (!buttonLink || !buttonText) return null;

  return (
    <a
      href={buttonLink}
      className="rounded-full px-6 py-2 w-fit transition-colors"
      style={{
        backgroundColor: backgroundColour,
        color: textColour,
      }}
    >
      {buttonText}
    </a>
  );
}