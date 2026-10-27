<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const tools = [
		{ id: 'prompt', icon: '💬', color: 'from-purple-500 to-indigo-500' },
		{ id: 'image', icon: '🎨', color: 'from-pink-500 to-rose-500' },
		{ id: 'summarizer', icon: '📝', color: 'from-blue-500 to-cyan-500' },
		{ id: 'translator', icon: '🌐', color: 'from-green-500 to-emerald-500' },
		{ id: 'code', icon: '💻', color: 'from-orange-500 to-amber-500' },
		{ id: 'email', icon: '📧', color: 'from-red-500 to-pink-500' },
		{ id: 'hashtag', icon: '#️⃣', color: 'from-violet-500 to-purple-500' },
		{ id: 'writing', icon: '✍️', color: 'from-teal-500 to-cyan-500' }
	];

	// Long-form, first-person SSR content for AdSense compliance.
	// en/ko/ja/zh have native copy; the other locales fall back to English
	// (and are noindexed in the layout).
	type IntroSection = {
		heading: Partial<Record<Locale, string>> & { en: string };
		paragraphs: Partial<Record<Locale, string[]>> & { en: string[] };
	};

	const introSections: IntroSection[] = [
		{
			heading: {
				en: 'Why I built this site',
				ko: '이 사이트를 만든 이유'
			},
			paragraphs: {
				en: [
					"SDK.ac brings together seven prompt builders and one leading-sentence extraction tool. The builders combine your text and selected options with fixed instructions in your browser. They do not call an AI model, so the result is a request you can review and take to a separate assistant. The summarizer returns an excerpt from the beginning of your text instead of a prompt.",
					"The tools are free to use without an account or usage counter. Choose the tool for the request you need, fill in its fields, and inspect the generated text. A separate AI service may have its own account requirements, limits, and charges.",
					"Your tool input is processed in page memory. Copying a generated request to another service is a separate step you choose, and that service handles the text under its own policies. The tool pages explain their local behavior and provide examples you can reproduce."
				],
				ko: [
					"SDK.ac는 프롬프트 생성기 7개와 앞문장 추출 도구 하나를 제공합니다. 생성기는 브라우저에서 입력과 선택값을 고정 지시문과 결합합니다. AI 모델을 호출하지 않으므로 결과는 검토한 뒤 외부 AI로 가져갈 요청문입니다. 요약기는 프롬프트 대신 입력 앞부분의 발췌문을 반환합니다.",
					"도구는 계정이나 사용 횟수 제한 없이 무료로 사용할 수 있습니다. 필요한 요청에 맞는 도구를 선택하고 필드를 채운 뒤 생성된 텍스트를 확인하세요. 외부 AI 서비스에는 별도 계정 요건, 제한, 요금이 있을 수 있습니다.",
					"도구 입력은 페이지 메모리에서 처리됩니다. 생성된 요청을 다른 서비스로 복사하는 것은 이용자가 선택하는 별도 단계이며, 해당 서비스는 자체 방침에 따라 텍스트를 처리합니다. 도구 페이지에는 로컬 동작 설명과 재현 가능한 예제가 있습니다."
				],
				zh: [
					"我做 sdk.ac，是因为受够了给别人发所谓“免费”AI 工具的链接，结果那只是一个获客漏斗。你点了“总结”，得到的不是摘要，而是注册墙、每天三次的次数限制，或者一个“为了验证身份”要你填银行卡的付款页。背后那次 AI 请求的成本只有几分之一美分，而这类工具大多只是在文本框外面包了一层提示词模板。为这种东西收月费让我觉得不对，所以我做了自己想要的版本：打开页面，输入，拿到结果，离开。",
					'这里的一切都免费，不用登录，也没有次数限制。没有账号系统，是因为没有什么值得锁在账号后面。没有专业版，是因为这些工具刻意做得简单，加个专业版只会是注水。网站靠克制的广告和极低的运营成本维持——部署在边缘节点上的静态 SvelteKit 网站，每个访客的成本几乎可以忽略。',
					'隐私在这里比在大多数网站上更重要，因为人们贴进总结器或邮件写作器的，往往正是他们绝不会公开发布的文字：绩效评估、写了一半的道歉、内部文件。我们不要求注册账号，不给你建画像，也不存档你输入过的内容。这些工具的设计是：你的输入只在请求处理期间存在，之后就消失了。'
				]
			}
		},
		{
			heading: {
				en: 'What each tool is actually for',
				ko: '각 도구는 무엇을 위한 것인가'
			},
			paragraphs: {
				en: [
					"Translation Prompt Builder inserts your source text and chosen source and target languages into a translation request. It does not translate the text or detect its language. Leading-Sentence Summarizer extracts opening chunks separated by periods, exclamation marks, or question marks. It does not identify the main argument or rank sentences by importance.",
					"Prompt Generator combines a task, optional context, and a fixed style instruction. Put any required format or constraints in the text fields. Image Prompt Builder combines a subject with fixed style and mood phrases; it creates no images and has no separate rendering controls.",
					"Code Explanation Prompt Builder wraps your snippet with a language label and a request suited to the selected explanation level. It does not execute or analyze code. Email Prompt Builder assembles an email drafting request from type, topic, optional recipient, and tone, followed by a fixed checklist. It does not write or send the email.",
					"Hashtag Prompt Builder inserts your topic, platform, and requested count into a fixed request. Platform tips are stored text, not trend research. Writing Revision Prompt Builder combines existing text with one editing instruction: improvement, grammar correction, simplification, formal tone, or casual tone. The text itself remains unchanged in its output."
				],
				ko: [
					"번역 프롬프트 생성기는 원문과 선택한 원본·대상 언어를 번역 요청에 넣습니다. 직접 번역하거나 언어를 감지하지 않습니다. 앞문장 추출 요약기는 마침표, 느낌표, 물음표로 나눈 앞쪽 구간을 추출합니다. 핵심 논지를 판별하거나 문장의 중요도를 평가하지 않습니다.",
					"프롬프트 생성기는 작업, 선택 맥락, 고정 스타일 지시를 결합합니다. 필요한 형식이나 제약은 텍스트 필드에 적으세요. 이미지 프롬프트 생성기는 대상과 고정 스타일·분위기 문구를 결합하며, 이미지를 만들거나 별도 렌더링 설정을 제공하지 않습니다.",
					"코드 설명 프롬프트 생성기는 코드에 언어 표시와 선택한 설명 수준의 요청을 붙입니다. 코드를 실행하거나 분석하지 않습니다. 이메일 프롬프트 생성기는 유형, 주제, 선택 수신자, 어조로 작성 요청을 조립하고 고정 목록을 덧붙입니다. 이메일을 직접 쓰거나 보내지 않습니다.",
					"해시태그 프롬프트 생성기는 주제, 플랫폼, 요청 개수를 고정 요청에 넣습니다. 플랫폼 팁은 트렌드 조사가 아닌 저장된 문구입니다. 글쓰기 수정 프롬프트 생성기는 기존 텍스트에 개선, 문법 교정, 단순화, 격식, 편한 어조 중 하나의 지시를 결합합니다. 출력 안의 원문은 바뀌지 않습니다."
				]
			}
		},
		{
			heading: {
				en: 'How these tools are built',
				ko: '이 도구들을 어떻게 만들었나'
			},
			paragraphs: {
				en: [
					"The site uses SvelteKit and TypeScript. Pages present forms and explanatory text, while the tool functions run in the browser. Generating a request is local string assembly; it does not start a conversation with an AI service.",
					"Each preset selects a fixed instruction. The same input and options produce the same output, which makes it possible to compare the guide examples character for character. Regenerating without changing a field will not produce a different draft.",
					"The summarizer uses a different method: it splits text at specified punctuation and selects an opening portion. Its length settings control the number of chunks retained. Review the actual output because a shorter excerpt can omit conditions that appear later in the source."
				],
				ko: [
					"사이트는 SvelteKit과 TypeScript를 사용합니다. 페이지는 폼과 설명문을 표시하고 도구 함수는 브라우저에서 실행됩니다. 요청 생성은 로컬 문자열 조립이며 AI 서비스와의 대화를 시작하지 않습니다.",
					"각 사전 설정은 고정 지시문을 선택합니다. 입력과 선택값이 같으면 출력도 같으므로 가이드 예제를 문자 단위로 대조할 수 있습니다. 필드를 바꾸지 않고 다시 생성해도 다른 초안이 나오지 않습니다.",
					"요약기는 다른 방식으로 작동합니다. 지정된 문장부호로 텍스트를 나눠 앞부분을 선택합니다. 길이 설정은 남길 구간 수를 정합니다. 짧아진 발췌문에서 원문 뒤쪽의 조건이 빠질 수 있으므로 실제 출력을 검토하세요."
				]
			}
		},
		{
			heading: {
				en: 'Honest limitations you should know about',
				ko: '알고 써야 할 솔직한 한계'
			},
			paragraphs: {
				en: [
					"Distinguish the request you build here from an answer you obtain elsewhere. The builders preserve your inputs inside fixed wording, so an incorrect date or an ambiguous instruction remains incorrect or ambiguous. Review the assembled text before copying it.",
					"An external assistant may return a translation, email draft, code explanation, or edited paragraph, but those results are not generated or verified by SDK.ac. Compare names, numbers, conditions, and claims with your source material before using them.",
					"For the local summarizer, compare the excerpt directly with the full original. The displayed reduction measures whitespace-separated tokens rather than meaning preserved. For consequential documents, an opening excerpt is not a substitute for reading the complete text."
				],
				ko: [
					"여기서 만든 요청과 다른 곳에서 얻은 답변을 구분하세요. 생성기는 입력을 고정 문구 안에 유지하므로 잘못된 날짜나 모호한 지시도 그대로 남습니다. 복사하기 전에 조립된 텍스트를 검토하세요.",
					"외부 AI가 번역, 이메일 초안, 코드 설명, 수정문을 반환할 수 있지만 SDK.ac가 생성하거나 검증한 결과는 아닙니다. 사용하기 전에 이름, 숫자, 조건, 주장을 원자료와 대조하세요.",
					"로컬 요약기의 발췌문은 원문 전체와 직접 비교하세요. 표시된 감소율은 의미 보존이 아니라 공백으로 나눈 토큰을 기준으로 합니다. 중요한 문서에서는 앞부분 발췌가 전체 읽기를 대신하지 못합니다."
				]
			}
		},
		{
			heading: {
				en: 'What this site is not',
				ko: '이 사이트가 아닌 것'
			},
			paragraphs: {
				en: [
					"This is not a SaaS in disguise. There is no waitlist, no 'book a demo', no newsletter interstitial, and no plan to bolt an account system on later. It is a set of pages that do what they say.",
					'It is also not trying to be everything. There are eight tools, chosen deliberately, plus guides explaining how to get better results from each. If the site grows, it grows a tool at a time, each one held to the same bar: would I use this myself, this week? That bar is the entire product strategy.'
				],
				ko: [
					"이건 위장한 SaaS가 아닙니다. 대기자 명단도, '데모 예약'도, 뉴스레터 팝업도 없고, 나중에 계정 시스템을 붙일 계획도 없습니다. 말한 대로 동작하는 페이지들의 모음입니다.",
					"모든 것이 되려고 하지도 않습니다. 신중하게 고른 여덟 개의 도구와, 각 도구에서 더 나은 결과를 얻는 법을 설명하는 가이드가 있습니다. 사이트가 커진다면 도구 하나씩, 같은 기준을 통과하면서 커질 겁니다. '나라면 이번 주에 이걸 직접 쓸까?' 그 기준이 제품 전략의 전부입니다."
				]
			}
		}
	];
</script>

<svelte:head>
	<title>{t('home.title')} - SDK.ac</title>
	<meta name="description" content={t('home.subtitle')} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': 'https://sdk.ac/#website',
		name: 'SDK.ac',
		url: 'https://sdk.ac',
		description:
			lang === 'ko'
				? '브라우저에서 실행되는 프롬프트 생성기 7개와 앞문장 추출 요약기. AI 모델을 호출하지 않습니다.'
				: lang === 'en'
					? 'Seven browser-based prompt builders and a leading-sentence summarizer. No AI model calls.'
					: 'Free AI-powered tools: translator, summarizer, prompt builder, image prompt builder, code explainer, email writer, hashtag generator, and writing assistant.',
		inLanguage: ['en', 'ko', 'ja', 'zh'],
		publisher: { '@id': 'https://sdk.ac/#organization' }
	})}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': 'https://sdk.ac/#organization',
		name: 'SDKLabs',
		url: 'https://sdk.ac',
		sameAs: ['https://sdk.is', 'https://javascript.ac', 'https://sd.gy']
	})}</` + `script>`}
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
	<!-- Hero Section -->
	<div class="text-center mb-16">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-4">
			{t('home.title')}
		</h1>
		<p class="text-xl text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
			{t('home.subtitle')}
		</p>
	</div>

	<!-- Tools Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each tools as tool}
			<a
				href="/{lang}/{tool.id}"
				class="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-700 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
			>
				<!-- Gradient background on hover -->
				<div class="absolute inset-0 bg-gradient-to-br {tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

				<!-- Icon -->
				<div class="text-4xl mb-4">{tool.icon}</div>

				<!-- Title -->
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
					{t(`home.${tool.id}.title`)}
				</h3>

				<!-- Description -->
				<p class="text-sm text-gray-600 dark:text-dark-400">
					{t(`home.${tool.id}.desc`)}
				</p>

				<!-- Arrow indicator -->
				<div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
					<svg class="w-5 h-5 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</div>
			</a>
		{/each}
	</div>

	<!-- Features Section -->
	<div class="mt-20 text-center">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="p-6">
				<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Fast & Free</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">{lang === 'ko' ? '무료로 요청문을 조립하거나 원문 앞부분을 추출하세요' : lang === 'en' ? 'Build requests or extract opening text locally, free of charge' : 'All tools are completely free to use with instant results'}</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Privacy First</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Your data stays in your browser - nothing is stored on servers</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Multi-Language</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Available in English, Korean, Japanese, and Chinese</p>
			</div>
		</div>
	</div>

	<!-- Long-form first-person content (SSR, AdSense compliance) -->
	<article class="mt-20 max-w-3xl mx-auto space-y-12 text-gray-700 dark:text-dark-300 leading-relaxed">
		{#each introSections as s}
			<section>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">
					{s.heading[lang] || s.heading.en}
				</h2>
				{#each s.paragraphs[lang] || s.paragraphs.en as p}
					<p class="mb-4">{p}</p>
				{/each}
			</section>
		{/each}
	</article>
</div>
