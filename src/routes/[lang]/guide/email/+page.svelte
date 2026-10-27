<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; cta: string; sections: { heading: string; text: string; example?: string }[] };
	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: 'Email Writer Guide',
			description: "Turn a vague email purpose into a bounded drafting request and review the eventual message before sending.",
			cta: 'Try Email Writer',
			sections: [
				{
					"heading": "Define the action before the tone",
					"text": "This tutorial prepares a room availability inquiry. The page returns a drafting prompt, not a finished email, and has no sending function. Decide what answer you need from the recipient before choosing how formal the message should sound."
				},
				{
					"heading": "Step 1: separate inquiry from commitment",
					"text": "Before: “Book a room.” After: “Ask whether a quiet meeting room is available; do not confirm a booking.” Enter the revised purpose and “Facilities team” as recipient. This wording gives the eventual assistant a useful boundary: request information without promising a reservation."
				},
				{
					"heading": "Step 2: generate the drafting brief",
					"text": "Use the English field values below, select Request and Formal, then generate. Read the exact prompt, especially the purpose and signature placeholder requirement. No actual email body has been written yet. Add a subject-line requirement to the purpose if your workflow needs one.",
					"example": "Input and selections\nRecipient: Facilities team\nPurpose: Ask whether a quiet meeting room is available; do not confirm a booking.\nType: Request\nTone: Formal\n\nExact tool output\nWrite a request email.\n\nRecipient: Facilities team\nTopic/Purpose: Ask whether a quiet meeting room is available; do not confirm a booking.\n\nUse formal, professional language appropriate for business communication.\n\nInclude:\n- Appropriate greeting\n- Clear body with the main message\n- Professional closing\n- Signature placeholder"
				},
				{
					"heading": "Step 3: evaluate a draft elsewhere",
					"text": "After using the prompt with an assistant, compare the draft with a simple editorial benchmark: “Could you confirm whether a quiet meeting room is available? Please do not reserve it yet.” This hand-written example is not tool output. It makes the desired distinction visible."
				},
				{
					"heading": "Step 4: perform the sending review",
					"text": "Check the recipient, requested action, and any claims about availability. Replace the signature placeholder yourself. If you need to include scheduling details, provide only confirmed information before sending through your own email application."
				},
				{
					"heading": "Mistake 1: copying the instructions as the email",
					"text": "The output begins by telling an assistant what to write. It is an intermediate request; sending it to the intended recipient would expose your drafting instructions instead of communicating the inquiry."
				},
				{
					"heading": "Mistake 2: relying on tone to set boundaries",
					"text": "Formal wording does not prevent an invented promise. Put the boundary in the purpose and verify that the eventual draft preserves it."
				}
			]
		},
		ko: {
			title: '이메일 작성 가이드',
			description: "모호한 이메일 목적을 범위가 명확한 초안 요청으로 바꾸고 발송 전에 최종 메시지를 검토하세요.",
			cta: '이메일 작성 사용하기',
			sections: [
				{
					"heading": "어조보다 행동 먼저 정하기",
					"text": "이 실습에서는 회의실 이용 가능 여부 문의를 준비합니다. 페이지는 완성된 이메일이 아닌 초안 작성 프롬프트를 반환하며 발송 기능이 없습니다. 메시지의 격식을 고르기 전에 수신자로부터 필요한 답을 정하세요."
				},
				{
					"heading": "1단계: 문의와 확약 구분하기",
					"text": "수정 전: “방을 예약해 줘.” 수정 후: “조용한 회의실을 이용할 수 있는지 묻고 예약을 확정하지 마세요.” 수정된 목적과 수신자 “시설 관리팀”을 입력하세요. 이 표현은 나중에 답할 AI에게 예약을 약속하지 않고 정보를 요청한다는 유용한 경계를 줍니다."
				},
				{
					"heading": "2단계: 초안 작성 지시 생성하기",
					"text": "아래 영어 필드 값을 사용하고 요청 유형과 격식 있는 어조를 선택한 뒤 생성하세요. 실제 프롬프트에서 특히 목적과 서명 자리표시자 요구를 읽으세요. 아직 실제 이메일 본문은 작성되지 않았습니다. 작업에 제목이 필요하다면 목적에 제목 요구를 추가하세요.",
					"example": "입력 및 선택 항목\n수신자: Facilities team\n목적: Ask whether a quiet meeting room is available; do not confirm a booking.\n유형: 요청\n어조: 격식 있음\n\n실제 도구 출력\nWrite a request email.\n\nRecipient: Facilities team\nTopic/Purpose: Ask whether a quiet meeting room is available; do not confirm a booking.\n\nUse formal, professional language appropriate for business communication.\n\nInclude:\n- Appropriate greeting\n- Clear body with the main message\n- Professional closing\n- Signature placeholder"
				},
				{
					"heading": "3단계: 다른 곳에서 만든 초안 평가하기",
					"text": "AI에 프롬프트를 사용한 뒤 초안을 간단한 편집 기준 문장과 비교하세요. “조용한 회의실을 이용할 수 있는지 확인해 주시겠어요? 아직 예약하지 말아 주세요.” 사람이 작성한 이 예시는 도구 출력이 아닙니다. 원하는 구분을 명확하게 보여줍니다."
				},
				{
					"heading": "4단계: 발송 전 검토하기",
					"text": "수신자, 요청한 행동, 이용 가능 여부에 관한 주장을 확인하세요. 서명 자리표시자는 직접 바꾸세요. 일정 세부 사항을 넣어야 한다면 확인된 정보만 제공한 뒤 자신의 이메일 앱에서 발송하세요."
				},
				{
					"heading": "실수 1: 지시문을 이메일로 복사하기",
					"text": "출력은 AI에게 무엇을 쓰라고 지시하며 시작합니다. 중간 요청이므로 의도한 수신자에게 보내면 문의를 전달하는 대신 초안 작성 지시를 보여주게 됩니다."
				},
				{
					"heading": "실수 2: 어조가 경계를 정해준다고 기대하기",
					"text": "격식 있는 표현만으로 임의의 약속을 막을 수는 없습니다. 목적에 경계를 적고 최종 초안이 이를 유지하는지 확인하세요."
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
				{#if section.example}
					<pre class="bg-gray-100 dark:bg-dark-900 p-4 rounded-lg overflow-x-auto text-sm mt-3 text-gray-800 dark:text-dark-200"><code>{section.example}</code></pre>
				{/if}
			</div>
		{/each}
	</div>
	{#if lang === 'en' || lang === 'ko'}
		<nav class="mt-8 space-y-3 text-sm" aria-label={lang === 'ko' ? '관련 도구와 가이드' : 'Related tools and guides'}>
			<a href="/{lang}/email" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "이메일 초안 프롬프트 생성기" : "Email drafting prompt builder"}</a>
			<a href="/{lang}/writing" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "글쓰기 수정 프롬프트 생성기" : "Writing revision prompt builder"}</a>
			<a href="/{lang}/translator" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "번역 프롬프트 생성기" : "Translation prompt builder"}</a>
		</nav>
	{/if}
	<div class="mt-12">
		<a href="/{lang}/email" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
