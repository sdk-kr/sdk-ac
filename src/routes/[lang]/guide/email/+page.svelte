<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; description: string; cta: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Email Writer Guide',
			description: 'Learn how to write professional emails effortlessly with our AI email writer. Create clear, effective emails for any situation in seconds.',
			cta: 'Try Email Writer',
			sections: [
				{
					heading: 'What is an AI Email Writer?',
					text: 'An AI email writer is a powerful tool that helps you compose professional, clear, and effective emails in seconds. Whether you need to write a formal business proposal, a friendly follow-up, a customer service response, or a cold outreach message, our AI understands the nuances of email communication and generates appropriate content for any situation. The tool considers factors like recipient relationship, purpose, tone, and industry context to create emails that feel natural and achieve your communication goals. Instead of staring at a blank screen wondering how to start, you can describe your intent and receive a polished draft ready for sending or refinement.'
				},
				{
					heading: 'Key Features and Capabilities',
					text: 'Our email writer offers extensive customization to match your needs. Choose from multiple tone options including formal, professional, friendly, casual, apologetic, assertive, or persuasive. Select the email type such as introduction, follow-up, thank you, complaint, request, announcement, or rejection. Specify the length from brief (2-3 sentences) to comprehensive (multiple paragraphs). The tool can generate subject lines, opening hooks, clear body content, and appropriate closings. It handles sensitive situations with care, suggests alternatives for potentially problematic phrasing, and ensures your message is culturally appropriate for international communication. You can also provide your own email signature and preferences for consistent branding.'
				},
				{
					heading: 'How to Use the Email Writer',
					text: 'Using our email writer is straightforward. Start by describing the purpose of your email and who you\'re writing to. Provide key points you want to cover - the AI will organize them logically. Select your preferred tone and formality level. Choose whether you need a subject line generated. Specify any constraints like word count or specific phrases to include. Click generate and receive your draft email within seconds. Review the output and make any personal adjustments. The tool allows you to regenerate with different parameters if the first draft doesn\'t match your vision. You can also provide feedback on specific sections to refine just those parts while keeping the rest intact.'
				},
				{
					heading: 'Writing Effective Business Emails',
					text: 'Professional business emails require careful attention to tone, clarity, and structure. Our AI helps you craft emails that make a strong impression. It starts with clear subject lines that indicate the email\'s purpose and urgency. The opening establishes context and captures attention. The body presents information in a logical flow with appropriate paragraph breaks. Action items and deadlines are highlighted clearly. The closing reinforces the main message and includes a clear call to action when needed. The tool avoids common business email mistakes like being too verbose, using jargon inappropriately, or sounding impersonal. It also helps maintain consistency across your team\'s communications when you establish shared templates.'
				},
				{
					heading: 'Email Etiquette and Best Practices',
					text: 'Our email writer is trained on email etiquette best practices across cultures and industries. It knows when to use formal salutations versus casual greetings, how to address people you haven\'t met, and when certain phrases might come across as too demanding or too passive. The AI helps you avoid common pitfalls like writing in all caps, using excessive exclamation marks, or including unnecessary recipients. It suggests appropriate sign-offs based on your relationship with the recipient and the email\'s tone. For sensitive topics like delivering bad news, making complaints, or negotiating, the tool provides diplomatic language that maintains relationships while still being clear about your position.'
				},
				{
					heading: 'Common Email Scenarios',
					text: 'Our email writer excels across diverse situations. For job seekers, it crafts compelling cover letters and follow-up emails that stand out. Sales professionals use it for persuasive outreach and proposal emails. Managers write clear instructions, feedback, and team announcements. Customer service representatives respond to complaints with empathy and solutions. Project managers send status updates that are informative but concise. HR professionals compose sensitive communications about policies, feedback, or organizational changes. Freelancers write proposals and negotiate terms professionally. Students reach out to professors and potential mentors appropriately. Whatever your email needs, the AI helps you communicate clearly and professionally while saving valuable time.'
				}
			]
		},
		ko: {
			title: '이메일 작성 가이드',
			description: 'AI 이메일 작성기로 전문적인 이메일을 손쉽게 작성하는 방법을 알아보세요. 어떤 상황에서도 몇 초 만에 명확하고 효과적인 이메일을 작성하세요.',
			cta: '이메일 작성 사용하기',
			sections: [
				{
					heading: 'AI 이메일 작성기란?',
					text: 'AI 이메일 작성기는 몇 초 만에 전문적이고 명확하며 효과적인 이메일을 작성하도록 도와주는 강력한 도구입니다. 공식적인 비즈니스 제안서, 친근한 후속 메일, 고객 서비스 응답, 콜드 아웃리치 메시지 등 무엇을 작성해야 하든 AI는 이메일 커뮤니케이션의 뉘앙스를 이해하고 모든 상황에 적절한 콘텐츠를 생성합니다. 이 도구는 수신자 관계, 목적, 어조, 산업 맥락과 같은 요소를 고려하여 자연스럽고 커뮤니케이션 목표를 달성하는 이메일을 만듭니다. 어떻게 시작할지 고민하며 빈 화면을 바라보는 대신 의도를 설명하고 전송하거나 다듬을 준비가 된 세련된 초안을 받으세요.'
				},
				{
					heading: '주요 기능 및 역량',
					text: '이메일 작성기는 필요에 맞는 광범위한 커스터마이제이션을 제공합니다. 공식적, 전문적, 친근한, 캐주얼, 사과, 단호한, 설득력 있는 등 여러 톤 옵션 중에서 선택하세요. 소개, 후속, 감사, 불만, 요청, 공지, 거절 등 이메일 유형을 선택하세요. 짧음(2-3문장)부터 종합적(여러 문단)까지 길이를 지정하세요. 이 도구는 제목, 오프닝 훅, 명확한 본문 내용, 적절한 맺음말을 생성할 수 있습니다. 민감한 상황을 신중하게 처리하고, 문제가 될 수 있는 표현에 대한 대안을 제안하며, 국제 커뮤니케이션에 문화적으로 적절한 메시지를 보장합니다.'
				},
				{
					heading: '이메일 작성기 사용 방법',
					text: '이메일 작성기 사용은 간단합니다. 이메일의 목적과 누구에게 쓰는지 설명하는 것으로 시작하세요. 다루고 싶은 핵심 포인트를 제공하세요 - AI가 논리적으로 구성합니다. 선호하는 톤과 격식 수준을 선택하세요. 제목을 생성할지 여부를 선택하세요. 단어 수나 포함할 특정 문구와 같은 제약 조건을 지정하세요. 생성을 클릭하면 몇 초 내에 초안 이메일을 받습니다. 출력을 검토하고 개인적인 조정을 하세요. 첫 번째 초안이 비전과 맞지 않으면 다른 매개변수로 다시 생성할 수 있습니다. 특정 섹션에 대한 피드백을 제공하여 나머지는 유지하면서 해당 부분만 다듬을 수도 있습니다.'
				},
				{
					heading: '효과적인 비즈니스 이메일 작성',
					text: '전문적인 비즈니스 이메일은 톤, 명확성, 구조에 세심한 주의가 필요합니다. AI는 강한 인상을 남기는 이메일을 작성하도록 도와줍니다. 이메일의 목적과 긴급성을 나타내는 명확한 제목으로 시작합니다. 오프닝은 맥락을 설정하고 주의를 끕니다. 본문은 적절한 단락 구분과 함께 논리적 흐름으로 정보를 제시합니다. 실행 항목과 마감일이 명확하게 강조됩니다. 맺음말은 주요 메시지를 강화하고 필요할 때 명확한 행동 촉구를 포함합니다. 이 도구는 너무 장황하거나, 전문 용어를 부적절하게 사용하거나, 비인간적으로 들리는 등 일반적인 비즈니스 이메일 실수를 피합니다.'
				},
				{
					heading: '이메일 에티켓 및 모범 사례',
					text: '이메일 작성기는 문화와 산업 전반에 걸친 이메일 에티켓 모범 사례로 훈련되었습니다. 공식적인 인사말과 캐주얼한 인사를 언제 사용할지, 만난 적 없는 사람을 어떻게 부를지, 특정 문구가 너무 요구적이거나 너무 수동적으로 들릴 수 있는 때를 알고 있습니다. AI는 모두 대문자로 쓰기, 과도한 느낌표 사용, 불필요한 수신자 포함 등 일반적인 함정을 피하도록 도와줍니다. 수신자와의 관계와 이메일 톤에 따라 적절한 맺음말을 제안합니다. 나쁜 소식 전달, 불만 제기, 협상 등 민감한 주제의 경우 관계를 유지하면서도 입장을 명확히 하는 외교적 언어를 제공합니다.'
				},
				{
					heading: '일반적인 이메일 시나리오',
					text: '이메일 작성기는 다양한 상황에서 뛰어납니다. 구직자를 위해 눈에 띄는 설득력 있는 자기소개서와 후속 이메일을 작성합니다. 영업 전문가들은 설득력 있는 아웃리치와 제안 이메일에 사용합니다. 관리자들은 명확한 지시, 피드백, 팀 공지를 작성합니다. 고객 서비스 담당자들은 공감과 해결책으로 불만에 응답합니다. 프로젝트 관리자들은 유익하면서도 간결한 상태 업데이트를 보냅니다. HR 전문가들은 정책, 피드백, 조직 변경에 관한 민감한 커뮤니케이션을 작성합니다. 프리랜서들은 제안서를 작성하고 조건을 전문적으로 협상합니다. 학생들은 교수와 잠재적 멘토에게 적절하게 연락합니다.'
				}
			]
		},
		ja: {
			title: 'メール作成ガイド',
			description: 'AIメールライターを使用してプロフェッショナルなメールを簡単に作成する方法を学びましょう。あらゆる状況に対応した明確で効果的なメールを数秒で作成できます。',
			cta: 'メール作成を試す',
			sections: [
				{
					heading: 'AIメールライターとは？',
					text: 'AIメールライターは、プロフェッショナルで明確、効果的なメールを数秒で作成するのに役立つ強力なツールです。フォーマルなビジネス提案、フレンドリーなフォローアップ、カスタマーサービスの返信、コールドアウトリーチメッセージなど、何を書く必要があっても、AIはメールコミュニケーションのニュアンスを理解し、あらゆる状況に適切なコンテンツを生成します。このツールは、受信者との関係、目的、トーン、業界の文脈などの要素を考慮して、自然に感じられ、コミュニケーション目標を達成するメールを作成します。どう始めればいいか悩みながら空白の画面を見つめる代わりに、意図を説明し、送信または改善の準備ができた洗練されたドラフトを受け取ることができます。'
				},
				{
					heading: '主な機能と能力',
					text: 'メールライターは、ニーズに合わせた広範なカスタマイズを提供します。フォーマル、プロフェッショナル、フレンドリー、カジュアル、謝罪、断定的、説得力のあるなど、複数のトーンオプションから選択できます。紹介、フォローアップ、感謝、苦情、リクエスト、お知らせ、お断りなどのメールタイプを選択できます。短い（2-3文）から包括的（複数の段落）までの長さを指定できます。このツールは、件名、オープニングフック、明確な本文、適切な結びを生成できます。デリケートな状況を慎重に処理し、問題のある可能性のある表現の代替案を提案し、国際コミュニケーションに文化的に適切なメッセージを確保します。'
				},
				{
					heading: 'メールライターの使い方',
					text: 'メールライターの使用は簡単です。まず、メールの目的と誰に書いているかを説明します。カバーしたい重要なポイントを提供してください - AIがそれらを論理的に整理します。希望するトーンとフォーマリティレベルを選択します。件名を生成する必要があるかどうかを選択します。単語数や含める特定のフレーズなどの制約を指定します。生成をクリックすると、数秒以内にドラフトメールを受け取ります。出力をレビューし、個人的な調整を加えます。最初のドラフトがビジョンに合わない場合は、異なるパラメータで再生成できます。特定のセクションにフィードバックを提供して、残りを維持しながらその部分だけを改善することもできます。'
				},
				{
					heading: '効果的なビジネスメールの作成',
					text: 'プロフェッショナルなビジネスメールは、トーン、明確さ、構造に細心の注意を払う必要があります。AIは、強い印象を与えるメールを作成するのに役立ちます。メールの目的と緊急性を示す明確な件名から始まります。オープニングは文脈を確立し、注意を引きます。本文は適切な段落区切りとともに論理的な流れで情報を提示します。アクションアイテムと期限が明確に強調されます。結びはメインメッセージを強化し、必要に応じて明確なアクションの呼びかけを含みます。このツールは、冗長すぎる、専門用語を不適切に使用する、非人間的に聞こえるなど、一般的なビジネスメールのミスを避けます。'
				},
				{
					heading: 'メールエチケットとベストプラクティス',
					text: 'メールライターは、文化や業界を超えたメールエチケットのベストプラクティスでトレーニングされています。フォーマルな挨拶とカジュアルな挨拶をいつ使用するか、会ったことのない人にどのように呼びかけるか、特定のフレーズが要求的すぎたり受動的すぎたりする可能性がある場合を知っています。AIは、すべて大文字で書く、過度な感嘆符を使用する、不必要な受信者を含めるなど、一般的な落とし穴を避けるのに役立ちます。受信者との関係とメールのトーンに基づいて適切な締めくくりを提案します。悪いニュースを伝える、苦情を申し立てる、交渉するなどのデリケートなトピックでは、関係を維持しながら立場を明確にする外交的な言葉を提供します。'
				},
				{
					heading: '一般的なメールシナリオ',
					text: 'メールライターは多様な状況で優れています。求職者のために、際立つ説得力のあるカバーレターとフォローアップメールを作成します。営業プロフェッショナルは説得力のあるアウトリーチと提案メールに使用します。マネージャーは明確な指示、フィードバック、チームのお知らせを書きます。カスタマーサービス担当者は共感と解決策をもって苦情に対応します。プロジェクトマネージャーは有益でありながら簡潔なステータスアップデートを送信します。HR専門家はポリシー、フィードバック、組織変更に関するデリケートなコミュニケーションを作成します。フリーランサーは提案書を書き、条件を専門的に交渉します。学生は教授や潜在的なメンターに適切に連絡します。'
				}
			]
		},
		zh: {
			title: '邮件写作指南',
			description: '学习如何使用我们的AI邮件写作工具轻松撰写专业邮件。在几秒钟内为任何情况创建清晰、有效的邮件。',
			cta: '试用邮件写作',
			sections: [
				{
					heading: '什么是AI邮件写作工具？',
					text: 'AI邮件写作工具是一个强大的工具，可帮助您在几秒钟内撰写专业、清晰、有效的邮件。无论您需要写正式的商业提案、友好的跟进邮件、客户服务回复还是冷推广信息，我们的AI都能理解邮件沟通的细微差别，并为任何情况生成适当的内容。该工具考虑收件人关系、目的、语气和行业背景等因素，创建感觉自然并实现您沟通目标的邮件。您不必盯着空白屏幕想着如何开始，而是可以描述您的意图并收到一份准备发送或完善的精炼草稿。'
				},
				{
					heading: '主要功能和能力',
					text: '我们的邮件写作工具提供广泛的自定义选项以匹配您的需求。从正式、专业、友好、随意、道歉、果断或说服性等多种语气选项中选择。选择邮件类型，如介绍、跟进、感谢、投诉、请求、公告或拒绝。指定从简短（2-3句）到全面（多个段落）的长度。该工具可以生成主题行、开头吸引语、清晰的正文内容和适当的结尾。它谨慎处理敏感情况，为可能有问题的措辞提供替代方案，并确保您的信息在国际交流中文化上适当。您还可以提供自己的邮件签名和偏好以保持一致的品牌形象。'
				},
				{
					heading: '如何使用邮件写作工具',
					text: '使用我们的邮件写作工具非常简单。首先描述邮件的目的和收件人。提供您想要涵盖的关键点 - AI会逻辑地组织它们。选择您偏好的语气和正式程度。选择是否需要生成主题行。指定任何限制条件，如字数或要包含的特定短语。点击生成，几秒钟内即可收到邮件草稿。审查输出并进行任何个人调整。如果第一稿不符合您的愿景，该工具允许您使用不同的参数重新生成。您还可以对特定部分提供反馈，只改进那些部分而保持其余部分不变。'
				},
				{
					heading: '撰写有效的商务邮件',
					text: '专业的商务邮件需要仔细注意语气、清晰度和结构。我们的AI帮助您撰写给人留下深刻印象的邮件。它以表明邮件目的和紧迫性的清晰主题行开始。开头建立上下文并吸引注意力。正文以适当的段落分隔逻辑地呈现信息。行动项目和截止日期被清楚地突出显示。结尾强化主要信息，并在需要时包含明确的行动呼吁。该工具避免常见的商务邮件错误，如过于冗长、不恰当地使用术语或听起来不人性化。当您建立共享模板时，它还有助于保持团队沟通的一致性。'
				},
				{
					heading: '邮件礼仪和最佳实践',
					text: '我们的邮件写作工具在跨文化和行业的邮件礼仪最佳实践方面进行了培训。它知道何时使用正式称呼与随意问候，如何称呼未曾见面的人，以及某些短语可能显得太过强硬或太过被动的情况。AI帮助您避免常见陷阱，如全部大写、使用过多感叹号或包含不必要的收件人。它根据您与收件人的关系和邮件语气建议适当的结束语。对于传达坏消息、提出投诉或谈判等敏感话题，该工具提供外交语言，在保持关系的同时清楚表达您的立场。'
				},
				{
					heading: '常见邮件场景',
					text: '我们的邮件写作工具在各种情况下都表现出色。对于求职者，它撰写引人注目的求职信和跟进邮件。销售专业人员用它写有说服力的推广和提案邮件。经理们写清晰的指示、反馈和团队公告。客服代表以同理心和解决方案回应投诉。项目经理发送信息丰富但简洁的状态更新。HR专业人员撰写关于政策、反馈或组织变革的敏感沟通。自由职业者撰写提案并专业地协商条款。学生适当地联系教授和潜在导师。无论您的邮件需求是什么，AI都能帮助您清晰、专业地沟通，同时节省宝贵的时间。'
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
		<a href="/{lang}/email" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
