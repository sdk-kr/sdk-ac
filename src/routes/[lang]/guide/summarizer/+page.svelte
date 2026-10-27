<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; cta: string; sections: { heading: string; text: string; example?: string }[] };
	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: 'Text Summarizer Guide',
			description: "Audit the summarizer’s opening-sentence extraction with a reproducible example and check what the preview leaves out.",
			cta: 'Try Text Summarizer',
			sections: [
				{
					"heading": "Know what the preview can tell you",
					"text": "This tool keeps opening sentences; it does not rank their importance or write an abstractive summary. The walkthrough uses a short project note so that you can inspect every omission. The goal is to decide whether an opening excerpt is sufficient for your reader."
				},
				{
					"heading": "Step 1: read the complete source",
					"text": "Before shortening, read: “The prototype passed inspection. Packaging still needs revision. Shipping awaits final approval.” Mark the unresolved work and the approval condition. They matter even though they occur after the opening sentence. Paste that exact English text into the input."
				},
				{
					"heading": "Step 2: compare before and after",
					"text": "Select Medium and summarize. Before: all three sentences. After: only “The prototype passed inspection.” plus the displayed statistics. The output below is exact. Medium rounds thirty percent of three sentences up to one; it does not decide that the other sentences are unimportant.",
					"example": "Input and selections\nText: The prototype passed inspection. Packaging still needs revision. Shipping awaits final approval.\nLength: Medium\n\nExact tool output\nThe prototype passed inspection.\n\n---\nOriginal: 12 words | Summary: 4 words | Reduced by 67%"
				},
				{
					"heading": "Step 3: test the length behavior",
					"text": "Switch to Short and run again. It retains the first two sentences, so it is longer than Medium for this input. Long also retains two here. These settings express different extraction rules, not guaranteed relative lengths or a target word budget."
				},
				{
					"heading": "Step 4: prepare an honest summary",
					"text": "For a hand-edited summary, write: “The prototype passed inspection, but packaging needs revision and shipping still requires approval.” This is an editorial example, not tool output. It preserves the unresolved conditions. Compare your own summary with the complete source before sharing it."
				},
				{
					"heading": "Mistake 1: trusting the reduction figure",
					"text": "A shorter excerpt can omit the decision the reader needs. The reduction percentage measures whitespace-token reduction, not coverage, accuracy, or usefulness."
				},
				{
					"heading": "Mistake 2: ignoring sentence boundaries",
					"text": "Periods inside abbreviations can split text, and an unfinished final sentence can be omitted when other sentences match. Compare the last source sentence with the preview rather than assuming all input was considered."
				}
			]
		},
		ko: {
			title: '텍스트 요약 가이드',
			description: "재현 가능한 예제로 요약기의 앞 문장 추출을 검토하고 미리보기에서 빠진 내용을 확인하세요.",
			cta: '텍스트 요약 사용하기',
			sections: [
				{
					"heading": "미리보기로 알 수 있는 범위 파악하기",
					"text": "이 도구는 앞 문장을 남기며 중요도를 매기거나 새로운 표현으로 요약하지 않습니다. 이 실습은 누락된 내용을 모두 살펴볼 수 있도록 짧은 프로젝트 메모를 사용합니다. 목표는 앞부분 발췌만으로 독자에게 충분한지 판단하는 것입니다."
				},
				{
					"heading": "1단계: 원문 전체 읽기",
					"text": "줄이기 전에 원문을 읽으세요. “시제품은 검사를 통과했습니다. 포장은 아직 수정이 필요합니다. 배송은 최종 승인을 기다립니다.” 미완료 작업과 승인 조건을 표시하세요. 도입 문장 뒤에 있어도 중요합니다. 아래에 제시한 영어 원문을 정확히 입력하세요."
				},
				{
					"heading": "2단계: 전후 비교하기",
					"text": "중간을 선택하고 요약하세요. 이전에는 세 문장 전체가 있었지만 이후에는 “The prototype passed inspection.”과 표시된 통계만 남습니다. 아래는 실제 출력입니다. 중간은 세 문장의 30%를 올림하여 한 문장으로 계산할 뿐 나머지 문장이 중요하지 않다고 판단하지 않습니다.",
					"example": "입력 및 선택 항목\n텍스트: The prototype passed inspection. Packaging still needs revision. Shipping awaits final approval.\n길이: 중간\n\n실제 도구 출력\nThe prototype passed inspection.\n\n---\nOriginal: 12 words | Summary: 4 words | Reduced by 67%"
				},
				{
					"heading": "3단계: 길이 동작 시험하기",
					"text": "짧음으로 바꾸고 다시 실행하세요. 앞 두 문장을 남기므로 이 입력에서는 중간보다 깁니다. 김도 여기서는 두 문장을 남깁니다. 이 설정은 서로 다른 추출 규칙이며 길이의 상대적 순서나 목표 단어 수를 보장하지 않습니다."
				},
				{
					"heading": "4단계: 내용을 충실히 담은 요약 준비하기",
					"text": "직접 편집한 요약 예시는 “시제품은 검사를 통과했지만 포장은 수정이 필요하고 배송에는 아직 승인이 필요합니다.”입니다. 이는 편집 예시이며 도구 출력이 아닙니다. 미해결 조건을 유지합니다. 공유 전에 직접 만든 요약과 원문 전체를 비교하세요."
				},
				{
					"heading": "실수 1: 감소율만 믿기",
					"text": "짧아진 발췌문은 독자에게 필요한 결정을 빠뜨릴 수 있습니다. 감소율은 공백 토큰 수의 감소를 측정하며 내용 포함 범위, 정확도, 유용성을 측정하지 않습니다."
				},
				{
					"heading": "실수 2: 문장 경계 무시하기",
					"text": "약어 안의 마침표가 텍스트를 나눌 수 있고, 다른 문장들이 일치하면 끝 문장부호가 없는 마지막 문장은 빠질 수 있습니다. 입력 전체가 고려되었다고 가정하지 말고 원문의 마지막 문장과 미리보기를 비교하세요."
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
				{#if section.example}
					<pre class="bg-gray-100 dark:bg-dark-900 p-4 rounded-lg overflow-x-auto text-sm mt-3 text-gray-800 dark:text-dark-200"><code>{section.example}</code></pre>
				{/if}
			</div>
		{/each}
	</div>
	{#if lang === 'en' || lang === 'ko'}
		<nav class="mt-8 space-y-3 text-sm" aria-label={lang === 'ko' ? '관련 도구와 가이드' : 'Related tools and guides'}>
			<a href="/{lang}/summarizer" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "텍스트 요약기" : "Text summarizer"}</a>
			<a href="/{lang}/writing" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "글쓰기 수정 프롬프트 생성기" : "Writing revision prompt builder"}</a>
			<a href="/{lang}/prompt" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "프롬프트 생성기" : "Prompt generator"}</a>
		</nav>
	{/if}
	<div class="mt-12">
		<a href="/{lang}/summarizer" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
