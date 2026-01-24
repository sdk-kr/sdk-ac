<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let topic = '';
	let platform = 'Instagram';
	let count = 15;
	let output = '';
	let copied = false;

	const platforms = ['Instagram', 'Twitter', 'TikTok', 'LinkedIn', 'YouTube'];

	const platformTips = {
		Instagram: 'Mix popular and niche hashtags. Use 20-30 for maximum reach.',
		Twitter: 'Use 1-3 relevant hashtags. More can reduce engagement.',
		TikTok: 'Trending hashtags boost visibility. Mix broad and specific.',
		LinkedIn: 'Keep it professional. Use 3-5 industry-relevant hashtags.',
		YouTube: 'Tags help SEO. Include variations and related terms.'
	};

	function generate() {
		if (!topic.trim()) return;

		const prompt = `Generate ${count} relevant hashtags for ${platform} about: "${topic}"

Requirements:
- ${platformTips[platform]}
- Include a mix of popular (high volume) and niche (specific) hashtags
- Make them relevant to the topic
- Format: List each hashtag on a new line, starting with #

Please provide the hashtags only, no explanations.`;

		output = prompt;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		topic = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('hashtag.title')} - SDK.ac</title>
	<meta name="description" content={t('hashtag.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('hashtag.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('hashtag.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Topic Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('hashtag.topic')}
			</label>
			<textarea
				bind:value={topic}
				placeholder={t('hashtag.topicPlaceholder')}
				class="w-full h-24 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Platform Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('hashtag.platform')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each platforms as p}
					<button
						on:click={() => platform = p}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {platform === p
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{p}
					</button>
				{/each}
			</div>
			<p class="mt-2 text-xs text-gray-500 dark:text-dark-500">{platformTips[platform]}</p>
		</div>

		<!-- Count Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('hashtag.count')}: {count}
			</label>
			<input
				type="range"
				bind:value={count}
				min="5"
				max="30"
				step="5"
				class="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-400"
			/>
			<div class="flex justify-between text-xs text-gray-500 dark:text-dark-500 mt-1">
				<span>5</span>
				<span>30</span>
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={generate}
				disabled={!topic.trim()}
				class="flex-1 py-3 bg-primary-400 hover:bg-primary-500 text-dark-900 font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{t('ui.generate')}
			</button>
			<button
				on:click={clear}
				class="px-6 py-3 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600 font-medium rounded-xl transition-colors"
			>
				{t('ui.clear')}
			</button>
		</div>

		<!-- Output -->
		{#if output}
			<div>
				<div class="flex justify-between items-center mb-2">
					<label class="text-sm font-medium text-gray-700 dark:text-dark-300">
						{t('hashtag.result')}
					</label>
					<button
						on:click={copyOutput}
						class="text-sm px-3 py-1 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-lg transition-colors"
					>
						{copied ? t('ui.copied') : t('ui.copy')}
					</button>
				</div>
				<div class="p-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl">
					<pre class="whitespace-pre-wrap text-sm text-gray-800 dark:text-dark-200">{output}</pre>
				</div>
			</div>
		{/if}
	</div>
</div>
