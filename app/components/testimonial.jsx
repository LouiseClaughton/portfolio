"use client";

export default function Testimonial({ quote }) {
    const initials = quote.fields.author
        .split(" ")
        .map(part => part[0])
        .join("")
        .toUpperCase();

    return (
        <div className="bg-[#F9F8F4] col-span-full">
            <div className="text-center relative">
                <div className="speech-bubble bg-white border-2 border-[#1E1E1E] rounded-lg relative p-6 lg:px-14 lg:py-12 max-w-full text-left shadow-[4px_4px_0_#1E1E1E]">
                    <div className="text-lg font-bold text-black leading-tight">
                        "{quote.fields.content}"
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-12">
                    <div className="w-[36px] h-[36px] bg-[#ffd6e7] flex items-center justify-center font-bold rounded-lg text-[#a0275c]">
                        {initials}
                    </div>

                    <div className="text-left">
                        <div className="font-semibold">
                            {quote.fields.author}
                        </div>
                        <div className="text-semibold">
                            {quote.fields.authorJob}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}