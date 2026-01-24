<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let subject = '';
	let style: 'photorealistic' | 'digital' | 'anime' | 'oil' | 'watercolor' | '3d' = 'photorealistic';
	let mood: 'dramatic' | 'peaceful' | 'mysterious' | 'vibrant' = 'dramatic';
	let output = '';
	let copied = false;

	const styleModifiers = {
		photorealistic: 'ultra realistic, high resolution, 8k, photograph, DSLR, professional photography',
		digital: 'digital art, trending on artstation, detailed illustration, vibrant colors',
		anime: 'anime style, studio ghibli, manga, detailed anime art, beautiful anime',
		oil: 'oil painting, classical art style, painterly, textured canvas, masterpiece',
		watercolor: 'watercolor painting, soft edges, flowing colors, artistic, delicate',
		'3d': '3D render, octane render, cinema 4d, blender, highly detailed, volumetric lighting'
	};

	const moodModifiers = {
		dramatic: 'dramatic lighting, cinematic, high contrast, intense atmosphere',
		peaceful: 'calm, serene, soft lighting, gentle, harmonious, tranquil',
		mysterious: 'dark and moody, foggy, enigmatic, shadowy, ethereal',
		vibrant: 'colorful, energetic, bright, lively, dynamic colors, bold'
	};

	function generate() {
		if (!subject.trim()) return;

		const prompt = `${subject}, ${styleModifiers[style]}, ${moodModifiers[mood]}, highly detailed, masterpiece, best quality`;
		output = prompt;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		subject = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('image.title')} - SDK.ac</title>
	<meta name="description" content={t('image.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('image.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('image.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Subject Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('image.subject')}
			</label>
			<textarea
				bind:value={subject}
				placeholder={t('image.subjectPlaceholder')}
				class="w-full h-24 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Style Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('image.style')}
			</label>
			<div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
				{#each ['photorealistic', 'digital', 'anime', 'oil', 'watercolor', '3d'] as s}
					<button
						on:click={() => style = s}
						class="px-3 py-2 rounded-lg text-sm font-medium transition-colors {style === s
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`image.styles.${s}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Mood Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('image.mood')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['dramatic', 'peaceful', 'mysterious', 'vibrant'] as m}
					<button
						on:click={() => mood = m}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {mood === m
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`image.moods.${m}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={generate}
				disabled={!subject.trim()}
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
						{t('image.result')}
					</label>
					<button
						on:click={copyOutput}
						class="text-sm px-3 py-1 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-lg transition-colors"
					>
						{copied ? t('ui.copied') : t('ui.copy')}
					</button>
				</div>
				<div class="p-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl">
					<p class="text-sm text-gray-800 dark:text-dark-200">{output}</p>
				</div>
			</div>
		{/if}
	</div>
</div>
