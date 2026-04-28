import Quote from "@/app/components/quote";
import Card from "@/app/components/card";
import TwoColumnCard from "@/app/components/twoColumnCard";

export default function RenderBlock({ block }) {
    const type = block?.sys?.contentType?.sys?.id;

    switch (type) {
        case "testimonial":
        return <Quote block={block} />;

        case "card":
        return <Card block={block} />;

        case "twoColumnCard":
        return <TwoColumnCard block={block} />;

        default:
        return null;
    }
}