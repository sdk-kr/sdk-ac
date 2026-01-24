<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: basePath = `/${lang}`;

	const content: Record<Locale, { title: string; subtitle: string; guides: { title: string; desc: string; href: string }[] }> = {
		en: {
			title: 'Guides & Tutorials',
			subtitle: 'Learn how to use SDK.ac AI tools effectively',
			guides: [
				{ title: 'Prompt Generator Guide', desc: 'Learn how to create effective AI prompts for ChatGPT, Claude, and other LLMs', href: '/guide/prompt' },
				{ title: 'Image Prompt Builder Guide', desc: 'Master the art of creating detailed prompts for Midjourney, DALL-E, and Stable Diffusion', href: '/guide/image' },
				{ title: 'Text Summarizer Guide', desc: 'Efficiently summarize long articles, documents, and research papers', href: '/guide/summarizer' },
				{ title: 'AI Translator Guide', desc: 'Get accurate translations while preserving context and nuance', href: '/guide/translator' },
				{ title: 'Code Explainer Guide', desc: 'Understand complex code with AI-powered explanations', href: '/guide/code' },
				{ title: 'Email Writer Guide', desc: 'Write professional emails quickly with AI assistance', href: '/guide/email' },
				{ title: 'Hashtag Generator Guide', desc: 'Boost your social media reach with optimized hashtags', href: '/guide/hashtag' },
				{ title: 'Writing Assistant Guide', desc: 'Improve your writing with AI-powered suggestions', href: '/guide/writing' }
			]
		},
		ko: {
			title: '가이드 & 튜토리얼',
			subtitle: 'SDK.ac AI 도구를 효과적으로 사용하는 방법',
			guides: [
				{ title: '프롬프트 생성기 가이드', desc: 'ChatGPT, Claude 및 기타 LLM을 위한 효과적인 AI 프롬프트 만들기', href: '/guide/prompt' },
				{ title: '이미지 프롬프트 빌더 가이드', desc: 'Midjourney, DALL-E, Stable Diffusion을 위한 상세 프롬프트 작성법', href: '/guide/image' },
				{ title: '텍스트 요약기 가이드', desc: '긴 기사, 문서, 연구 논문을 효율적으로 요약하기', href: '/guide/summarizer' },
				{ title: 'AI 번역기 가이드', desc: '맥락과 뉘앙스를 유지하면서 정확한 번역 얻기', href: '/guide/translator' },
				{ title: '코드 설명기 가이드', desc: 'AI 기반 설명으로 복잡한 코드 이해하기', href: '/guide/code' },
				{ title: '이메일 작성기 가이드', desc: 'AI 도움으로 전문적인 이메일 빠르게 작성하기', href: '/guide/email' },
				{ title: '해시태그 생성기 가이드', desc: '최적화된 해시태그로 소셜 미디어 도달률 높이기', href: '/guide/hashtag' },
				{ title: '글쓰기 도우미 가이드', desc: 'AI 기반 제안으로 글쓰기 실력 향상하기', href: '/guide/writing' }
			]
		},
		ja: {
			title: 'ガイド＆チュートリアル',
			subtitle: 'SDK.ac AIツールを効果的に使用する方法',
			guides: [
				{ title: 'プロンプト生成ガイド', desc: 'ChatGPT、Claude、その他のLLM用の効果的なAIプロンプトの作成方法', href: '/guide/prompt' },
				{ title: '画像プロンプトビルダーガイド', desc: 'Midjourney、DALL-E、Stable Diffusion用の詳細プロンプト作成術', href: '/guide/image' },
				{ title: 'テキスト要約ガイド', desc: '長い記事、文書、研究論文を効率的に要約', href: '/guide/summarizer' },
				{ title: 'AI翻訳ガイド', desc: '文脈とニュアンスを保ちながら正確な翻訳を取得', href: '/guide/translator' },
				{ title: 'コード説明ガイド', desc: 'AI搭載の説明で複雑なコードを理解', href: '/guide/code' },
				{ title: 'メール作成ガイド', desc: 'AIの支援でプロフェッショナルなメールを素早く作成', href: '/guide/email' },
				{ title: 'ハッシュタグ生成ガイド', desc: '最適化されたハッシュタグでソーシャルメディアのリーチを向上', href: '/guide/hashtag' },
				{ title: 'ライティングアシスタントガイド', desc: 'AI搭載の提案でライティングスキルを向上', href: '/guide/writing' }
			]
		},
		zh: {
			title: '指南与教程',
			subtitle: '学习如何有效使用 SDK.ac AI 工具',
			guides: [
				{ title: '提示词生成器指南', desc: '学习为 ChatGPT、Claude 和其他 LLM 创建有效的 AI 提示词', href: '/guide/prompt' },
				{ title: '图像提示词构建器指南', desc: '掌握为 Midjourney、DALL-E、Stable Diffusion 创建详细提示词的艺术', href: '/guide/image' },
				{ title: '文本摘要指南', desc: '高效总结长篇文章、文档和研究论文', href: '/guide/summarizer' },
				{ title: 'AI 翻译指南', desc: '在保持上下文和细微差别的同时获得准确的翻译', href: '/guide/translator' },
				{ title: '代码解释器指南', desc: '通过 AI 驱动的解释理解复杂代码', href: '/guide/code' },
				{ title: '邮件写作指南', desc: '借助 AI 快速撰写专业邮件', href: '/guide/email' },
				{ title: '标签生成器指南', desc: '使用优化的标签提升社交媒体影响力', href: '/guide/hashtag' },
				{ title: '写作助手指南', desc: '通过 AI 建议提高写作水平', href: '/guide/writing' }
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.ac</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t.subtitle}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-6">
		{#each t.guides as guide}
			<a href="{basePath}{guide.href}" class="block bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
				<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">{guide.title}</h2>
				<p class="text-gray-600 dark:text-dark-400 text-sm">{guide.desc}</p>
			</a>
		{/each}
	</div>
</div>
