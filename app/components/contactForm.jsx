"use client";

import { useEffect } from "react";

export default function ContactForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.powr.io/powr.js?platform=html";
        script.async = true;

        document.body.appendChild(script);

        return () => {
        document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="powr-form-builder"
            id="2e7dd778_1783689770"
        />
    );
}