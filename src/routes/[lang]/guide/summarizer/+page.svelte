<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; description: string; cta: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Text Summarizer Guide',
			description: 'Learn how to effectively summarize any text using AI. Our text summarizer helps you condense long documents, articles, and content into concise summaries.',
			cta: 'Try Text Summarizer',
			sections: [
				{
					heading: 'What is Text Summarization?',
					text: 'Text summarization is the process of condensing a longer piece of text into a shorter version while preserving the key information and main ideas. Our AI-powered summarizer analyzes your content, identifies the most important points, and generates a coherent summary that captures the essence of the original text. Whether you\'re dealing with research papers, news articles, business reports, or any other lengthy documents, our tool can help you save time and quickly grasp the core message. The technology uses advanced natural language processing to understand context, recognize important concepts, and produce summaries that maintain the original meaning while significantly reducing length.'
				},
				{
					heading: 'Key Features of Our Summarizer',
					text: 'Our text summarizer offers multiple summarization modes to fit your needs. You can choose extractive summarization, which selects and combines the most important sentences from the original text, or abstractive summarization, which generates new sentences that capture the main ideas. The tool supports various summary lengths from brief one-paragraph overviews to detailed multi-paragraph summaries. You can also specify the focus area if you want the summary to emphasize certain aspects of the content. Additional features include bullet point summaries for quick scanning, keyword extraction, and the ability to maintain specific terminology or technical language when summarizing specialized content.'
				},
				{
					heading: 'How to Use the Text Summarizer',
					text: 'Using our summarizer is straightforward. First, paste your text into the input field or upload a document. Next, select your preferred summary length - short (1-2 sentences), medium (a paragraph), or detailed (multiple paragraphs). Choose whether you want extractive or abstractive summarization based on your needs. Click the summarize button and wait a few seconds for the AI to process your content. The generated summary will appear in the output area, which you can then copy, edit, or regenerate if needed. For best results with very long documents, consider breaking them into logical sections and summarizing each part separately, then combining the results.'
				},
				{
					heading: 'Best Use Cases for Summarization',
					text: 'Text summarization excels in numerous scenarios. Students can use it to quickly understand research papers and academic articles, creating study notes efficiently. Professionals can summarize meeting transcripts, lengthy emails, or industry reports to save time. Content creators can use summaries to create article abstracts, social media posts, or newsletter snippets. Researchers can quickly scan large volumes of literature to identify relevant papers. Business analysts can condense market research and competitor analysis into actionable insights. Legal professionals can summarize contracts and case documents. The tool is also valuable for creating executive summaries of business proposals and condensing technical documentation for different audiences.'
				},
				{
					heading: 'Tips for Better Summaries',
					text: 'To get the best results from our summarizer, ensure your input text is clean and well-formatted. Remove unnecessary headers, footers, and formatting artifacts that might confuse the AI. For technical content, specify if you want to maintain technical terms or translate them into simpler language. When summarizing multiple related documents, consider providing context about how they relate to each other. If the initial summary doesn\'t meet your expectations, try adjusting the length setting or switching between extractive and abstractive modes. For very long texts, breaking them into thematic sections often produces better results than summarizing everything at once. Review and lightly edit the generated summary to ensure it accurately represents the source material.'
				},
				{
					heading: 'Understanding Summary Quality',
					text: 'A good summary should be accurate, coherent, and concise. Accuracy means the summary faithfully represents the main ideas without introducing errors or misinterpretations. Coherence ensures the summary reads smoothly as a standalone piece of text with logical flow between ideas. Conciseness means including only essential information without redundancy. Our AI strives to balance these qualities, but it\'s always good practice to review summaries, especially for important documents. The tool works best with well-written source material that has clear structure and logical organization. Technical jargon, ambiguous language, or poorly organized content may result in less accurate summaries. For critical applications, use the summary as a starting point and verify key points against the original text.'
				}
			]
		},
		ko: {
			title: '텍스트 요약 가이드',
			description: 'AI를 사용하여 모든 텍스트를 효과적으로 요약하는 방법을 알아보세요. 텍스트 요약기는 긴 문서, 기사, 콘텐츠를 간결한 요약으로 압축합니다.',
			cta: '텍스트 요약 사용하기',
			sections: [
				{
					heading: '텍스트 요약이란?',
					text: '텍스트 요약은 핵심 정보와 주요 아이디어를 보존하면서 긴 텍스트를 짧은 버전으로 압축하는 과정입니다. AI 기반 요약기는 콘텐츠를 분석하고 가장 중요한 포인트를 식별하여 원문의 본질을 담은 일관된 요약을 생성합니다. 연구 논문, 뉴스 기사, 비즈니스 보고서 또는 기타 긴 문서를 다루든, 이 도구는 시간을 절약하고 핵심 메시지를 빠르게 파악하는 데 도움을 줍니다. 이 기술은 고급 자연어 처리를 사용하여 맥락을 이해하고, 중요한 개념을 인식하며, 길이를 크게 줄이면서도 원래 의미를 유지하는 요약을 생성합니다.'
				},
				{
					heading: '요약기의 주요 기능',
					text: '텍스트 요약기는 필요에 맞는 여러 요약 모드를 제공합니다. 원문에서 가장 중요한 문장을 선택하여 결합하는 추출적 요약, 또는 주요 아이디어를 담은 새로운 문장을 생성하는 추상적 요약을 선택할 수 있습니다. 이 도구는 간단한 한 문단 개요부터 상세한 여러 문단 요약까지 다양한 요약 길이를 지원합니다. 요약이 콘텐츠의 특정 측면을 강조하도록 초점 영역을 지정할 수도 있습니다. 추가 기능으로는 빠른 스캔을 위한 글머리 기호 요약, 키워드 추출, 전문 콘텐츠 요약 시 특정 용어나 기술 언어를 유지하는 기능이 있습니다.'
				},
				{
					heading: '텍스트 요약기 사용 방법',
					text: '요약기 사용은 간단합니다. 먼저 입력 필드에 텍스트를 붙여넣거나 문서를 업로드합니다. 다음으로 원하는 요약 길이를 선택합니다 - 짧음(1-2문장), 중간(한 문단), 상세(여러 문단). 필요에 따라 추출적 또는 추상적 요약을 선택합니다. 요약 버튼을 클릭하고 AI가 콘텐츠를 처리하는 동안 몇 초 기다립니다. 생성된 요약은 출력 영역에 나타나며, 복사하거나 편집하거나 필요하면 다시 생성할 수 있습니다. 매우 긴 문서의 경우 논리적 섹션으로 나누어 각 부분을 별도로 요약한 다음 결과를 결합하는 것이 좋습니다.'
				},
				{
					heading: '요약의 최적 활용 사례',
					text: '텍스트 요약은 다양한 시나리오에서 뛰어납니다. 학생들은 연구 논문과 학술 기사를 빠르게 이해하고 효율적으로 학습 노트를 만들 수 있습니다. 전문가들은 회의 기록, 긴 이메일, 업계 보고서를 요약하여 시간을 절약할 수 있습니다. 콘텐츠 제작자는 요약을 사용하여 기사 초록, 소셜 미디어 게시물, 뉴스레터 스니펫을 만들 수 있습니다. 연구자들은 대량의 문헌을 빠르게 스캔하여 관련 논문을 식별할 수 있습니다. 비즈니스 분석가는 시장 조사와 경쟁사 분석을 실행 가능한 인사이트로 압축할 수 있습니다. 법률 전문가는 계약서와 사건 문서를 요약할 수 있습니다.'
				},
				{
					heading: '더 나은 요약을 위한 팁',
					text: '요약기에서 최상의 결과를 얻으려면 입력 텍스트가 깨끗하고 잘 포맷되어 있는지 확인하세요. AI를 혼란스럽게 할 수 있는 불필요한 머리글, 바닥글, 서식 아티팩트를 제거하세요. 기술적 콘텐츠의 경우 기술 용어를 유지할지 더 간단한 언어로 번역할지 지정하세요. 여러 관련 문서를 요약할 때는 문서들이 서로 어떻게 관련되는지 맥락을 제공하는 것이 좋습니다. 초기 요약이 기대에 미치지 못하면 길이 설정을 조정하거나 추출적 모드와 추상적 모드 사이를 전환해 보세요. 매우 긴 텍스트의 경우 주제별 섹션으로 나누면 종종 더 나은 결과를 얻습니다.'
				},
				{
					heading: '요약 품질 이해하기',
					text: '좋은 요약은 정확하고, 일관성 있으며, 간결해야 합니다. 정확성은 요약이 오류나 오해 없이 주요 아이디어를 충실히 나타낸다는 것을 의미합니다. 일관성은 요약이 아이디어 간 논리적 흐름을 가진 독립적인 텍스트로 매끄럽게 읽힌다는 것을 보장합니다. 간결성은 중복 없이 필수 정보만 포함하는 것을 의미합니다. AI는 이러한 품질의 균형을 맞추기 위해 노력하지만, 특히 중요한 문서의 경우 요약을 검토하는 것이 좋습니다. 이 도구는 명확한 구조와 논리적 구성을 가진 잘 작성된 원본 자료에서 가장 잘 작동합니다.'
				}
			]
		},
		ja: {
			title: 'テキスト要約ガイド',
			description: 'AIを使用してテキストを効果的に要約する方法を学びましょう。テキスト要約ツールは、長い文書、記事、コンテンツを簡潔な要約に凝縮します。',
			cta: 'テキスト要約を試す',
			sections: [
				{
					heading: 'テキスト要約とは？',
					text: 'テキスト要約とは、重要な情報と主要なアイデアを保持しながら、長いテキストを短いバージョンに凝縮するプロセスです。AI搭載の要約ツールは、コンテンツを分析し、最も重要なポイントを特定し、元のテキストの本質を捉えた一貫性のある要約を生成します。研究論文、ニュース記事、ビジネスレポート、その他の長い文書を扱う場合でも、このツールは時間を節約し、コアメッセージを素早く把握するのに役立ちます。この技術は高度な自然言語処理を使用して、コンテキストを理解し、重要な概念を認識し、長さを大幅に短縮しながら元の意味を維持する要約を生成します。'
				},
				{
					heading: '要約ツールの主な機能',
					text: 'テキスト要約ツールは、ニーズに合わせた複数の要約モードを提供します。元のテキストから最も重要な文を選択して組み合わせる抽出的要約、または主要なアイデアを捉えた新しい文を生成する抽象的要約を選択できます。このツールは、簡潔な1段落の概要から詳細な複数段落の要約まで、さまざまな要約の長さをサポートしています。要約がコンテンツの特定の側面を強調するようにフォーカスエリアを指定することもできます。追加機能には、素早くスキャンするための箇条書き要約、キーワード抽出、専門コンテンツを要約する際に特定の用語や技術的な言語を維持する機能があります。'
				},
				{
					heading: 'テキスト要約ツールの使い方',
					text: '要約ツールの使用は簡単です。まず、入力フィールドにテキストを貼り付けるか、ドキュメントをアップロードします。次に、希望する要約の長さを選択します - 短い（1-2文）、中程度（1段落）、詳細（複数段落）。ニーズに基づいて抽出的または抽象的要約を選択します。要約ボタンをクリックし、AIがコンテンツを処理するまで数秒待ちます。生成された要約は出力エリアに表示され、コピー、編集、または必要に応じて再生成できます。非常に長い文書の場合は、論理的なセクションに分割して各部分を個別に要約し、結果を組み合わせることを検討してください。'
				},
				{
					heading: '要約の最適な使用例',
					text: 'テキスト要約は多くのシナリオで優れています。学生は研究論文や学術記事を素早く理解し、効率的に学習ノートを作成できます。専門家は会議の記録、長いメール、業界レポートを要約して時間を節約できます。コンテンツクリエイターは要約を使用して、記事の要旨、ソーシャルメディアの投稿、ニュースレターのスニペットを作成できます。研究者は大量の文献を素早くスキャンして関連する論文を特定できます。ビジネスアナリストは市場調査と競合分析を実用的なインサイトに凝縮できます。法律専門家は契約書や訴訟文書を要約できます。'
				},
				{
					heading: 'より良い要約のためのヒント',
					text: '要約ツールで最良の結果を得るには、入力テキストがクリーンで適切にフォーマットされていることを確認してください。AIを混乱させる可能性のある不要なヘッダー、フッター、フォーマットのアーティファクトを削除してください。技術的なコンテンツの場合は、技術用語を維持するか、より簡単な言語に翻訳するかを指定してください。複数の関連文書を要約する場合は、それらがどのように関連しているかのコンテキストを提供することを検討してください。最初の要約が期待に沿わない場合は、長さの設定を調整するか、抽出的モードと抽象的モードを切り替えてみてください。'
				},
				{
					heading: '要約品質の理解',
					text: '良い要約は、正確で、一貫性があり、簡潔である必要があります。正確性とは、要約がエラーや誤解なく主要なアイデアを忠実に表現していることを意味します。一貫性とは、要約がアイデア間の論理的な流れを持つ独立したテキストとしてスムーズに読めることを保証します。簡潔性とは、冗長性なく本質的な情報のみを含むことを意味します。AIはこれらの品質のバランスを取るよう努めていますが、特に重要な文書の場合は要約をレビューすることをお勧めします。このツールは、明確な構造と論理的な構成を持つ適切に書かれたソース資料で最もよく機能します。'
				}
			]
		},
		zh: {
			title: '文本摘要指南',
			description: '学习如何使用AI有效地总结任何文本。我们的文本摘要工具帮助您将长文档、文章和内容压缩成简洁的摘要。',
			cta: '试用文本摘要',
			sections: [
				{
					heading: '什么是文本摘要？',
					text: '文本摘要是将较长的文本压缩成较短版本的过程，同时保留关键信息和主要思想。我们的AI驱动摘要工具分析您的内容，识别最重要的要点，并生成捕捉原文本质的连贯摘要。无论您处理的是研究论文、新闻文章、商业报告还是任何其他冗长的文档，我们的工具都可以帮助您节省时间并快速掌握核心信息。该技术使用先进的自然语言处理来理解上下文，识别重要概念，并在显著减少长度的同时产生保持原意的摘要。'
				},
				{
					heading: '摘要工具的主要功能',
					text: '我们的文本摘要工具提供多种摘要模式以满足您的需求。您可以选择提取式摘要，它从原文中选择并组合最重要的句子；或者选择抽象式摘要，它生成捕捉主要思想的新句子。该工具支持从简短的单段概述到详细的多段摘要等各种摘要长度。如果您希望摘要强调内容的某些方面，还可以指定重点区域。其他功能包括用于快速浏览的要点摘要、关键词提取，以及在总结专业内容时保持特定术语或技术语言的能力。'
				},
				{
					heading: '如何使用文本摘要工具',
					text: '使用我们的摘要工具非常简单。首先，将文本粘贴到输入字段或上传文档。接下来，选择您偏好的摘要长度 - 短（1-2句）、中等（一个段落）或详细（多个段落）。根据您的需求选择提取式或抽象式摘要。点击摘要按钮，等待几秒钟让AI处理您的内容。生成的摘要将出现在输出区域，您可以复制、编辑或根据需要重新生成。对于非常长的文档，考虑将它们分成逻辑部分，分别总结每个部分，然后合并结果。'
				},
				{
					heading: '摘要的最佳使用场景',
					text: '文本摘要在众多场景中表现出色。学生可以用它快速理解研究论文和学术文章，高效创建学习笔记。专业人士可以总结会议记录、冗长的电子邮件或行业报告以节省时间。内容创作者可以使用摘要创建文章摘要、社交媒体帖子或新闻简报片段。研究人员可以快速扫描大量文献以识别相关论文。商业分析师可以将市场研究和竞争对手分析压缩成可操作的见解。法律专业人士可以总结合同和案件文档。'
				},
				{
					heading: '获得更好摘要的技巧',
					text: '为了从摘要工具获得最佳结果，请确保您的输入文本干净且格式良好。删除可能使AI困惑的不必要的页眉、页脚和格式伪影。对于技术内容，请指定您是否要保持技术术语或将其翻译成更简单的语言。在总结多个相关文档时，考虑提供它们之间如何相关的上下文。如果初始摘要不符合您的期望，请尝试调整长度设置或在提取式和抽象式模式之间切换。对于非常长的文本，将它们分成主题部分通常会产生比一次总结所有内容更好的结果。'
				},
				{
					heading: '理解摘要质量',
					text: '一个好的摘要应该是准确的、连贯的和简洁的。准确性意味着摘要忠实地表达主要思想，没有引入错误或误解。连贯性确保摘要作为独立的文本流畅阅读，思想之间有逻辑流动。简洁性意味着只包含必要信息，没有冗余。我们的AI努力平衡这些质量，但对于重要文档，审查摘要始终是好的做法。该工具在具有清晰结构和逻辑组织的良好编写的源材料上效果最好。技术术语、模糊的语言或组织不良的内容可能导致摘要不够准确。'
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
		<a href="/{lang}/summarizer" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
