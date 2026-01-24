<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; subtitle: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Contact Us',
			subtitle: 'We\'d love to hear from you',
			sections: [
				{
					heading: 'General Inquiries',
					text: 'For general questions, feedback, or suggestions about our AI tools, please email us at hello@sdk.ac'
				},
				{
					heading: 'Technical Support',
					text: 'If you encounter any issues with our tools, please describe the problem in detail and send it to support@sdk.ac'
				},
				{
					heading: 'Partnership & Business',
					text: 'For business partnerships, collaborations, or advertising inquiries, contact us at business@sdk.ac'
				},
				{
					heading: 'Response Time',
					text: 'We typically respond within 24-48 hours during business days. Thank you for your patience.'
				}
			]
		},
		ko: {
			title: '문의하기',
			subtitle: '여러분의 의견을 기다립니다',
			sections: [
				{
					heading: '일반 문의',
					text: 'AI 도구에 대한 일반적인 질문, 피드백 또는 제안은 hello@sdk.ac로 이메일을 보내주세요.'
				},
				{
					heading: '기술 지원',
					text: '도구 사용 중 문제가 발생하면 문제를 자세히 설명하여 support@sdk.ac로 보내주세요.'
				},
				{
					heading: '파트너십 & 비즈니스',
					text: '비즈니스 파트너십, 협업 또는 광고 문의는 business@sdk.ac로 연락해 주세요.'
				},
				{
					heading: '응답 시간',
					text: '영업일 기준 24-48시간 내에 답변드립니다. 양해 부탁드립니다.'
				}
			]
		},
		ja: {
			title: 'お問い合わせ',
			subtitle: 'ご連絡をお待ちしております',
			sections: [
				{
					heading: '一般的なお問い合わせ',
					text: 'AIツールに関する一般的なご質問、フィードバック、ご提案は hello@sdk.ac までメールでお送りください。'
				},
				{
					heading: '技術サポート',
					text: 'ツールで問題が発生した場合は、問題を詳しく説明して support@sdk.ac までお送りください。'
				},
				{
					heading: 'パートナーシップ & ビジネス',
					text: 'ビジネスパートナーシップ、コラボレーション、広告に関するお問い合わせは business@sdk.ac までご連絡ください。'
				},
				{
					heading: '返信時間',
					text: '営業日の24〜48時間以内に返信いたします。ご了承ください。'
				}
			]
		},
		zh: {
			title: '联系我们',
			subtitle: '期待您的来信',
			sections: [
				{
					heading: '一般咨询',
					text: '如有关于AI工具的一般问题、反馈或建议，请发送邮件至 hello@sdk.ac'
				},
				{
					heading: '技术支持',
					text: '如果您在使用工具时遇到任何问题，请详细描述问题并发送至 support@sdk.ac'
				},
				{
					heading: '合作与商务',
					text: '如有商业合作、协作或广告咨询，请联系 business@sdk.ac'
				},
				{
					heading: '响应时间',
					text: '我们通常在工作日的24-48小时内回复。感谢您的耐心等待。'
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.ac</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t.subtitle}</p>
	</div>

	<div class="space-y-8">
		{#each t.sections as section}
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{section.heading}</h2>
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>

	<div class="mt-12 text-center">
		<p class="text-sm text-gray-500 dark:text-dark-500">
			SDK.ac - Free AI Tools for Everyone
		</p>
	</div>
</div>
