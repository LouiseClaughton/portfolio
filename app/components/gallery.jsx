"use client";

import { useState } from "react";
import Button from "./button";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function GalleryBlock({ block, isEven }) {
    const fields = block?.fields;
    const [expandedImage, setExpandedImage] = useState(null);

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={2}
            loop
            navigation
        >
            {fields?.images?.map((image) => (
                <SwiperSlide key={image.sys.id}>
                    <Image
                        src={`https:${image.fields.file.url}`}
                        alt={image.fields.title || fields.title || ""}
                        width={image.fields.file.details.image.width}
                        height={image.fields.file.details.image.height}
                        className="rounded-2xl object-cover hover:cursor-pointer"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
