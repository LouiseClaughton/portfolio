"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/bundle";

export default function FeaturedQuotes({ quotes }) {
    return (
        <div className="bg-[#F9F8F4]">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={24}
                centeredSlides
                loop
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                className="!pb-12"
            >
                {quotes.map((quote) => (
                    <SwiperSlide key={quote.sys.id}>
                        <div className="flex flex-col items-center justify-center text-center h-48">
                            <p className="text-xl leading-relaxed quote">
                                "{quote.fields.content}"
                            </p>

                            <p className="mt-6 font-semibold">
                                {quote.fields.author}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}