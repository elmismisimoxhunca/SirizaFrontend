import type { APIRoute } from 'astro';

const CONTENT_API_KEY = 'b1c7ddc8d04bdef2bb521887c4';
const GHOST_API_URL = 'https://sirizagaria.com/blog/ghost/api/v3/content/posts';

interface BlogPost {
  slug: string;
  updated_at: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${GHOST_API_URL}?key=${CONTENT_API_KEY}&limit=100&fields=slug,updated_at`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      console.error('Failed to fetch blog posts for sitemap');
      return [];
    }

    const data = await response.json();
    return (data.posts || []).map((post: any) => ({
      slug: post.slug,
      updated_at: post.updated_at,
    }));
  } catch (err) {
    console.error('Error fetching blog posts for sitemap:', err);
    return [];
  }
}

export const GET: APIRoute = async () => {
  const blogPosts = await getBlogPosts();

  const staticPages = [
    { loc: '/', lastmod: '2025-01-07', changefreq: 'weekly', priority: '1.0' },
    { loc: '/producto', lastmod: '2025-01-07', changefreq: 'monthly', priority: '0.8' },
    { loc: '/checkout', lastmod: '2025-01-07', changefreq: 'monthly', priority: '0.7' },
    { loc: '/privacidad', lastmod: '2025-01-07', changefreq: 'yearly', priority: '0.5' },
    { loc: '/terminos', lastmod: '2025-01-07', changefreq: 'yearly', priority: '0.5' },
    { loc: '/envios', lastmod: '2025-01-07', changefreq: 'yearly', priority: '0.5' },
  ];

  const blogEntries = blogPosts.map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : '2025-01-07',
    changefreq: 'monthly',
    priority: '0.6',
  }));

  const allPages = [...staticPages, ...blogEntries];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>https://sirizagaria.com${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
