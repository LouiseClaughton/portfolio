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
            <div className="bg-[#f5f0eb] py-12 px-8 text-center relative">
    <div className="speech-bubble bg-white border-2 border-[#2D2D2D] rounded-lg relative px-14 py-12 max-w-full text-left shadow-[4px_4px_0_#2d2d2d]">
      <div className="text-lg font-bold text-black leading-tight">"Working with Louise was a pleasure — she gets design AND code, which is rare. The final product was exactly what we needed, and then some."</div>
    </div>
    <div className="flex items-center gap-2 mt-12 justify-center">
      <div className="w-[36px] h-[36px] bg-[#ffd6e7] flex items-center justify-center text-black font-bold rounded-lg text-[#a0275c]">JK</div>
      <div className="text-left">
        <div className="font-semibold">Jamie K.</div>
        <div className="text-semibold">Ideal Heating</div>
      </div>
    </div>
  </div>
        </div>
    );
}