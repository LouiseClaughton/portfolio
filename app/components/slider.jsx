"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Slider({ content }) {
    const logos = content?.[0]?.fields?.logos || [];
    const rows = Number(content?.[0]?.fields?.rows) || 1;
    const numberToShow = content?.[0]?.fields?.numberToShow || 4;

    const midpoint = Math.ceil(logos.length / 2);

    let rowOne = logos;
    let rowTwo = [];

    if (rows === 2) {
        rowOne = logos.slice(0, midpoint);
        rowTwo = logos.slice(midpoint);
    }

    const swiperSettings = {
        modules: [Autoplay],
        slidesPerView: numberToShow,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 600,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: numberToShow,
            },
        },
    };

    return (
        <div>
            {/* ROW ONE */}
            <div className="mb-8">
                <Swiper {...swiperSettings} >
                    {rowOne.map((logo) => (
                        <SwiperSlide key={logo.sys.id}>
                            <div className="flex items-center justify-center h-32">
                                <Image
                                    src={`https:${logo.fields.file.url}`}
                                    alt={logo.fields.title}
                                    width={120}
                                    height={60}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* ROW TWO */}
            {rows === 2 && (
                <Swiper 
                    {...swiperSettings}
                    speed={1000}
                >
                    {rowTwo.map((logo) => (
                        <SwiperSlide key={logo.sys.id}>
                            <div className="flex items-center justify-center h-32">
                                <Image
                                    src={`https:${logo.fields.file.url}`}
                                    alt={logo.fields.title}
                                    width={120}
                                    height={60}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}