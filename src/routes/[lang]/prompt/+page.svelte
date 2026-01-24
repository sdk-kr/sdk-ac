<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let task = '';
	let context = '';
	let style: 'detailed' | 'concise' | 'creative' | 'professional' = 'detailed';
	let output = '';
	let copied = false;

	function generate() {
		if (!task.trim()) return;

		const styleGuide = {
			detailed: 'Provide a comprehensive, step-by-step response with examples and explanations.',
			concise: 'Be brief and to the point. Focus only on essential information.',
			creative: 'Think outside the box. Provide innovative and unique perspectives.',
			professional: 'Use formal language and maintain a business-appropriate tone.'
		};

		let prompt = `You are an expert assistant. ${styleGuide[style]}\n\n`;
		prompt += `Task: ${task}\n`;

		if (context.trim()) {
			prompt += `\nContext: ${context}\n`;
		}

		prompt += `\nPlease provide a thorough and helpful response.`;

		output = prompt;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		task = '';
		context = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('prompt.title')} - SDK.ac</title>
	<meta name="description" content={t('prompt.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('prompt.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('prompt.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Task Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('prompt.task')}
			</label>
			<textarea
				bind:value={task}
				placeholder={t('prompt.taskPlaceholder')}
				class="w-full h-24 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Context Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('prompt.context')}
			</label>
			<textarea
				bind:value={context}
				placeholder={t('prompt.contextPlaceholder')}
				class="w-full h-20 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Style Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('prompt.style')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['detailed', 'concise', 'creative', 'professional'] as s}
					<button
						on:click={() => style = s}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {style === s
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`prompt.styles.${s}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={generate}
				disabled={!task.trim()}
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
						{t('prompt.result')}
					</label>
					<button
						on:click={copyOutput}
						class="text-sm px-3 py-1 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-lg transition-colors"
					>
						{copied ? t('ui.copied') : t('ui.copy')}
					</button>
				</div>
				<div class="p-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl">
					<pre class="whitespace-pre-wrap text-sm text-gray-800 dark:text-dark-200 font-mono">{output}</pre>
				</div>
			</div>
		{/if}
	</div>
</div>
