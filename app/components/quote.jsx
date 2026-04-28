export default function Quote () {
    return (
        <div className="flex flex-col md:flex-row px-12 md:px-24 py-24 gap-8">
            <span className="font-bold text-3xl md:text-5xl">"</span>
            <div className="flex flex-col">
                <div className="mb-4">
                    {/* TEMP */}
                    Unlike a single-item retail page, our product pages need to serve a customer ordering 2 items just as well as one ordering 500, in various colours and sizes, and with personalisation options, quantity-based pricing, fast-track delivery choices, and a clear path to either buying online or speaking with our team. Getting all of that into one coherent journey, without it feeling overwhelming, has been the real challenge.<br /><br />
                    Louise handled a genuinely complex brief with real maturity and care, and the results speak for themselves.</div>
                <p className="italic">Nikki Jackson, General Manager at Banana Moon</p>
            </div>
        </div>
    )
}