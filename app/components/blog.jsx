"use client";

import React, { useMemo, useState } from "react";
import { fadeInView } from "@/lib/scrollFade";
import BlogCard from "./blogCard";

function BlogItem({ post, index, grid }) {
    const [ref, isVisible] = fadeInView({
        threshold: 0.15,
    });

    return (
        <div
            ref={ref}
            className={`
                ${grid ?
                    `md:transition-all md:duration-700 md:ease-out
                    ${isVisible ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-10"}
                    ${index % 2 === 0 ? "" : "md:translate-y-16"}`
                : ''
                }
            `}
        >
            <BlogCard
                title={post.fields.title}
                slug={post.fields.slug}
                date={post.fields.date}
                href={`/blog/${post.fields.slug}`}
                excerpt={post.fields.excerpt}
                tag={post.fields.tag}
            />
        </div>
    );
}

export default function Blog({ grid = true, posts = [] }) {
    const [selectedTag, setSelectedTag] = useState("All");

    const tags = useMemo(() => {
        const unique = [...new Set(posts.map(post => post.fields.tag))];
        return ["All", ...unique];
    }, [posts]);

    const filteredPosts = useMemo(() => {
        if (selectedTag === "All") return posts;

        return posts.filter(
            post => post.fields.tag === selectedTag
        );
    }, [posts, selectedTag]);

    return (
        <>
            <div className="flex flex-wrap gap-3 px-12 md:px-24 pt-12 justify-center lg:justify-start">
                {tags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`caption rounded-full px-4 py-2 border-2 hover:cursor-pointer transition ${
                            selectedTag === tag
                                ? "bg-black text-white"
                                : "text-black"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div
                className={`py-12 ${
                    grid
                        ? "flex flex-col md:grid md:grid-cols-2 gap-14 md:gap-28 px-12 md:px-24 pb-56"
                        : "flex flex-col gap-12 md:gap-20"
                }`}
            >
                {filteredPosts.map((post, index) => (
                    <BlogItem
                        key={post.sys.id}
                        post={post}
                        index={index}
                        grid={grid}
                    />
                ))}
            </div>
        </>
    );
}