<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let input = '';
	let fromLang = 'English';
	let toLang = 'Korean';
	let output = '';
	let copied = false;

	const languages = [
		'English', 'Korean', 'Japanese', 'Chinese', 'Spanish', 'French',
		'German', 'Portuguese', 'Italian', 'Russian', 'Arabic', 'Hindi'
	];

	function translate() {
		if (!input.trim()) return;

		// Generate translation prompt for AI
		output = `Please translate the following text from ${fromLang} to ${toLang}:\n\n"${input}"\n\nProvide only the translation without any explanation.`;
	}

	function swapLanguages() {
		const temp = fromLang;
		fromLang = toLang;
		toLang = temp;
		if (output) translate();
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		input = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('translator.title')} - SDK.ac</title>
	<meta name="description" content={t('translator.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('translator.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('translator.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Language Selection -->
		<div class="flex items-center gap-4">
			<div class="flex-1">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('translator.from')}
				</label>
				<select
					bind:value={fromLang}
					class="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
				>
					{#each languages as language}
						<option value={language}>{language}</option>
					{/each}
				</select>
			</div>

			<button
				on:click={swapLanguages}
				class="mt-6 p-3 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-xl transition-colors"
				aria-label={t('translator.swap')}
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
				</svg>
			</button>

			<div class="flex-1">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('translator.to')}
				</label>
				<select
					bind:value={toLang}
					class="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
				>
					{#each languages as language}
						<option value={language}>{language}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Input -->
		<div>
			<textarea
				bind:value={input}
				placeholder={t('translator.inputPlaceholder')}
				class="w-full h-40 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={translate}
				disabled={!input.trim()}
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
						{t('ui.output')}
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
