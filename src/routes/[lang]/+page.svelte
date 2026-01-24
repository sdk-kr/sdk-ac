<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const tools = [
		{ id: 'prompt', icon: '💬', color: 'from-purple-500 to-indigo-500' },
		{ id: 'image', icon: '🎨', color: 'from-pink-500 to-rose-500' },
		{ id: 'summarizer', icon: '📝', color: 'from-blue-500 to-cyan-500' },
		{ id: 'translator', icon: '🌐', color: 'from-green-500 to-emerald-500' },
		{ id: 'code', icon: '💻', color: 'from-orange-500 to-amber-500' },
		{ id: 'email', icon: '📧', color: 'from-red-500 to-pink-500' },
		{ id: 'hashtag', icon: '#️⃣', color: 'from-violet-500 to-purple-500' },
		{ id: 'writing', icon: '✍️', color: 'from-teal-500 to-cyan-500' }
	];
</script>

<svelte:head>
	<title>{t('home.title')} - SDK.ac</title>
	<meta name="description" content={t('home.subtitle')} />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
	<!-- Hero Section -->
	<div class="text-center mb-16">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-4">
			{t('home.title')}
		</h1>
		<p class="text-xl text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
			{t('home.subtitle')}
		</p>
	</div>

	<!-- Tools Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each tools as tool}
			<a
				href="/{lang}/{tool.id}"
				class="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-700 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
			>
				<!-- Gradient background on hover -->
				<div class="absolute inset-0 bg-gradient-to-br {tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

				<!-- Icon -->
				<div class="text-4xl mb-4">{tool.icon}</div>

				<!-- Title -->
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
					{t(`home.${tool.id}.title`)}
				</h3>

				<!-- Description -->
				<p class="text-sm text-gray-600 dark:text-dark-400">
					{t(`home.${tool.id}.desc`)}
				</p>

				<!-- Arrow indicator -->
				<div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
					<svg class="w-5 h-5 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</div>
			</a>
		{/each}
	</div>

	<!-- Features Section -->
	<div class="mt-20 text-center">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="p-6">
				<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Fast & Free</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">All tools are completely free to use with instant results</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Privacy First</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Your data stays in your browser - nothing is stored on servers</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Multi-Language</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Available in English, Korean, Japanese, and Chinese</p>
			</div>
		</div>
	</div>
</div>
