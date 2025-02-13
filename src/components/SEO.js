// components/SEO.js
import Head from 'next/head'

const SEO = () => ( <
    Head >
    <
    title > Simeneh Tadesse | Business Consultant & Export Manager < /title> <
    meta name = "description"
    content = "Simeneh Tadesse - Business Consultant & Export Manager with expertise in business planning, import/export operations, and strategic management." / >
    <
    meta name = "keywords"
    content = "Simeneh Tadesse, Business Consultant, Export Manager, Import Export, Business Planning" / >
    <
    meta name = "author"
    content = "Simeneh Tadesse" / >

    { /* Open Graph / Facebook Meta Tags */ } <
    meta property = "og:title"
    content = "Simeneh Tadesse | Business Consultant & Export Manager" / >
    <
    meta property = "og:description"
    content = "Simeneh Tadesse - Business Consultant & Export Manager with expertise in business planning, import/export operations, and strategic management." / >
    <
    meta property = "og:type"
    content = "website" / >
    <
    meta property = "og:url"
    content = "https://simeneh.vercel.app" / > { /* Replace with actual URL */ } <
    meta property = "og:image"
    content = "https://simeneh.vercel.app/og-image.jpg" / > { /* Replace with actual image URL */ }

    { /* Twitter Meta Tags */ } <
    meta name = "twitter:card"
    content = "summary_large_image" / >
    <
    meta name = "twitter:title"
    content = "Simeneh Tadesse | Business Consultant & Export Manager" / >
    <
    meta name = "twitter:description"
    content = "Simeneh Tadesse - Business Consultant & Export Manager with expertise in business planning, import/export operations, and strategic management." / >
    <
    meta name = "twitter:image"
    content = "https://simeneh.vercel.app/og-image.jpg" / > { /* Replace with actual image URL */ } <
    /Head>
)

export default SEO;