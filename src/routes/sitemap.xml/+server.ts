import type { RequestHandler } from './$types';

const SITE = 'https://sdk.ac';
const LANGS = ['en', 'ko', 'ja', 'zh'];

const PAGES = [
	'',
	'/prompt',
	'/image',
	'/summarizer',
	'/translator',
	'/code',
	'/email',
	'/hashtag',
	'/writing',
	'/about',
	'/privacy',
	'/terms',
	'/contact',
	'/faq',
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

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0];

	const urls = LANGS.flatMap((lang) =>
		PAGES.map(
			(page) => `
	<url>
		<loc>${SITE}/${lang}${page}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>${page === '' ? '1.0' : page.startsWith('/guide') ? '0.7' : '0.8'}</priority>
	</url>`
		)
	).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
