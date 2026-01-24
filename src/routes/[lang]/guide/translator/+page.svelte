<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; description: string; cta: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'AI Translator Guide',
			description: 'Discover how to translate text accurately using our AI-powered translator. Support for multiple languages with context-aware translations.',
			cta: 'Try AI Translator',
			sections: [
				{
					heading: 'What is AI Translation?',
					text: 'AI translation uses advanced machine learning models to convert text from one language to another while preserving meaning, tone, and context. Unlike traditional rule-based translation systems, AI translators understand the nuances of language, including idioms, cultural references, and contextual meanings. Our translator leverages state-of-the-art language models that have been trained on billions of multilingual text samples, enabling it to produce translations that sound natural and accurate. The technology continuously improves as it processes more content, learning from patterns and linguistic structures across dozens of languages to deliver increasingly refined results.'
				},
				{
					heading: 'Supported Languages and Features',
					text: 'Our AI translator supports over 100 languages, including major world languages like English, Spanish, Mandarin Chinese, Arabic, French, German, Japanese, Korean, Portuguese, Russian, and Hindi, as well as many regional and less common languages. The translator offers several specialized modes: formal translation for business documents, casual translation for everyday communication, technical translation that preserves industry-specific terminology, and literary translation that maintains stylistic elements. You can also specify the regional variant you need, such as Brazilian Portuguese vs. European Portuguese, or simplified vs. traditional Chinese characters.'
				},
				{
					heading: 'How to Use the AI Translator',
					text: 'Using our translator is simple and intuitive. Enter or paste your text in the source field, select the source language (or use auto-detect), and choose your target language. For best results, you can specify the context or domain of your content, such as medical, legal, technical, or casual conversation. Click translate and receive your result within seconds. The output includes the translated text along with confidence indicators for complex phrases. You can also toggle between multiple translation alternatives for certain phrases, allowing you to choose the version that best fits your needs. Copy the result directly or download it as a text file.'
				},
				{
					heading: 'Translation Quality and Accuracy',
					text: 'Our AI translator achieves high accuracy rates across most language pairs, particularly for common languages and standard content types. The system excels at maintaining contextual meaning, handling complex sentence structures, and preserving formatting. However, like all machine translation systems, it may occasionally struggle with highly specialized jargon, creative wordplay, or cultural references that don\'t have direct equivalents. For critical documents like legal contracts or medical records, we recommend having a human translator review the output. The translator provides confidence scores to help you identify passages that may benefit from additional review or manual adjustment.'
				},
				{
					heading: 'Best Practices for Translation',
					text: 'To achieve optimal translation results, write clear and grammatically correct source text. Ambiguous or poorly written content is harder for AI to translate accurately. Break long paragraphs into shorter sentences when possible. Avoid slang, abbreviations, and cultural references that may not translate well unless you provide context. For technical content, consider providing a glossary of key terms. When translating between languages with different grammatical structures (like English to Japanese), expect some reorganization of sentence elements. Review translations for tone and formality level, as these can vary significantly between cultures. For important projects, translate a sample first to assess quality before processing the entire document.'
				},
				{
					heading: 'Common Use Cases',
					text: 'Our AI translator serves diverse needs across many fields. Business professionals use it for international correspondence, contract drafts, and marketing materials. Students and researchers translate academic papers and foreign language sources. Travelers rely on it for real-time communication and understanding signs, menus, and local content. E-commerce businesses translate product descriptions and customer reviews for global markets. Content creators localize their work for international audiences. Customer support teams handle multilingual inquiries efficiently. Legal professionals get quick translations of foreign documents for preliminary review. Medical professionals access research published in other languages. The versatility of AI translation makes it an essential tool for our interconnected global community.'
				}
			]
		},
		ko: {
			title: 'AI 번역기 가이드',
			description: 'AI 기반 번역기를 사용하여 텍스트를 정확하게 번역하는 방법을 알아보세요. 문맥 인식 번역으로 다국어를 지원합니다.',
			cta: 'AI 번역기 사용하기',
			sections: [
				{
					heading: 'AI 번역이란?',
					text: 'AI 번역은 고급 기계 학습 모델을 사용하여 의미, 어조, 문맥을 유지하면서 텍스트를 한 언어에서 다른 언어로 변환합니다. 전통적인 규칙 기반 번역 시스템과 달리 AI 번역기는 관용구, 문화적 참조, 문맥적 의미를 포함한 언어의 뉘앙스를 이해합니다. 우리의 번역기는 수십억 개의 다국어 텍스트 샘플로 훈련된 최첨단 언어 모델을 활용하여 자연스럽고 정확한 번역을 생성합니다. 이 기술은 더 많은 콘텐츠를 처리하면서 지속적으로 개선되며, 수십 개 언어의 패턴과 언어 구조에서 학습하여 점점 더 정제된 결과를 제공합니다.'
				},
				{
					heading: '지원 언어 및 기능',
					text: 'AI 번역기는 영어, 스페인어, 중국어, 아랍어, 프랑스어, 독일어, 일본어, 한국어, 포르투갈어, 러시아어, 힌디어 등 주요 세계 언어와 많은 지역 및 희귀 언어를 포함하여 100개 이상의 언어를 지원합니다. 번역기는 비즈니스 문서용 공식 번역, 일상 커뮤니케이션용 비공식 번역, 산업별 용어를 보존하는 기술 번역, 문체적 요소를 유지하는 문학 번역 등 여러 전문 모드를 제공합니다. 브라질 포르투갈어 vs 유럽 포르투갈어, 간체 vs 번체 중국어 문자와 같이 필요한 지역 변형을 지정할 수도 있습니다.'
				},
				{
					heading: 'AI 번역기 사용 방법',
					text: '번역기 사용은 간단하고 직관적입니다. 원본 필드에 텍스트를 입력하거나 붙여넣고, 원본 언어를 선택(또는 자동 감지 사용)한 다음 대상 언어를 선택합니다. 최상의 결과를 위해 의료, 법률, 기술, 일상 대화 등 콘텐츠의 맥락이나 도메인을 지정할 수 있습니다. 번역을 클릭하면 몇 초 내에 결과를 받습니다. 출력에는 복잡한 구문에 대한 신뢰도 지표와 함께 번역된 텍스트가 포함됩니다. 특정 구문에 대해 여러 번역 대안 사이를 전환하여 필요에 가장 적합한 버전을 선택할 수도 있습니다.'
				},
				{
					heading: '번역 품질과 정확도',
					text: 'AI 번역기는 대부분의 언어 쌍, 특히 일반적인 언어와 표준 콘텐츠 유형에서 높은 정확도를 달성합니다. 시스템은 문맥적 의미 유지, 복잡한 문장 구조 처리, 서식 보존에 탁월합니다. 그러나 모든 기계 번역 시스템과 마찬가지로 고도로 전문화된 용어, 창의적인 언어유희, 직접적인 등가물이 없는 문화적 참조에서는 가끔 어려움을 겪을 수 있습니다. 법적 계약서나 의료 기록과 같은 중요한 문서의 경우 인간 번역가가 출력을 검토하도록 권장합니다. 번역기는 추가 검토나 수동 조정이 필요할 수 있는 구절을 식별하는 데 도움이 되는 신뢰도 점수를 제공합니다.'
				},
				{
					heading: '번역 모범 사례',
					text: '최적의 번역 결과를 얻으려면 명확하고 문법적으로 올바른 원본 텍스트를 작성하세요. 모호하거나 잘못 작성된 콘텐츠는 AI가 정확하게 번역하기 어렵습니다. 가능하면 긴 단락을 짧은 문장으로 나누세요. 문맥을 제공하지 않는 한 잘 번역되지 않을 수 있는 속어, 약어, 문화적 참조는 피하세요. 기술 콘텐츠의 경우 핵심 용어 용어집 제공을 고려하세요. 문법 구조가 다른 언어 간 번역(예: 영어에서 일본어로)할 때는 문장 요소의 일부 재구성을 예상하세요. 번역의 어조와 격식 수준을 검토하세요. 중요한 프로젝트의 경우 전체 문서를 처리하기 전에 먼저 샘플을 번역하여 품질을 평가하세요.'
				},
				{
					heading: '일반적인 사용 사례',
					text: 'AI 번역기는 많은 분야에서 다양한 요구를 충족합니다. 비즈니스 전문가들은 국제 서신, 계약 초안, 마케팅 자료에 사용합니다. 학생과 연구자들은 학술 논문과 외국어 소스를 번역합니다. 여행자들은 실시간 커뮤니케이션과 표지판, 메뉴, 현지 콘텐츠 이해에 의존합니다. 전자상거래 기업은 글로벌 시장을 위해 제품 설명과 고객 리뷰를 번역합니다. 콘텐츠 제작자들은 국제 청중을 위해 작품을 현지화합니다. 고객 지원 팀은 다국어 문의를 효율적으로 처리합니다. AI 번역의 다양성은 상호 연결된 글로벌 커뮤니티에 필수적인 도구입니다.'
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
			</div>
		{/each}
	</div>
	<div class="mt-12">
		<a href="/{lang}/translator" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
