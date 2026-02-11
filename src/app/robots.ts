import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Blocks irrelevant or sensitive paths
    },
    sitemap: process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml` : 'https://agency-website-delta.vercel.app/sitemap.xml',
  }
}
