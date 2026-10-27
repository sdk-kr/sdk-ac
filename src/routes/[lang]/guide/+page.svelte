<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: basePath = `/${lang}`;

	type GuideIndex = { title: string; subtitle: string; guides: { title: string; desc: string; href: string }[] };
	const content: Partial<Record<Locale, GuideIndex>> & { en: GuideIndex } = {
		en: {
			title: 'Guides & Tutorials',
			subtitle: "Learn prompt assembly and opening-sentence extraction with worked examples",
			guides: [
				{ title: "Prompt Generator Guide", desc: "Assemble a request from your task, optional context, and a fixed style instruction. No model is called.", href: '/guide/prompt' },
				{ title: "Image Prompt Builder Guide", desc: "Combine a subject with fixed style and mood phrases. Produces text, not an image.", href: '/guide/image' },
				{ title: "Leading-Sentence Summarizer Guide", desc: "Extract the first punctuation-delimited chunks locally. No importance ranking or model is used.", href: '/guide/summarizer' },
				{ title: "Translation Prompt Builder Guide", desc: "Build a translation request from your text and selected languages. Does not translate it.", href: '/guide/translator' },
				{ title: "Code Explanation Prompt Builder Guide", desc: "Wrap code with its language label and a fixed explanation request. Does not run or analyze it.", href: '/guide/code' },
				{ title: "Email Prompt Builder Guide", desc: "Build an email drafting request from type, topic, recipient, and tone. Does not draft or send email.", href: '/guide/email' },
				{ title: "Hashtag Prompt Builder Guide", desc: "Build a hashtag request from topic, platform, and count. Does not fetch trends or generate tags.", href: '/guide/hashtag' },
				{ title: "Writing Revision Prompt Builder Guide", desc: "Combine your text with a fixed revision instruction. Does not edit or correct the text itself.", href: '/guide/writing' }
			]
		},
		ko: {
			title: '가이드 & 튜토리얼',
			subtitle: "프롬프트 생성과 앞문장 추출을 실제 예제로 배우세요",
			guides: [
				{ title: "프롬프트 생성기 가이드", desc: "작업, 선택 맥락, 고정 스타일 지시를 조립해 요청문을 만듭니다. 모델은 호출하지 않습니다.", href: '/guide/prompt' },
				{ title: "이미지 프롬프트 생성기 가이드", desc: "대상에 고정 스타일·분위기 문구를 결합합니다. 이미지가 아닌 텍스트를 만듭니다.", href: '/guide/image' },
				{ title: "앞문장 추출 요약기 가이드", desc: "문장부호로 나눈 앞쪽 구간을 로컬에서 추출합니다. 중요도 평가나 모델을 사용하지 않습니다.", href: '/guide/summarizer' },
				{ title: "번역 프롬프트 생성기 가이드", desc: "텍스트와 선택 언어로 번역 요청문을 만듭니다. 직접 번역하지 않습니다.", href: '/guide/translator' },
				{ title: "코드 설명 프롬프트 생성기 가이드", desc: "코드에 언어 표시와 고정 설명 요청을 붙입니다. 실행하거나 분석하지 않습니다.", href: '/guide/code' },
				{ title: "이메일 프롬프트 생성기 가이드", desc: "유형, 주제, 수신자, 어조로 이메일 작성 요청을 만듭니다. 직접 작성하거나 발송하지 않습니다.", href: '/guide/email' },
				{ title: "해시태그 프롬프트 생성기 가이드", desc: "주제, 플랫폼, 개수로 해시태그 요청문을 만듭니다. 트렌드를 조회하거나 태그를 직접 만들지 않습니다.", href: '/guide/hashtag' },
				{ title: "글쓰기 수정 프롬프트 생성기 가이드", desc: "텍스트에 고정 수정 지시를 결합합니다. 텍스트를 직접 편집하거나 교정하지 않습니다.", href: '/guide/writing' }
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
