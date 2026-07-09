export default function Tag ({ tag }) {
    let color;
    let sourceLink;

    if (tag === 'Gaming') {
        color = '#60C1ff';
    } else if (tag === 'TTRPGs') {
        color = '#FF71D0';
    } else if (tag === 'Film') {
        color = '#83D139';
    } else if (tag === 'Books') {
        color = '#F1B336';
    } else if (tag === 'Coding') {
        color = '#D25CD8';
    }

    return (
        <div
            className="caption text-base border-2 border-black rounded-full h-fit w-fit py-2 px-4"
            style={{ backgroundColor: color }}
        >
            {tag}
        </div>
    );
}