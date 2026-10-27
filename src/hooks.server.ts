import type { Handle } from '@sveltejs/kit';

const LOCALES = ['en', 'ko', 'ja', 'zh', 'es', 'pt', 'de', 'fr', 'hi'];
// Routes that only exist under a locale prefix. Requests without a prefix
// (e.g. /privacy, /contact, /guide/prompt) used to 404; send them to /en.
const LOCALE_ROUTES =
	/^\/(about|privacy|terms|contact|faq|blog|guide|prompt|image|summarizer|translator|code|email|hashtag|writing)(\/|$)/;

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname, search } = event.url;
	const first = pathname.split('/')[1];
	if (first && !LOCALES.includes(first) && LOCALE_ROUTES.test(pathname)) {
		return new Response(null, {
			status: 301,
			headers: { Location: `/en${pathname}${search}` }
		});
	}

	const response = await resolve(event);

	// 정책 준수를 위한 보안 헤더 (모든 동적 응답)
	response.headers.set(
		'Strict-Transport-Security',
		'max-age=31536000; includeSubDomains; preload'
	);
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set(
		'Permissions-Policy',
		'camera=(), microphone=(), geolocation=(), interest-cohort=()'
	);
	response.headers.set('X-XSS-Protection', '1; mode=block');

	return response;
};
