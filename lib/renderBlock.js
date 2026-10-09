import Quote from "@/app/components/quote";
import Card from "@/app/components/card";
import TwoColumnCard from "@/app/components/twoColumnCard";
import ThreeColumnCard from "@/app/components/threeColumnCard";
import ContactForm from "@/app/components/contactForm";
import GalleryBlock from "@/app/components/gallery";

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

        case "contactForm":
            return <ContactForm block={block} />

        case "galleryBlock":
            return <GalleryBlock block={block} isEven={isEven} />;

        default:
        return null;
    }
}