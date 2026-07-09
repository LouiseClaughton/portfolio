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
                pagination={{ clickable: true }}
                className="!pb-12"
            >
                {quotes.map((quote) => {
                    const initials = quote.fields.author
                        .split(" ")
                        .map(part => part[0])
                        .join("")
                        .toUpperCase();

                    return (
                        <SwiperSlide key={quote.sys.id}>
                            <div className="py-12 px-8 text-center relative">
                                <div className="speech-bubble bg-white border-2 border-[#2D2D2D] rounded-lg relative p-6 lg:px-14 lg:py-12 max-w-full text-left shadow-[4px_4px_0_#2d2d2d]">
                                    <div className="text-lg font-bold text-black leading-tight">
                                        "{quote.fields.content}"
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mt-12 justify-center">
                                    <div className="w-[36px] h-[36px] bg-[#ffd6e7] flex items-center justify-center font-bold rounded-lg text-[#a0275c]">
                                        {initials}
                                    </div>

                                    <div className="text-left">
                                        <div className="font-semibold">
                                            {quote.fields.author}
                                        </div>
                                        <div className="text-semibold caption text-lg">
                                            {quote.fields.authorJob}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}