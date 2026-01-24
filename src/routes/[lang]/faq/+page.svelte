<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; subtitle: string; faqs: { q: string; a: string }[] }> = {
		en: {
			title: 'Frequently Asked Questions',
			subtitle: 'Find answers to common questions about SDK.ac',
			faqs: [
				{ q: 'What is SDK.ac?', a: 'SDK.ac is a collection of free AI-powered tools designed to help creators, developers, and professionals work more efficiently. Our tools include prompt generators, image prompt builders, text summarizers, translators, and more.' },
				{ q: 'Is SDK.ac free to use?', a: 'Yes, all tools on SDK.ac are completely free to use. No registration or subscription is required.' },
				{ q: 'Do I need to create an account?', a: 'No account is needed. You can use all our tools immediately without signing up.' },
				{ q: 'Is my data safe?', a: 'Absolutely. All processing happens in your browser. We do not store, track, or transmit any of your data to our servers.' },
				{ q: 'Can I use the generated content commercially?', a: 'Yes, you own the content you create using our tools. You can use it for personal or commercial purposes.' },
				{ q: 'Which browsers are supported?', a: 'SDK.ac works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience.' },
				{ q: 'Do the tools work offline?', a: 'Most of our tools work entirely in your browser. However, some features may require an internet connection.' },
				{ q: 'How do I report a bug or suggest a feature?', a: 'Please contact us at hello@sdk.ac with your feedback. We appreciate all suggestions and bug reports.' },
				{ q: 'Are there any usage limits?', a: 'There are no usage limits. You can use our tools as much as you need.' },
				{ q: 'How often are new tools added?', a: 'We regularly add new tools and improve existing ones based on user feedback. Follow us to stay updated.' }
			]
		},
		ko: {
			title: '자주 묻는 질문',
			subtitle: 'SDK.ac에 대한 일반적인 질문에 대한 답변',
			faqs: [
				{ q: 'SDK.ac란 무엇인가요?', a: 'SDK.ac는 크리에이터, 개발자, 전문가들이 더 효율적으로 일할 수 있도록 설계된 무료 AI 도구 모음입니다. 프롬프트 생성기, 이미지 프롬프트 빌더, 텍스트 요약기, 번역기 등을 제공합니다.' },
				{ q: 'SDK.ac는 무료인가요?', a: '네, SDK.ac의 모든 도구는 완전히 무료입니다. 등록이나 구독이 필요 없습니다.' },
				{ q: '계정을 만들어야 하나요?', a: '계정이 필요 없습니다. 가입 없이 모든 도구를 즉시 사용할 수 있습니다.' },
				{ q: '제 데이터는 안전한가요?', a: '물론입니다. 모든 처리는 브라우저에서 이루어집니다. 데이터를 저장, 추적하거나 서버로 전송하지 않습니다.' },
				{ q: '생성된 콘텐츠를 상업적으로 사용할 수 있나요?', a: '네, 도구를 사용하여 만든 콘텐츠는 본인 소유입니다. 개인적 또는 상업적 목적으로 사용할 수 있습니다.' },
				{ q: '어떤 브라우저가 지원되나요?', a: 'SDK.ac는 Chrome, Firefox, Safari, Edge를 포함한 모든 최신 브라우저에서 작동합니다. 최상의 경험을 위해 최신 버전 사용을 권장합니다.' },
				{ q: '도구가 오프라인에서 작동하나요?', a: '대부분의 도구는 브라우저에서 완전히 작동합니다. 그러나 일부 기능은 인터넷 연결이 필요할 수 있습니다.' },
				{ q: '버그를 신고하거나 기능을 제안하려면?', a: 'hello@sdk.ac로 피드백을 보내주세요. 모든 제안과 버그 신고에 감사드립니다.' },
				{ q: '사용 제한이 있나요?', a: '사용 제한이 없습니다. 필요한 만큼 도구를 사용할 수 있습니다.' },
				{ q: '새 도구는 얼마나 자주 추가되나요?', a: '사용자 피드백을 바탕으로 정기적으로 새 도구를 추가하고 기존 도구를 개선합니다. 업데이트 소식을 받으려면 팔로우해 주세요.' }
			]
		},
		ja: {
			title: 'よくある質問',
			subtitle: 'SDK.acに関する一般的な質問への回答',
			faqs: [
				{ q: 'SDK.acとは？', a: 'SDK.acは、クリエイター、開発者、プロフェッショナルがより効率的に作業できるよう設計された無料AIツールのコレクションです。プロンプト生成、画像プロンプトビルダー、テキスト要約、翻訳などを提供しています。' },
				{ q: 'SDK.acは無料ですか？', a: 'はい、SDK.acのすべてのツールは完全無料です。登録やサブスクリプションは不要です。' },
				{ q: 'アカウントを作成する必要がありますか？', a: 'アカウントは不要です。サインアップなしですべてのツールをすぐに使用できます。' },
				{ q: 'データは安全ですか？', a: 'もちろんです。すべての処理はブラウザ内で行われます。データの保存、追跡、サーバーへの送信は一切行いません。' },
				{ q: '生成したコンテンツを商用利用できますか？', a: 'はい、ツールを使用して作成したコンテンツはあなたのものです。個人的または商用目的で使用できます。' },
				{ q: 'どのブラウザがサポートされていますか？', a: 'SDK.acはChrome、Firefox、Safari、Edgeを含むすべての最新ブラウザで動作します。最高の体験のために最新バージョンの使用をお勧めします。' },
				{ q: 'ツールはオフラインで動作しますか？', a: 'ほとんどのツールは完全にブラウザ内で動作します。ただし、一部の機能にはインターネット接続が必要な場合があります。' },
				{ q: 'バグの報告や機能の提案は？', a: 'hello@sdk.acまでフィードバックをお送りください。すべての提案とバグ報告に感謝します。' },
				{ q: '使用制限はありますか？', a: '使用制限はありません。必要なだけツールを使用できます。' },
				{ q: '新しいツールはどのくらいの頻度で追加されますか？', a: 'ユーザーフィードバックに基づいて定期的に新しいツールを追加し、既存のツールを改善しています。最新情報を受け取るにはフォローしてください。' }
			]
		},
		zh: {
			title: '常见问题',
			subtitle: '查找有关 SDK.ac 的常见问题解答',
			faqs: [
				{ q: '什么是 SDK.ac？', a: 'SDK.ac 是一系列免费的 AI 工具，旨在帮助创作者、开发者和专业人士更高效地工作。我们提供提示词生成器、图像提示词构建器、文本摘要、翻译等工具。' },
				{ q: 'SDK.ac 免费吗？', a: '是的，SDK.ac 上的所有工具完全免费。无需注册或订阅。' },
				{ q: '需要创建账户吗？', a: '不需要账户。您可以立即使用所有工具，无需注册。' },
				{ q: '我的数据安全吗？', a: '绝对安全。所有处理都在您的浏览器中进行。我们不存储、跟踪或传输您的任何数据到我们的服务器。' },
				{ q: '可以商业使用生成的内容吗？', a: '可以，使用我们工具创建的内容属于您。您可以用于个人或商业目的。' },
				{ q: '支持哪些浏览器？', a: 'SDK.ac 适用于所有现代浏览器，包括 Chrome、Firefox、Safari 和 Edge。建议使用最新版本以获得最佳体验。' },
				{ q: '工具可以离线使用吗？', a: '大多数工具完全在浏览器中运行。但某些功能可能需要互联网连接。' },
				{ q: '如何报告错误或建议功能？', a: '请通过 hello@sdk.ac 发送反馈。我们感谢所有建议和错误报告。' },
				{ q: '有使用限制吗？', a: '没有使用限制。您可以根据需要使用我们的工具。' },
				{ q: '多久添加新工具？', a: '我们根据用户反馈定期添加新工具并改进现有工具。关注我们以获取最新消息。' }
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

	<div class="space-y-4">
		{#each t.faqs as faq, i}
			<details class="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700">
				<summary class="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 dark:text-dark-100">
					<span>{faq.q}</span>
					<svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</summary>
				<div class="px-6 pb-6">
					<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{faq.a}</p>
				</div>
			</details>
		{/each}
	</div>
</div>
