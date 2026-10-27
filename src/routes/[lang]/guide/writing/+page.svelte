<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; cta: string; sections: { heading: string; text: string; example?: string }[] };
	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: 'Writing Assistant Guide',
			description: "Prepare an editing request and compare a revision with the original meaning, conditions, and level of certainty.",
			cta: 'Try Writing Assistant',
			sections: [
				{
					"heading": "Name the edit you need",
					"text": "This walkthrough fixes subject–verb agreement while preserving a conditional commitment. The page creates an editing prompt; it does not perform inline correction. A useful review checks what a revision means as well as whether it reads smoothly."
				},
				{
					"heading": "Step 1: identify protected meaning",
					"text": "Before: “The team are ready, but we may postpone the launch if approval is delayed.” Identify two details to preserve: postponement is possible rather than certain, and it depends on delayed approval. Paste the exact sentence and select Grammar."
				},
				{
					"heading": "Step 2: inspect the unchanged source",
					"text": "Generate the exact request below. The output still contains “The team are ready”. This is expected because the tool wraps the text without editing it. The after state here is an editing request ready to copy, not corrected prose.",
					"example": "Input and selections\nText: The team are ready, but we may postpone the launch if approval is delayed.\nAction: Grammar\n\nExact tool output\nFix all grammar, spelling, and punctuation errors in this text:\n\n\"The team are ready, but we may postpone the launch if approval is delayed.\"\n\nProvide the improved version without explanations."
				},
				{
					"heading": "Step 3: compare a possible revision",
					"text": "For a context treating the team as one unit, an editor might write: “The team is ready, but we may postpone the launch if approval is delayed.” This is an editorial example, not generated output. Agreement conventions can vary with dialect and intended meaning, so choose the convention appropriate to your document."
				},
				{
					"heading": "Step 4: audit the commitments",
					"text": "After getting a revision elsewhere, compare “may” and the approval condition with the original. Reject a rewrite that says “will postpone” without justification. If you then request a more formal tone, repeat this meaning check rather than assuming the earlier check still applies."
				},
				{
					"heading": "Mistake 1: expecting tracked changes",
					"text": "The page provides no inline suggestions or change history. Save the original yourself and compare it with the later revision sentence by sentence."
				},
				{
					"heading": "Mistake 2: asking for everything at once",
					"text": "Combining grammar, simplification, and tone changes can obscure why meaning shifted. Start with the specific problem, review the result, then request another pass only if needed."
				}
			]
		},
		ko: {
			title: '글쓰기 도우미 가이드',
			description: "편집 요청을 준비하고 수정문을 원래 의미, 조건, 확실성의 정도와 비교하세요.",
			cta: '글쓰기 도우미 사용하기',
			sections: [
				{
					"heading": "필요한 편집 이름 붙이기",
					"text": "이 실습은 조건부 약속을 유지하면서 주어와 동사의 일치를 고칩니다. 페이지는 편집 프롬프트를 만들며 본문 내 교정을 수행하지 않습니다. 유용한 검토는 수정문이 매끄러운지뿐 아니라 무엇을 뜻하는지도 확인합니다."
				},
				{
					"heading": "1단계: 지켜야 할 의미 찾기",
					"text": "수정 전 문장은 “The team are ready, but we may postpone the launch if approval is delayed.”입니다. 유지할 두 가지를 찾으세요. 연기는 확정이 아닌 가능성이며 승인 지연에 달려 있습니다. 문장을 정확히 붙여넣고 문법을 선택하세요."
				},
				{
					"heading": "2단계: 그대로 남은 원문 살펴보기",
					"text": "아래 실제 요청을 생성하세요. 출력에는 “The team are ready”가 그대로 남습니다. 도구가 편집 없이 텍스트를 감싸므로 예상된 동작입니다. 여기서 사용 후 상태는 교정된 글이 아니라 복사할 준비가 된 편집 요청입니다.",
					"example": "입력 및 선택 항목\n텍스트: The team are ready, but we may postpone the launch if approval is delayed.\n작업: 문법\n\n실제 도구 출력\nFix all grammar, spelling, and punctuation errors in this text:\n\n\"The team are ready, but we may postpone the launch if approval is delayed.\"\n\nProvide the improved version without explanations."
				},
				{
					"heading": "3단계: 가능한 수정문 비교하기",
					"text": "팀을 하나의 단위로 보는 맥락에서 편집자는 “The team is ready, but we may postpone the launch if approval is delayed.”라고 쓸 수 있습니다. 이는 편집 예시이며 생성된 출력이 아닙니다. 일치 규칙은 언어 변종과 의도한 의미에 따라 달라질 수 있으므로 문서에 맞는 관례를 선택하세요."
				},
				{
					"heading": "4단계: 약속의 강도 검토하기",
					"text": "다른 곳에서 수정문을 얻은 뒤 “may”와 승인 조건을 원문과 비교하세요. 근거 없이 “will postpone”으로 바꾼 수정은 받아들이지 마세요. 이후 더 격식 있는 어조를 요청한다면 앞서 확인했으니 괜찮다고 가정하지 말고 의미 검사를 반복하세요."
				},
				{
					"heading": "실수 1: 변경 이력 기대하기",
					"text": "페이지에는 본문 내 제안이나 변경 이력이 없습니다. 원문을 직접 보관하고 나중의 수정문과 문장별로 비교하세요."
				},
				{
					"heading": "실수 2: 모든 수정을 한꺼번에 요청하기",
					"text": "문법, 단순화, 어조 변경을 한꺼번에 요청하면 의미가 바뀐 이유를 파악하기 어렵습니다. 구체적인 문제부터 시작하고 결과를 검토한 뒤 필요한 경우에만 다음 수정을 요청하세요."
				}
			]
		},
		ja: {
			title: 'ライティングアシスタントガイド',
			description: 'AIライティングアシスタントで文章を改善する方法をご紹介します。文法、スタイル、明確さ、魅力的なコンテンツ作成のサポートを受けましょう。',
			cta: 'ライティングアシスタントを試す',
			sections: [
				{
					heading: 'AIライティングアシスタントとは？',
					text: 'AIライティングアシスタントは、より良いコンテンツをより速く書くのに役立つ強力なツールです。ブログ投稿、エッセイ、レポート、クリエイティブストーリー、ソーシャルメディアコンテンツを作成する場合でも、AIが文章を分析し、改善のための提案を提供します。単純なスペルチェックを超えて、コンテキスト、トーン、スタイルを理解します。アシスタントは、アイデアとアウトラインを生成してライターズブロックを克服し、考えを拡張し、冗長な文章を引き締め、文章が意図した目的を達成することを保証します。受動的な文法ツールとは異なり、ライティングアシスタントは積極的に協力し、時間をかけてより良い作家になる手助けをしながら、すぐに洗練されたコンテンツを生成するための代替案と説明を提供します。'
				},
				{
					heading: '主な機能と能力',
					text: 'ライティングアシスタントは、文章のすべての側面に対して包括的なサポートを提供します。文法とスペルの修正は、コンテキスト依存のミスを含め、標準的なスペルチェッカーが見逃すエラーをキャッチします。スタイル分析は、ドキュメント全体でトーン、フォーマリティ、声の一貫性を確保します。明確性の向上は、複雑な文を簡素化し、適切な場合は専門用語を排除します。語彙の強化は、より正確または強力な言葉の選択を提案します。構造的なフィードバックは、スムーズな移行でアイデアを論理的に整理するのに役立ちます。盗作の認識は、アイデアを独自の方法で表現するのに役立ちます。ツールは、異なる文章タイプ向けの専門モードも提供します：学術的な文章は形式的な厳格さを維持し、創造的な文章は芸術的な声を保持し、ビジネス文章は明確さとプロフェッショナリズムを強調します。'
				},
				{
					heading: 'ライティングアシスタントの使い方',
					text: '始めるのは簡単です。入力エリアにテキストを貼り付けるか、直接書き始めます。コンテンツタイプ（記事、エッセイ、メール、ストーリーなど）とターゲットオーディエンス（一般、学術、プロフェッショナル、カジュアル）を選択します。好みの文章スタイル - フォーマル、会話的、説得的、情報的 - を選択します。アシスタントはテキストをリアルタイムで分析し、説明とともに改善が必要な領域をハイライトします。提案を個別に受け入れたり、一度にすべて適用したり、意図に合わないものは却下したりできます。新しいコンテンツの場合、書きたいことを説明すると、改善するためのアウトラインまたはドラフトを受け取ります。ツールは時間の経過とともに好みを記憶しスタイルを学習し、独自の声を維持しながらますますパーソナライズされた提案を提供します。'
				},
				{
					heading: '文章品質の向上',
					text: '質の高い文章は、明確で、魅力的で、目的があります。アシスタントは、いくつかのメカニズムを通じてこれらの目標を達成するのに役立ちます。明確さのために、混乱する文構造、受動態の過剰使用、曖昧な代名詞を識別します。エンゲージメントのために、さまざまな文の長さ、より強い動詞、より鮮明な描写を提案します。目的のために、主要なポイントが目立ち、適切にサポートされていることを確認します。ツールは、ターゲットオーディエンスに合わせて可読性スコアと学年レベルの分析を提供します。議論の論理的なギャップをキャッチし、追加の証拠や例がポイントを強化する場所を提案します。特定の変更が文章を改善する理由を説明することで、アシスタントは編集ツールとライティング教師の両方として機能し、良い文章習慣を内在化するのに役立ちます。'
				},
				{
					heading: 'さまざまな目的のための文章',
					text: '異なる文章のコンテキストには異なる要件があり、アシスタントはそれに応じて適応します。学術的な文章はフォーマルな言語、適切な引用、論理的な議論を要求します - ツールは独自の分析が輝くようにしながらこれらの基準を維持するのに役立ちます。ビジネス文章は明確さと行動志向を必要とします - アシスタントは専門用語を排除し、すべての段落が明確な目的を果たすことを確認します。創造的な文章は技術的な正確さと芸術的表現のバランスを取ります - ツールは本当のエラーをキャッチしながらスタイリスティックな選択を尊重します。マーケティングコピーは説得力とパンチが必要です - アシスタントは魅力的なフックとアクションの呼びかけを作成するのに役立ちます。技術文書は精度を要求します - ツールは非専門家の読者のためのアクセシビリティを向上させながら正確さを確保します。'
				},
				{
					heading: '一般的な使用例とメリット',
					text: 'すべての分野の作家がアシスタントの恩恵を受けています。学生はエッセイや研究論文を改善し、適切な学術的慣習を学びながらアイデアをより明確に表現しています。プロフェッショナルは強い印象を与える洗練されたメール、レポート、プレゼンテーションを作成しています。コンテンツクリエイターは魅力的なブログ投稿や記事をより効率的に生成しています。非ネイティブの英語話者は文法とイディオムのサポートで文章に自信を得ています。作家やジャーナリストは新鮮な目が見つける可能性のある問題をキャッチしながらドラフトを洗練しています。マーケターはコンバージョンを生む魅力的なコピーを作成しています。経験豊富な作家でさえ、機械的な問題の時間を節約し、より高いレベルの創造的決定に集中するために、ファーストパスエディターとしてツールを使用しています。'
				}
			]
		},
		zh: {
			title: '写作助手指南',
			description: '了解如何使用我们的AI写作助手改善您的写作。获得语法、风格、清晰度和创建引人入胜内容的帮助。',
			cta: '试用写作助手',
			sections: [
				{
					heading: '什么是AI写作助手？',
					text: 'AI写作助手是一个强大的工具，可帮助您更快地写出更好的内容。无论您是在撰写博客文章、论文、报告、创意故事还是社交媒体内容，我们的AI都会分析您的写作并提供改进建议。它超越了简单的拼写检查，理解上下文、语气和风格。助手可以通过生成想法和大纲来帮助您克服写作障碍，扩展您的思路，收紧冗长的段落，并确保您的写作达到预期目的。与被动的语法工具不同，我们的写作助手积极与您合作，提供替代方案和解释，帮助您随着时间的推移成为更好的作家，同时立即产生精美的内容。'
				},
				{
					heading: '主要功能和能力',
					text: '我们的写作助手为写作的各个方面提供全面支持。语法和拼写纠正可捕获标准拼写检查器遗漏的错误，包括上下文相关的错误。风格分析确保整个文档中语气、正式程度和声音的一致性。清晰度增强简化复杂句子并在适当时消除术语。词汇丰富建议更精确或更有力的词语选择。结构反馈帮助以流畅的过渡逻辑地组织您的想法。抄袭意识帮助您以原创方式表达想法。该工具还为不同写作类型提供专门模式：学术写作保持正式严谨，创意写作保留艺术声音，商业写作强调清晰和专业，SEO写作优化搜索可见性。'
				},
				{
					heading: '如何使用写作助手',
					text: '入门很简单。将文本粘贴到输入区域或直接开始写作。选择您的内容类型（文章、论文、电子邮件、故事等）和目标受众（一般、学术、专业、休闲）。选择您偏好的写作风格 - 正式、对话式、说服性或信息性。助手实时分析您的文本，用解释突出显示需要改进的区域。您可以单独接受建议、一次性全部应用，或拒绝不符合您意图的建议。对于新内容，描述您想写的内容，就会收到一个大纲或草稿供您完善。该工具会记住您的偏好并随着时间学习您的风格，在保持您独特声音的同时提供越来越个性化的建议。'
				},
				{
					heading: '提高写作质量',
					text: '高质量的写作是清晰的、引人入胜的和有目的的。我们的助手通过几种机制帮助实现这些目标。为了清晰度，它识别令人困惑的句子结构、被动语态过度使用和模糊的代词。为了参与度，它建议不同的句子长度、更强的动词和更生动的描述。为了目的，它确保您的主要观点突出且有充分支持。该工具提供可读性分数和年级水平分析以匹配您的目标受众。它捕捉论证中的逻辑漏洞，并建议在哪里额外的证据或示例会加强您的观点。通过解释为什么某些更改可以改善您的写作，助手既是编辑工具又是写作老师，帮助您内化良好的写作习惯。'
				},
				{
					heading: '为不同目的写作',
					text: '不同的写作环境有不同的要求，我们的助手会相应调整。学术写作需要正式语言、适当引用和逻辑论证 - 该工具帮助维持这些标准，同时确保您的原创分析闪耀。商业写作需要清晰和行动导向 - 助手帮助消除术语并确保每个段落都有明确目的。创意写作平衡技术正确性和艺术表达 - 我们的工具在捕获真正错误的同时尊重风格选择。营销文案需要说服力和冲击力 - 助手帮助制作引人注目的钩子和行动呼吁。技术文档需要精确性 - 工具在提高非专家读者可访问性的同时确保准确性。无论您写什么，助手都会针对该特定环境进行优化。'
				},
				{
					heading: '常见使用场景和好处',
					text: '各个领域的作家都从我们的助手中受益。学生改进他们的论文和研究论文，在更清晰地表达想法的同时学习适当的学术惯例。专业人士撰写给人留下深刻印象的精美电子邮件、报告和演示文稿。内容创作者更有效地制作引人入胜的博客文章和文章。非英语母语者通过语法和习语支持获得写作信心。作家和记者在捕捉新鲜眼睛可能发现的问题的同时完善他们的草稿。营销人员创建能够转化的引人注目的文案。即使是经验丰富的作家也使用该工具作为第一道编辑，在机械问题上节省时间以专注于更高层次的创意决策。助手使好的写作民主化，让每个人无论正式培训或母语如何都能获得专业质量的内容。'
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
			<a href="/{lang}/writing" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "글쓰기 수정 프롬프트 생성기" : "Writing revision prompt builder"}</a>
			<a href="/{lang}/email" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "이메일 초안 프롬프트 생성기" : "Email drafting prompt builder"}</a>
			<a href="/{lang}/translator" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "번역 프롬프트 생성기" : "Translation prompt builder"}</a>
		</nav>
	{/if}
	<div class="mt-12">
		<a href="/{lang}/writing" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
