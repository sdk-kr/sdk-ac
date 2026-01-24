<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let emailType: 'business' | 'followup' | 'apology' | 'thankyou' | 'request' | 'introduction' = 'business';
	let recipient = '';
	let topic = '';
	let tone: 'formal' | 'friendly' | 'casual' = 'formal';
	let output = '';
	let copied = false;

	function generate() {
		if (!topic.trim()) return;

		const typeDesc = {
			business: 'a business inquiry email',
			followup: 'a follow-up email',
			apology: 'an apology email',
			thankyou: 'a thank you email',
			request: 'a request email',
			introduction: 'an introduction email'
		};

		const toneDesc = {
			formal: 'Use formal, professional language appropriate for business communication.',
			friendly: 'Use a warm, friendly but still professional tone.',
			casual: 'Use a relaxed, conversational tone while remaining respectful.'
		};

		let prompt = `Write ${typeDesc[emailType]}.\n\n`;
		if (recipient) {
			prompt += `Recipient: ${recipient}\n`;
		}
		prompt += `Topic/Purpose: ${topic}\n\n`;
		prompt += `${toneDesc[tone]}\n\n`;
		prompt += `Include:\n- Appropriate greeting\n- Clear body with the main message\n- Professional closing\n- Signature placeholder`;

		output = prompt;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		recipient = '';
		topic = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('email.title')} - SDK.ac</title>
	<meta name="description" content={t('email.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('email.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('email.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Email Type -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('email.type')}
			</label>
			<div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
				{#each ['business', 'followup', 'apology', 'thankyou', 'request', 'introduction'] as type}
					<button
						on:click={() => emailType = type}
						class="px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors {emailType === type
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`email.types.${type}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Recipient -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('email.recipient')}
			</label>
			<input
				type="text"
				bind:value={recipient}
				placeholder={t('email.recipientPlaceholder')}
				class="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
			/>
		</div>

		<!-- Topic -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('email.topic')}
			</label>
			<textarea
				bind:value={topic}
				placeholder={t('email.topicPlaceholder')}
				class="w-full h-24 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Tone -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('email.tone')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['formal', 'friendly', 'casual'] as t}
					<button
						on:click={() => tone = t}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {tone === t
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{common[lang]?.[`email.tones.${t}`] || common['en'][`email.tones.${t}`]}
					</button>
				{/each}
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
						{t('email.result')}
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
