<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; cta: string; sections: { heading: string; text: string; example?: string }[] };
	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: 'AI Translator Guide',
			description: "Prepare a translation request and review its source wording, language direction, and eventual translation.",
			cta: 'Try AI Translator',
			sections: [
				{
					"heading": "Translate a clear instruction",
					"text": "This walkthrough prepares a product instruction for translation from English to Korean. The page generates a prompt, so the translation itself must be obtained separately. Decide what the instruction means before judging whether a translated sentence sounds natural."
				},
				{
					"heading": "Step 1: remove an ambiguous pronoun",
					"text": "Before: “Remove it before replacing the filter.” After: “Remove the cover before replacing the filter.” The revision names the object being removed. Enter the revised English sentence, then select English as the source and Korean as the target."
				},
				{
					"heading": "Step 2: inspect the handoff",
					"text": "Generate and read the exact result below. The original text remains inside quotation marks, and the language direction appears in the first sentence. The output is not the Korean translation. Confirm both language names before copying it to another assistant.",
					"example": "Input and selections\nText: Remove the cover before replacing the filter.\nFrom: English\nTo: Korean\n\nExact tool output\nPlease translate the following text from English to Korean:\n\n\"Remove the cover before replacing the filter.\"\n\nProvide only the translation without any explanation."
				},
				{
					"heading": "Step 3: specify missing terminology",
					"text": "If “cover” has a specific approved product term, add that instruction to the copied prompt outside the quoted source. The page has no glossary field. Keep translation instructions separate from the passage so they are not accidentally treated as content to translate."
				},
				{
					"heading": "Step 4: review meaning before fluency",
					"text": "An editor’s reference rendering is “필터를 교체하기 전에 덮개를 분리하세요.” This is a human-written example, not output from this tool. Compare the eventual translation for the object, action, and order. Ask a reader familiar with the product whether the instruction is unambiguous."
				},
				{
					"heading": "Mistake 1: using Swap as back translation",
					"text": "Swap changes the selected languages but leaves the original input in place. For a separate reverse-translation exercise, paste the actual translated passage yourself and set the direction deliberately."
				},
				{
					"heading": "Mistake 2: treating fluency as verification",
					"text": "A smooth sentence can reverse an action or omit a condition. Check those details directly; the page provides no confidence score or independent translation review."
				}
			]
		},
		ko: {
			title: 'AI 번역기 가이드',
			description: "번역 요청을 준비하고 원문 표현, 언어 방향, 최종 번역을 검토하세요.",
			cta: 'AI 번역기 사용하기',
			sections: [
				{
					"heading": "명확한 안내문 번역 준비하기",
					"text": "이 실습에서는 제품 안내문을 영어에서 한국어로 번역할 준비를 합니다. 페이지는 프롬프트를 생성하므로 번역문 자체는 별도로 얻어야 합니다. 번역된 문장이 자연스러운지 판단하기 전에 안내문의 뜻을 정하세요."
				},
				{
					"heading": "1단계: 모호한 대명사 없애기",
					"text": "수정 전: “필터를 교체하기 전에 그것을 분리하세요.” 수정 후: “필터를 교체하기 전에 덮개를 분리하세요.” 수정문은 분리할 대상을 명시합니다. 수정된 영어 문장을 입력하고 원문은 영어, 대상은 한국어로 선택하세요."
				},
				{
					"heading": "2단계: 넘겨줄 지시문 살펴보기",
					"text": "생성한 뒤 아래 실제 결과를 읽으세요. 원문은 따옴표 안에 남고 언어 방향은 첫 문장에 나타납니다. 출력은 한국어 번역문이 아닙니다. 다른 AI에 복사하기 전에 두 언어 이름을 확인하세요.",
					"example": "입력 및 선택 항목\n텍스트: Remove the cover before replacing the filter.\n원문 언어: English\n대상 언어: Korean\n\n실제 도구 출력\nPlease translate the following text from English to Korean:\n\n\"Remove the cover before replacing the filter.\"\n\nProvide only the translation without any explanation."
				},
				{
					"heading": "3단계: 빠진 용어 지침 명시하기",
					"text": "“cover”에 승인된 특정 제품 용어가 있다면 복사한 프롬프트의 인용 원문 바깥에 지시를 추가하세요. 페이지에는 용어집 필드가 없습니다. 번역 지시가 번역할 내용으로 취급되지 않도록 원문과 분리하세요."
				},
				{
					"heading": "4단계: 유창함보다 의미 검토하기",
					"text": "편집자가 작성한 참고 번역은 “필터를 교체하기 전에 덮개를 분리하세요.”입니다. 사람이 작성한 예시이며 이 도구의 출력이 아닙니다. 최종 번역에서 대상, 동작, 순서를 비교하세요. 제품을 아는 독자에게 지시가 명확한지 확인하세요."
				},
				{
					"heading": "실수 1: 언어 교환을 역번역으로 사용하기",
					"text": "언어 교환은 선택한 언어를 바꾸지만 원래 입력은 그대로 둡니다. 별도의 역번역 연습을 하려면 실제 번역문을 직접 붙여넣고 방향을 의도적으로 설정하세요."
				},
				{
					"heading": "실수 2: 유창함을 검증으로 보기",
					"text": "매끄러운 문장도 동작을 뒤집거나 조건을 빠뜨릴 수 있습니다. 그 내용을 직접 확인하세요. 페이지에는 신뢰도 점수나 독립적인 번역 검토가 없습니다."
				}
			]
		},
		ja: {
			title: 'AI翻訳ガイド',
			description: 'AI搭載の翻訳ツールを使用してテキストを正確に翻訳する方法をご紹介します。文脈を考慮した多言語翻訳をサポートしています。',
			cta: 'AI翻訳を試す',
			sections: [
				{
					heading: 'AI翻訳とは？',
					text: 'AI翻訳は、高度な機械学習モデルを使用して、意味、トーン、コンテキストを保持しながらテキストを一つの言語から別の言語に変換します。従来のルールベースの翻訳システムとは異なり、AI翻訳者は慣用句、文化的参照、文脈的意味を含む言語のニュアンスを理解します。私たちの翻訳ツールは、数十億の多言語テキストサンプルで訓練された最先端の言語モデルを活用し、自然で正確な翻訳を生成します。この技術は、より多くのコンテンツを処理するにつれて継続的に改善され、数十の言語にわたるパターンと言語構造から学習して、ますます洗練された結果を提供します。'
				},
				{
					heading: 'サポート言語と機能',
					text: 'AI翻訳ツールは、英語、スペイン語、中国語、アラビア語、フランス語、ドイツ語、日本語、韓国語、ポルトガル語、ロシア語、ヒンディー語などの主要な世界言語、および多くの地域言語やあまり一般的でない言語を含む100以上の言語をサポートしています。翻訳ツールは、ビジネス文書用のフォーマル翻訳、日常コミュニケーション用のカジュアル翻訳、業界固有の用語を保持する技術翻訳、文体要素を維持する文学翻訳など、いくつかの専門モードを提供しています。ブラジルポルトガル語とヨーロッパポルトガル語、簡体字と繁体字など、必要な地域のバリアントを指定することもできます。'
				},
				{
					heading: 'AI翻訳ツールの使い方',
					text: '翻訳ツールの使用は簡単で直感的です。ソースフィールドにテキストを入力または貼り付け、ソース言語を選択（または自動検出を使用）し、ターゲット言語を選択します。最良の結果を得るために、医療、法律、技術、カジュアルな会話など、コンテンツのコンテキストやドメインを指定できます。翻訳をクリックすると、数秒以内に結果を受け取ります。出力には、複雑なフレーズの信頼度指標とともに翻訳されたテキストが含まれます。特定のフレーズについて複数の翻訳代替案を切り替えることもでき、ニーズに最も適したバージョンを選択できます。'
				},
				{
					heading: '翻訳品質と精度',
					text: 'AI翻訳ツールは、ほとんどの言語ペア、特に一般的な言語と標準的なコンテンツタイプで高い精度を達成しています。システムは、文脈的意味の維持、複雑な文構造の処理、フォーマットの保持に優れています。ただし、すべての機械翻訳システムと同様に、高度に専門化された用語、創造的な言葉遊び、直接的な同等物がない文化的参照では時折苦戦することがあります。法的契約書や医療記録などの重要な文書については、人間の翻訳者が出力をレビューすることをお勧めします。翻訳ツールは、追加のレビューや手動調整が必要な可能性のある箇所を特定するのに役立つ信頼度スコアを提供します。'
				},
				{
					heading: '翻訳のベストプラクティス',
					text: '最適な翻訳結果を達成するには、明確で文法的に正しいソーステキストを書いてください。曖昧または不適切に書かれたコンテンツは、AIが正確に翻訳することが困難です。可能な場合は、長い段落を短い文に分割してください。コンテキストを提供しない限り、よく翻訳されない可能性のあるスラング、略語、文化的参照は避けてください。技術的なコンテンツの場合は、重要な用語の用語集を提供することを検討してください。文法構造が異なる言語間で翻訳する場合（英語から日本語など）、文要素の再編成が予想されます。トーンと形式レベルについて翻訳をレビューしてください。'
				},
				{
					heading: '一般的な使用例',
					text: 'AI翻訳ツールは、多くの分野で多様なニーズに対応しています。ビジネスプロフェッショナルは、国際通信、契約書の草案、マーケティング資料に使用しています。学生や研究者は、学術論文や外国語のソースを翻訳しています。旅行者は、リアルタイムのコミュニケーションや標識、メニュー、地元のコンテンツの理解に頼っています。eコマース企業は、グローバル市場向けに製品説明や顧客レビューを翻訳しています。コンテンツクリエイターは、国際的な視聴者向けに作品をローカライズしています。カスタマーサポートチームは、多言語の問い合わせを効率的に処理しています。'
				}
			]
		},
		zh: {
			title: 'AI翻译指南',
			description: '了解如何使用我们的AI翻译工具准确翻译文本。支持多种语言，提供上下文感知翻译。',
			cta: '试用AI翻译',
			sections: [
				{
					heading: '什么是AI翻译？',
					text: 'AI翻译使用先进的机器学习模型将文本从一种语言转换为另一种语言，同时保留意义、语气和上下文。与传统的基于规则的翻译系统不同，AI翻译器理解语言的细微差别，包括习语、文化参考和上下文含义。我们的翻译工具利用在数十亿多语言文本样本上训练的最先进语言模型，能够产生听起来自然且准确的翻译。随着处理更多内容，该技术不断改进，从数十种语言的模式和语言结构中学习，以提供越来越精炼的结果。'
				},
				{
					heading: '支持的语言和功能',
					text: '我们的AI翻译工具支持100多种语言，包括英语、西班牙语、中文、阿拉伯语、法语、德语、日语、韩语、葡萄牙语、俄语和印地语等主要世界语言，以及许多地区性和不太常见的语言。翻译工具提供几种专业模式：用于商业文档的正式翻译、用于日常交流的非正式翻译、保留行业特定术语的技术翻译，以及保持文体元素的文学翻译。您还可以指定所需的地区变体，例如巴西葡萄牙语与欧洲葡萄牙语，或简体中文与繁体中文。'
				},
				{
					heading: '如何使用AI翻译工具',
					text: '使用我们的翻译工具简单直观。在源字段中输入或粘贴文本，选择源语言（或使用自动检测），然后选择目标语言。为获得最佳结果，您可以指定内容的上下文或领域，如医疗、法律、技术或日常对话。点击翻译，几秒钟内即可收到结果。输出包括翻译文本以及复杂短语的置信度指标。您还可以在某些短语的多个翻译备选方案之间切换，允许您选择最适合需求的版本。直接复制结果或将其下载为文本文件。'
				},
				{
					heading: '翻译质量和准确性',
					text: '我们的AI翻译工具在大多数语言对中实现了高准确率，特别是对于常见语言和标准内容类型。系统擅长保持上下文含义、处理复杂句子结构和保留格式。然而，像所有机器翻译系统一样，它可能偶尔会在高度专业化的术语、创意文字游戏或没有直接等价物的文化参考方面遇到困难。对于法律合同或医疗记录等重要文件，我们建议让人工翻译审核输出。翻译工具提供置信度分数，帮助您识别可能需要额外审核或手动调整的段落。'
				},
				{
					heading: '翻译最佳实践',
					text: '为了获得最佳翻译结果，请撰写清晰且语法正确的源文本。模糊或写得不好的内容更难让AI准确翻译。尽可能将长段落分成短句。除非提供上下文，否则避免使用可能翻译不好的俚语、缩写和文化参考。对于技术内容，考虑提供关键术语词汇表。在语法结构不同的语言之间翻译时（如英语到日语），预期句子元素会有一些重组。检查翻译的语气和正式程度，因为这些在不同文化之间可能有很大差异。对于重要项目，在处理整个文档之前先翻译样本以评估质量。'
				},
				{
					heading: '常见使用场景',
					text: '我们的AI翻译工具服务于许多领域的多样化需求。商业专业人士用它处理国际通信、合同草案和营销材料。学生和研究人员翻译学术论文和外语资源。旅行者依赖它进行实时交流和理解标志、菜单和当地内容。电子商务企业为全球市场翻译产品描述和客户评论。内容创作者为国际受众本地化他们的作品。客户支持团队有效处理多语言查询。法律专业人士获取外国文档的快速翻译进行初步审查。AI翻译的多功能性使其成为我们相互联系的全球社区的必备工具。'
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.ac</title>
	<meta name="description" content={t.description} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-8">{t.title}</h1>
	<div class="space-y-8">
		{#each t.sections as section}
			<div>
				<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{section.heading}</h2>
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
				{#if section.example}
					<pre class="bg-gray-100 dark:bg-dark-900 p-4 rounded-lg overflow-x-auto text-sm mt-3 text-gray-800 dark:text-dark-200"><code>{section.example}</code></pre>
				{/if}
			</div>
		{/each}
	</div>
	{#if lang === 'en' || lang === 'ko'}
		<nav class="mt-8 space-y-3 text-sm" aria-label={lang === 'ko' ? '관련 도구와 가이드' : 'Related tools and guides'}>
			<a href="/{lang}/translator" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "번역 프롬프트 생성기" : "Translation prompt builder"}</a>
			<a href="/{lang}/writing" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "글쓰기 수정 프롬프트 생성기" : "Writing revision prompt builder"}</a>
			<a href="/{lang}/prompt" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "프롬프트 생성기" : "Prompt generator"}</a>
		</nav>
	{/if}
	<div class="mt-12">
		<a href="/{lang}/translator" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
