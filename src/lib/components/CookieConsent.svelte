<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, type Locale } from '$lib/i18n';
	import { safeGetItem, safeSetItem } from '$lib/utils/storage';

	let show = false;

	const texts: Record<string, Partial<Record<Locale, string>>> = {
		message: {
			en: 'This site uses cookies set by Google Analytics and Google AdSense. There are no accounts, and the text you enter into a tool stays in your browser. Ad personalization can be managed in your Google ad settings or through the consent tool shown by our advertising partner where it applies. See the Privacy Policy for details.',
			ko: '이 사이트는 Google Analytics 와 Google AdSense 가 설정하는 쿠키를 사용합니다. 계정은 없으며 도구에 입력한 텍스트는 브라우저 안에만 머무릅니다. 맞춤 광고는 Google 광고 설정에서, 또는 해당 지역에 표시되는 광고 파트너의 동의 도구에서 관리할 수 있습니다. 자세한 내용은 개인정보 처리방침을 참고하세요.'
		},
		accept: {
			en: 'OK', ko: '확인', ja: 'OK', zh: '确定',
			es: 'Aceptar', pt: 'OK', de: 'OK', fr: 'OK', hi: 'ठीक है'
		},
	};

	$: t = (key: string) => texts[key]?.[$locale] || texts[key]?.en || key;

	onMount(() => {
		if (!safeGetItem('cookie_consent')) {
			// Informational notice only: it records that the notice was seen and does not gate any script.
			show = true;
		}
	});

	function accept() {
		safeSetItem('cookie_consent', 'seen');
		show = false;
	}

</script>

{#if show}
	<div class="fixed bottom-0 left-0 right-0 z-[100] bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 px-4 py-4 shadow-2xl">
		<div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
			<p class="text-sm text-gray-600 dark:text-dark-300 flex-1">{t('message')}</p>
			<div class="flex gap-3 shrink-0">
				<button
					on:click={accept}
					class="px-4 py-2 text-sm bg-primary-500 hover:bg-primary-400 text-white font-medium rounded-lg transition-colors"
				>
					{t('accept')}
				</button>
			</div>
		</div>
	</div>
{/if}
