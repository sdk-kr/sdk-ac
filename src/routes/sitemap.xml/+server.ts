import type { RequestHandler } from './$types';
import { getAllBlogPosts } from '$lib/data/blog-posts';

const SITE = 'https://sdk.ac';
// es/pt/de/fr/hi are English-fallback duplicates — deliberately excluded
// from the sitemap (and noindexed in the layout) to avoid duplicate content.
const LANGS = ['en', 'ko', 'ja', 'zh'];

const TOOL_PAGES = [
	'/prompt',
	'/image',
	'/summarizer',
	'/translator',
	'/code',
	'/email',
	'/hashtag',
	'/writing'
];

const GUIDE_PAGES = [
	'/guide',
	'/guide/prompt',
	'/guide/image',
	'/guide/summarizer',
	'/guide/translator',
	'/guide/code',
	'/guide/email',
	'/guide/hashtag',
	'/guide/writing'
];

const INFO_PAGES = [
	'/about',
	'/privacy',
	'/terms',
	'/contact',
	'/faq'
];

function getPriority(page: string): string {
	if (page === '') return '1.0';
	if (TOOL_PAGES.includes(page)) return '0.9';
	if (page === '/blog' || page.startsWith('/blog/')) return '0.8';
	if (page.startsWith('/guide')) return '0.7';
	return '0.5';
}

function getChangeFreq(page: string): string {
	if (page === '' || TOOL_PAGES.includes(page)) return 'weekly';
	if (page === '/blog' || page.startsWith('/blog/')) return 'weekly';
	if (page.startsWith('/guide')) return 'monthly';
	return 'monthly';
}

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0];

	const blogPages = getAllBlogPosts().map(p => `/blog/${p.slug}`);
	const ALL_PAGES = [
		'',
		...TOOL_PAGES,
		...GUIDE_PAGES,
		...INFO_PAGES,
		'/blog',
		...blogPages
	];

	const urls = LANGS.flatMap((lang) =>
		ALL_PAGES.map((page) => {
			const hreflangs = LANGS.map(
				(l) => `\t\t<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}/${l}${page}" />`
			).join('\n');
			const xdefault = `\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/en${page}" />`;

			return `
	<url>
		<loc>${SITE}/${lang}${page}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>${getChangeFreq(page)}</changefreq>
		<priority>${getPriority(page)}</priority>
${hreflangs}
${xdefault}
	</url>`;
		})
	).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
