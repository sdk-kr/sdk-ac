<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let code = '';
	let language = 'JavaScript';
	let level: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
	let output = '';
	let copied = false;

	const languages = [
		'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#',
		'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin'
	];

	function explain() {
		if (!code.trim()) return;

		const levelGuide = {
			beginner: 'Explain this code as if I am a complete beginner with no programming experience. Use simple analogies and avoid technical jargon.',
			intermediate: 'Explain this code assuming I understand basic programming concepts like variables, loops, and functions.',
			advanced: 'Provide a technical explanation including time/space complexity, design patterns used, and potential optimizations.'
		};

		output = `Please explain this ${language} code:\n\n\`\`\`${language.toLowerCase()}\n${code}\n\`\`\`\n\n${levelGuide[level]}`;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		code = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('code.title')} - SDK.ac</title>
	<meta name="description" content={t('code.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('code.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('code.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Code Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('code.input')}
			</label>
			<textarea
				bind:value={code}
				placeholder={t('code.inputPlaceholder')}
				class="w-full h-48 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none font-mono text-sm transition-colors"
			></textarea>
		</div>

		<!-- Language Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('code.language')}
			</label>
			<select
				bind:value={language}
				class="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
			>
				{#each languages as lang}
					<option value={lang}>{lang}</option>
				{/each}
			</select>
		</div>

		<!-- Level Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('code.level')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['beginner', 'intermediate', 'advanced'] as lv}
					<button
						on:click={() => level = lv}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {level === lv
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`code.levels.${lv}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={explain}
				disabled={!code.trim()}
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
						{t('code.result')}
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
