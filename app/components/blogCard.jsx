"use client";

import Link from "next/link";
import Tag from "./tag";

export default function BlogCard({ title, href, excerpt, date, tag }) {
    
    function formatDate(dateStr) {
        return new Date(dateStr).toLocaleDateString("en-GB");
    }

    return (
        <Link className="h-full w-full block" href={href ? href : ''}>
            <div className="h-full w-full flex flex-col gap-4 border-black border-2 rounded-lg p-8 hover:-translate-y-2 transition-all justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-xl">{title}</h2>
                    {date && 
                        <span className="caption text-xl">{formatDate(date)}</span>
                    }
                    {excerpt &&
                        <p>{excerpt}</p>
                    }
                </div>
                {tag &&
                    <Tag tag={tag} />
                }
            </div>
        </Link>
    );
}