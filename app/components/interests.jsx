import Button from "./button"

export default function Interests () {
    return (
        <div className="flex flex-col px-12 md:px-24 py-24 gap-8" id="#interests">
            {/* TEMP */}
            <h2 className="font-bold text-3xl md:text-5xl tracking-[-2px] leading-[80px] md:leading-[110px]">I am a storyteller.</h2>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <Button buttonText="Interests" buttonLink="/interests"/>
        </div>
    )
}