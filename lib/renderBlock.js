import Quote from "@/app/components/quote";
import Card from "@/app/components/card";
import TwoColumnCard from "@/app/components/twoColumnCard";
import ThreeColumnCard from "@/app/components/threeColumnCard";

export default function RenderBlock({ block, isEven }) {
    const type = block?.sys?.contentType?.sys?.id;

    switch (type) {
        case "testimonial":
        return <Quote block={block} isEven={isEven} />;

        case "card":
        return <Card block={block} isEven={isEven} />;

        case "twoColumnCard":
        return <TwoColumnCard block={block} isEven={isEven} />;

        case "threeColumnBlock":
        return <ThreeColumnCard block={block} isEven={isEven} />;

        default:
        return null;
    }
}