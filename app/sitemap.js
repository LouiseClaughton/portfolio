export const revalidate = 3600 // cache for 1 hour

export default async function sitemap() {
    const baseUrl = 'https://louiseclaughton.co.uk'

    const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
    const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

    const res = await fetch(
        `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=project`,
        { next: { revalidate: 3600 } }
    )

    const data = await res.json()

    const projects = data.items || []

    const projectUrls = projects.map((item) => ({
        url: `${baseUrl}/projects/${item.fields.slug}`,
        lastModified: item.sys.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    return [
        // static pages
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            priority: 0.8,
        },

        // dynamic project pages
        ...projectUrls,
    ]
}