<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; description: string; cta: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Writing Assistant Guide',
			description: 'Discover how to improve your writing with our AI writing assistant. Get help with grammar, style, clarity, and creating compelling content.',
			cta: 'Try Writing Assistant',
			sections: [
				{
					heading: 'What is an AI Writing Assistant?',
					text: 'An AI writing assistant is a powerful tool that helps you write better content faster. Whether you\'re crafting a blog post, essay, report, creative story, or social media content, our AI analyzes your writing and provides suggestions for improvement. It goes beyond simple spell-checking to understand context, tone, and style. The assistant can help you overcome writer\'s block by generating ideas and outlines, expand on your thoughts, tighten verbose passages, and ensure your writing achieves its intended purpose. Unlike passive grammar tools, our writing assistant actively collaborates with you, offering alternatives and explanations that help you become a better writer over time while producing polished content immediately.'
				},
				{
					heading: 'Key Features and Capabilities',
					text: 'Our writing assistant offers comprehensive support for all aspects of writing. Grammar and spelling correction catches errors that standard spell-checkers miss, including context-dependent mistakes. Style analysis ensures consistency in tone, formality, and voice throughout your document. Clarity enhancement simplifies complex sentences and eliminates jargon when appropriate. Vocabulary enrichment suggests more precise or powerful word choices. Structural feedback helps organize your ideas logically with smooth transitions. Plagiarism awareness helps you express ideas in original ways. The tool also offers specialized modes for different writing types: academic writing maintains formal rigor, creative writing preserves artistic voice, business writing emphasizes clarity and professionalism, and SEO writing optimizes for search visibility.'
				},
				{
					heading: 'How to Use the Writing Assistant',
					text: 'Getting started is simple. Paste your text into the input area or start writing directly. Select your content type (article, essay, email, story, etc.) and target audience (general, academic, professional, casual). Choose your preferred writing style - formal, conversational, persuasive, or informative. The assistant analyzes your text in real-time, highlighting areas for improvement with explanations. You can accept suggestions individually, apply all at once, or dismiss those that don\'t fit your intent. For new content, describe what you want to write and receive an outline or draft to refine. The tool remembers your preferences and learns your style over time, providing increasingly personalized suggestions that maintain your unique voice.'
				},
				{
					heading: 'Improving Writing Quality',
					text: 'Quality writing is clear, engaging, and purposeful. Our assistant helps achieve these goals through several mechanisms. For clarity, it identifies confusing sentence structures, passive voice overuse, and ambiguous pronouns. For engagement, it suggests varied sentence lengths, stronger verbs, and more vivid descriptions. For purpose, it ensures your main points are prominent and well-supported. The tool provides readability scores and grade-level analysis to match your target audience. It catches logical gaps in arguments and suggests where additional evidence or examples would strengthen your point. By explaining why certain changes improve your writing, the assistant serves as both an editing tool and a writing teacher, helping you internalize good writing habits.'
				},
				{
					heading: 'Writing for Different Purposes',
					text: 'Different writing contexts have different requirements, and our assistant adapts accordingly. Academic writing demands formal language, proper citations, and logical argumentation - the tool helps maintain these standards while ensuring your original analysis shines. Business writing requires clarity and action orientation - the assistant helps eliminate jargon and ensure every paragraph serves a clear purpose. Creative writing balances technical correctness with artistic expression - our tool respects stylistic choices while catching genuine errors. Marketing copy needs persuasion and punch - the assistant helps craft compelling hooks and calls to action. Technical documentation requires precision - the tool ensures accuracy while improving accessibility for non-expert readers. Whatever you\'re writing, the assistant optimizes for that specific context.'
				},
				{
					heading: 'Common Use Cases and Benefits',
					text: 'Writers across all fields benefit from our assistant. Students improve their essays and research papers, learning proper academic conventions while expressing their ideas more clearly. Professionals craft polished emails, reports, and presentations that make strong impressions. Content creators produce engaging blog posts and articles more efficiently. Non-native English speakers gain confidence in their writing with grammar and idiom support. Authors and journalists refine their drafts, catching issues that fresh eyes might find. Marketers create compelling copy that converts. Even experienced writers use the tool as a first-pass editor, saving time on mechanical issues to focus on higher-level creative decisions. The assistant democratizes good writing, making professional-quality content accessible to everyone regardless of formal training or native language.'
				}
			]
		},
		ko: {
			title: '글쓰기 도우미 가이드',
			description: 'AI 글쓰기 도우미로 글쓰기를 향상시키는 방법을 알아보세요. 문법, 스타일, 명확성 및 매력적인 콘텐츠 작성에 도움을 받으세요.',
			cta: '글쓰기 도우미 사용하기',
			sections: [
				{
					heading: 'AI 글쓰기 도우미란?',
					text: 'AI 글쓰기 도우미는 더 나은 콘텐츠를 더 빠르게 작성하도록 돕는 강력한 도구입니다. 블로그 글, 에세이, 보고서, 창작 스토리, 소셜 미디어 콘텐츠를 작성하든 AI가 글을 분석하고 개선을 위한 제안을 제공합니다. 단순한 맞춤법 검사를 넘어 맥락, 어조, 스타일을 이해합니다. 도우미는 아이디어와 개요를 생성하여 작가의 블록을 극복하고, 생각을 확장하고, 장황한 구절을 조여주며, 글이 의도한 목적을 달성하도록 보장합니다. 수동적인 문법 도구와 달리 글쓰기 도우미는 적극적으로 협력하여 대안과 설명을 제공하여 시간이 지남에 따라 더 나은 작가가 되도록 돕고 즉시 세련된 콘텐츠를 생성합니다.'
				},
				{
					heading: '주요 기능 및 역량',
					text: '글쓰기 도우미는 글쓰기의 모든 측면에 대해 포괄적인 지원을 제공합니다. 문법 및 맞춤법 교정은 맥락 의존적 실수를 포함하여 표준 맞춤법 검사기가 놓치는 오류를 잡습니다. 스타일 분석은 문서 전체에서 어조, 격식, 목소리의 일관성을 보장합니다. 명확성 향상은 복잡한 문장을 단순화하고 적절한 경우 전문 용어를 제거합니다. 어휘 강화는 더 정확하거나 강력한 단어 선택을 제안합니다. 구조적 피드백은 매끄러운 전환과 함께 아이디어를 논리적으로 구성하도록 돕습니다. 표절 인식은 아이디어를 독창적인 방식으로 표현하도록 돕습니다. 이 도구는 또한 다양한 글쓰기 유형에 대한 전문 모드를 제공합니다: 학술적 글쓰기는 격식 있는 엄격함을 유지하고, 창작 글쓰기는 예술적 목소리를 보존하며, 비즈니스 글쓰기는 명확성과 전문성을 강조합니다.'
				},
				{
					heading: '글쓰기 도우미 사용 방법',
					text: '시작은 간단합니다. 입력 영역에 텍스트를 붙여넣거나 직접 작성을 시작합니다. 콘텐츠 유형(기사, 에세이, 이메일, 스토리 등)과 타겟 오디언스(일반, 학술, 전문, 캐주얼)를 선택합니다. 선호하는 글쓰기 스타일 - 공식적, 대화적, 설득적, 정보적 - 을 선택합니다. 도우미가 텍스트를 실시간으로 분석하여 설명과 함께 개선이 필요한 영역을 강조합니다. 제안을 개별적으로 수락하거나, 한 번에 모두 적용하거나, 의도에 맞지 않는 것은 거부할 수 있습니다. 새로운 콘텐츠의 경우 작성하고 싶은 내용을 설명하면 다듬을 개요나 초안을 받습니다. 도구는 시간이 지남에 따라 선호도를 기억하고 스타일을 학습하여 고유한 목소리를 유지하면서 점점 더 개인화된 제안을 제공합니다.'
				},
				{
					heading: '글쓰기 품질 향상',
					text: '품질 좋은 글쓰기는 명확하고, 매력적이며, 목적이 있습니다. 도우미는 여러 메커니즘을 통해 이러한 목표를 달성하도록 돕습니다. 명확성을 위해 혼란스러운 문장 구조, 수동태 과다 사용, 모호한 대명사를 식별합니다. 참여를 위해 다양한 문장 길이, 더 강한 동사, 더 생생한 묘사를 제안합니다. 목적을 위해 주요 포인트가 두드러지고 잘 뒷받침되도록 보장합니다. 도구는 타겟 오디언스에 맞게 가독성 점수와 학년 수준 분석을 제공합니다. 논증의 논리적 공백을 잡아내고 추가 증거나 예시가 포인트를 강화할 수 있는 곳을 제안합니다. 특정 변경이 글쓰기를 개선하는 이유를 설명함으로써 도우미는 편집 도구와 글쓰기 교사 역할을 모두 수행합니다.'
				},
				{
					heading: '다양한 목적의 글쓰기',
					text: '다른 글쓰기 맥락은 다른 요구 사항이 있으며, 도우미는 그에 따라 적응합니다. 학술적 글쓰기는 격식 있는 언어, 적절한 인용, 논리적 논증을 요구합니다 - 도구는 독창적인 분석이 빛나도록 하면서 이러한 기준을 유지하도록 돕습니다. 비즈니스 글쓰기는 명확성과 행동 지향을 요구합니다 - 도우미는 전문 용어를 제거하고 모든 단락이 명확한 목적을 갖도록 돕습니다. 창작 글쓰기는 기술적 정확성과 예술적 표현의 균형을 맞춥니다 - 도구는 진정한 오류를 잡으면서 문체적 선택을 존중합니다. 마케팅 카피는 설득력과 임팩트가 필요합니다 - 도우미는 매력적인 훅과 행동 촉구를 만드는 데 도움을 줍니다. 기술 문서는 정확성을 요구합니다 - 도구는 비전문가 독자를 위한 접근성을 개선하면서 정확성을 보장합니다.'
				},
				{
					heading: '일반적인 사용 사례 및 혜택',
					text: '모든 분야의 작가들이 도우미의 혜택을 받습니다. 학생들은 에세이와 연구 논문을 개선하면서 적절한 학술 관례를 배우고 아이디어를 더 명확하게 표현합니다. 전문가들은 강한 인상을 주는 세련된 이메일, 보고서, 프레젠테이션을 작성합니다. 콘텐츠 제작자들은 매력적인 블로그 글과 기사를 더 효율적으로 생성합니다. 비원어민 영어 사용자들은 문법 및 관용어 지원으로 글쓰기에 자신감을 얻습니다. 작가와 저널리스트들은 새로운 눈이 발견할 수 있는 문제를 잡으면서 초안을 다듬습니다. 마케터들은 전환을 이끄는 매력적인 카피를 만듭니다. 경험 많은 작가들도 이 도구를 첫 번째 편집자로 사용하여 기계적인 문제에 시간을 절약하고 더 높은 수준의 창작 결정에 집중합니다.'
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
			</div>
		{/each}
	</div>
	<div class="mt-12">
		<a href="/{lang}/writing" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
