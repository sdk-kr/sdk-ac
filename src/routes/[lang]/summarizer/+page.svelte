<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let input = '';
	let length: 'short' | 'medium' | 'long' = 'medium';
	let output = '';
	let copied = false;

	function summarize() {
		if (!input.trim()) return;

		const sentences = input.match(/[^.!?]+[.!?]+/g) || [input];
		const words = input.split(/\s+/).length;

		let summaryLength = 0;
		if (length === 'short') {
			summaryLength = Math.min(2, sentences.length);
		} else if (length === 'medium') {
			summaryLength = Math.min(Math.ceil(sentences.length * 0.3), 5);
		} else {
			summaryLength = Math.min(Math.ceil(sentences.length * 0.5), 10);
		}

		// Simple extractive summary - take first N sentences
		const summarySentences = sentences.slice(0, Math.max(1, summaryLength));
		output = summarySentences.join(' ').trim();

		// Add statistics
		const summaryWords = output.split(/\s+/).length;
		const reduction = Math.round((1 - summaryWords / words) * 100);
		output += `\n\n---\nOriginal: ${words} words | Summary: ${summaryWords} words | Reduced by ${reduction}%`;
	}

	function copyOutput() {
		if (!output) return;
		const textOnly = output.split('\n---')[0].trim();
		navigator.clipboard.writeText(textOnly);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		input = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('summarizer.title')} - SDK.ac</title>
	<meta name="description" content={t('summarizer.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('summarizer.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('summarizer.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('summarizer.input')}
			</label>
			<textarea
				bind:value={input}
				placeholder={t('summarizer.inputPlaceholder')}
				class="w-full h-48 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Length Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('summarizer.length')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['short', 'medium', 'long'] as len}
					<button
						on:click={() => length = len}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {length === len
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`summarizer.lengths.${len}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={summarize}
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
						{t('summarizer.result')}
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
