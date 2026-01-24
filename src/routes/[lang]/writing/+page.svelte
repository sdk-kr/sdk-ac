<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let input = '';
	let action: 'improve' | 'grammar' | 'simplify' | 'formal' | 'casual' = 'improve';
	let output = '';
	let copied = false;

	const actionPrompts = {
		improve: 'Improve this text by enhancing clarity, flow, and word choice while maintaining the original meaning:',
		grammar: 'Fix all grammar, spelling, and punctuation errors in this text:',
		simplify: 'Simplify this text using clearer, more accessible language while keeping the main ideas:',
		formal: 'Rewrite this text in a formal, professional tone suitable for business communication:',
		casual: 'Rewrite this text in a casual, conversational tone while keeping it friendly and approachable:'
	};

	function process() {
		if (!input.trim()) return;

		output = `${actionPrompts[action]}\n\n"${input}"\n\nProvide the improved version without explanations.`;
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
	<title>{t('writing.title')} - SDK.ac</title>
	<meta name="description" content={t('writing.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('writing.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('writing.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('writing.input')}
			</label>
			<textarea
				bind:value={input}
				placeholder={t('writing.inputPlaceholder')}
				class="w-full h-40 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Action Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('writing.action')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['improve', 'grammar', 'simplify', 'formal', 'casual'] as a}
					<button
						on:click={() => action = a}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {action === a
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`writing.actions.${a}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={process}
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
						{t('writing.result')}
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
