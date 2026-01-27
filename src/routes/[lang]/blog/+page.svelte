<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { getAllBlogPosts } from '$lib/data/blog-posts';
	$: lang = ($page.params.lang || 'en') as Locale;
	$: posts = getAllBlogPosts();
	const labels = { en: { title: 'Blog', subtitle: 'AI tools guides and tips', readMore: 'Read more' }, ko: { title: '블로그', subtitle: 'AI 도구 가이드 및 팁', readMore: '자세히 보기' }, ja: { title: 'ブログ', subtitle: 'AIツールガイドとヒント', readMore: '続きを読む' }, zh: { title: '博客', subtitle: 'AI工具指南和技巧', readMore: '阅读更多' } };
	$: t = labels[lang] || labels.en;
</script>
<svelte:head><title>{t.title} - SDK.ac</title><meta name="description" content={t.subtitle} /></svelte:head>
<div class="max-w-4xl mx-auto px-4 py-12">
	<div class="text-center mb-12"><h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-4">{t.title}</h1><p class="text-xl text-gray-600 dark:text-dark-400">{t.subtitle}</p></div>
	<div class="space-y-6">
		{#each posts as post}
			<a href="/{lang}/blog/{post.slug}" class="block p-6 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl hover:border-primary-500 transition-all hover:shadow-lg">
				<div class="flex items-center gap-3 mb-3"><span class="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-full">{post.category}</span><span class="text-sm text-gray-500 dark:text-dark-400">{post.date}</span></div>
				<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-2 hover:text-primary-500 transition-colors">{post.title[lang] || post.title.en}</h2>
				<p class="text-gray-600 dark:text-dark-400 mb-4">{post.description[lang] || post.description.en}</p>
				<span class="text-primary-500 font-medium text-sm">{t.readMore} →</span>
			</a>
		{/each}
	</div>
</div>
