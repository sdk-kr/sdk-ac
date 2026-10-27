<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; cta: string; sections: { heading: string; text: string; example?: string; tips?: string[] }[] };
	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: "Hashtag Prompt Builder Guide",
			description: "Create a hashtag request from a specific post and screen the resulting candidates for relevance.",
			cta: "Try Hashtag Prompt Builder",
			sections: [
				{
					"heading": "Describe the post before its promotion",
					"text": "This walkthrough prepares tags for a repair tutorial. The page generates a request rather than researched hashtags. Start with what a reader will actually see, because relevance can be checked against the post while popularity cannot be established by this tool."
				},
				{
					"heading": "Step 1: replace the broad topic",
					"text": "Before: “Sustainability.” After: “A tutorial on repairing a loose chair joint.” The revised topic identifies an activity and an object. Enter it in English and select LinkedIn. A broad environmental theme alone could invite tags unrelated to the actual repair steps."
				},
				{
					"heading": "Step 2: inspect the requested count",
					"text": "Request five tags and generate the prompt below. The count and the fixed LinkedIn advice are compatible in this example. The output asks for hashtags on separate lines; it does not supply tags or supporting reach measurements.",
					"example": "Input and selections\nTopic: A tutorial on repairing a loose chair joint\nPlatform: LinkedIn\nCount: 5\n\nExact tool output\nGenerate 5 relevant hashtags for LinkedIn about: \"A tutorial on repairing a loose chair joint\"\n\nRequirements:\n- Keep it professional. Use 3-5 industry-relevant hashtags.\n- Include a mix of popular (high volume) and niche (specific) hashtags\n- Make them relevant to the topic\n- Format: List each hashtag on a new line, starting with #\n\nPlease provide the hashtags only, no explanations."
				},
				{
					"heading": "Step 3: screen candidate wording",
					"text": "Use the prompt elsewhere, then compare each returned term with the tutorial. As an editorial example, “#ChairRepair” describes this subject more directly than “#EverythingGreen”. These are illustrative candidates, not tool output or verified recommendations for platform performance."
				},
				{
					"heading": "Step 4: inspect usage before posting",
					"text": "Check the surviving candidates on the destination platform to understand their surrounding content. Remove duplicates, unrelated meanings, and terms that imply a product shown nowhere in the tutorial. Keep a smaller accurate set if some candidates fail; filling a quota is not the goal."
				},
				{
					"heading": "Mistake 1: assuming live trend research",
					"text": "The platform tip is fixed text. Words such as “popular” are instructions to another assistant, not observations made by this page."
				},
				{
					"heading": "Mistake 2: leaving conflicting counts",
					"text": "A different platform tip may recommend a range that disagrees with your selected count. Resolve the conflict in the copied request before asking for candidates."
				},
				{
					"heading": "Worked example: expose a count conflict",
					"text": "The tote repair request asks for five Instagram hashtags, but the inserted platform tip still says to use twenty to thirty. Both statements appear in the exact output. The builder does not reconcile them. Edit the copied request to state one desired count before asking an outside assistant for candidates; the example does not endorse the tip's reach claim.",
					"example": "Input and selections\ntopic: Repairing a torn canvas tote bag at home\nplatform: Instagram\ncount: 5\n\nExact tool output\nGenerate 5 relevant hashtags for Instagram about: \"Repairing a torn canvas tote bag at home\"\n\nRequirements:\n- Mix popular and niche hashtags. Use 20-30 for maximum reach.\n- Include a mix of popular (high volume) and niche (specific) hashtags\n- Make them relevant to the topic\n- Format: List each hashtag on a new line, starting with #\n\nPlease provide the hashtags only, no explanations."
				},
				{
					"heading": "Worked example: change the platform",
					"text": "The basil video request selects YouTube and keeps the count at five. The opening platform name and fixed tip change, while the remaining requirements keep the same structure. The function still asks for hashtags on separate lines. It does not inspect the video, distinguish platform metadata fields, or retrieve search traffic and current popularity measurements.",
					"example": "Input and selections\ntopic: A short video showing how to repot a basil plant\nplatform: YouTube\ncount: 5\n\nExact tool output\nGenerate 5 relevant hashtags for YouTube about: \"A short video showing how to repot a basil plant\"\n\nRequirements:\n- Tags help SEO. Include variations and related terms.\n- Include a mix of popular (high volume) and niche (specific) hashtags\n- Make them relevant to the topic\n- Format: List each hashtag on a new line, starting with #\n\nPlease provide the hashtags only, no explanations."
				},
				{
					"heading": "Mistake 3: reading preset tips as live evidence",
					"text": "Platform tips are stored strings. Words such as trending or maximum reach do not mean the page checked current usage, platform rules, or engagement data."
				},
				{
					"heading": "Mistake 4: expecting moderation of candidates",
					"text": "This page produces no candidate tags to screen. Review suggestions from another service for meaning and relevance yourself; no banned-tag or appropriateness filter runs here."
				},
				{
					"heading": "Mistake 5: treating the topic as researched context",
					"text": "The topic is copied inside quotation marks. A broad phrase such as gardening stays broad; the generator does not infer the actual plant, activity, or audience."
				},
				{
					"heading": "Tips for better results",
					"text": "",
					"tips": [
						"Describe the visible activity and specific subject in the topic.",
						"Compare the requested count with any numbers in the inserted tip.",
						"Remove unsupported popularity requirements from the copied prompt when relevance is your goal, then assess candidates against the actual post."
					]
				}
			]
		},
		ko: {
			title: "해시태그 프롬프트 생성기 가이드",
			description: "구체적인 게시물로 해시태그 요청을 만들고 결과 후보의 관련성을 검토하세요.",
			cta: "해시태그 프롬프트 생성기 사용하기",
			sections: [
				{
					"heading": "홍보보다 게시물 내용 먼저 설명하기",
					"text": "이 실습에서는 수리 안내 게시물의 태그를 준비합니다. 페이지는 조사된 해시태그가 아니라 요청을 생성합니다. 이 도구는 인기도를 확인할 수 없지만 관련성은 게시물과 대조할 수 있으므로 독자가 실제로 볼 내용부터 시작하세요."
				},
				{
					"heading": "1단계: 넓은 주제 좁히기",
					"text": "수정 전: “지속 가능성.” 수정 후: “헐거운 의자 연결부를 수리하는 안내.” 수정한 주제에는 활동과 물체가 드러납니다. 영어로 입력하고 LinkedIn을 선택하세요. 넓은 환경 주제만으로는 실제 수리 단계와 무관한 태그를 유도할 수 있습니다."
				},
				{
					"heading": "2단계: 요청 개수 살펴보기",
					"text": "태그 다섯 개를 요청하고 아래 프롬프트를 생성하세요. 이 예제에서는 개수와 고정된 LinkedIn 안내가 양립합니다. 출력은 해시태그를 한 줄에 하나씩 요청하며 태그나 이를 뒷받침하는 도달 범위 측정값을 제공하지 않습니다.",
					"example": "입력 및 선택 항목\n주제: A tutorial on repairing a loose chair joint\n플랫폼: LinkedIn\n개수: 5\n\n실제 도구 출력\nGenerate 5 relevant hashtags for LinkedIn about: \"A tutorial on repairing a loose chair joint\"\n\nRequirements:\n- Keep it professional. Use 3-5 industry-relevant hashtags.\n- Include a mix of popular (high volume) and niche (specific) hashtags\n- Make them relevant to the topic\n- Format: List each hashtag on a new line, starting with #\n\nPlease provide the hashtags only, no explanations."
				},
				{
					"heading": "3단계: 후보 표현 검토하기",
					"text": "다른 곳에서 프롬프트를 사용한 뒤 반환된 각 용어를 안내 내용과 비교하세요. 편집 예시로 “#ChairRepair”는 “#EverythingGreen”보다 이 주제를 더 직접적으로 설명합니다. 이는 설명용 후보이며 도구 출력이나 플랫폼 성과가 검증된 추천이 아닙니다."
				},
				{
					"heading": "4단계: 게시 전 사용 맥락 살펴보기",
					"text": "대상 플랫폼에서 남은 후보를 확인하여 함께 쓰이는 내용의 맥락을 파악하세요. 중복, 무관한 뜻, 안내에 나오지 않는 제품을 암시하는 용어를 제거하세요. 일부 후보가 탈락하면 정확한 소수만 남기세요. 개수를 채우는 것이 목표는 아닙니다."
				},
				{
					"heading": "실수 1: 실시간 유행 조사로 오해하기",
					"text": "플랫폼 팁은 고정 텍스트입니다. “popular” 같은 단어는 다른 AI에게 보내는 지시이며 이 페이지에서 관찰한 결과가 아닙니다."
				},
				{
					"heading": "실수 2: 충돌하는 개수 방치하기",
					"text": "다른 플랫폼 팁은 선택한 개수와 다른 범위를 권할 수 있습니다. 후보를 요청하기 전에 복사한 요청의 충돌을 해결하세요."
				},
				{
					"heading": "추가 예제: 개수 충돌 확인",
					"text": "가방 수선 요청은 Instagram 해시태그 다섯 개를 요구하지만 삽입된 플랫폼 팁은 여전히 20~30개를 쓰라고 합니다. 정확한 출력에는 두 문장이 모두 나옵니다. 생성기는 이를 조정하지 않습니다. 외부 AI에 후보를 요청하기 전에 복사한 요청에 원하는 개수를 하나로 명시하세요. 이 예제는 팁의 도달 효과 주장을 지지하지 않습니다.",
					"example": "입력과 선택값\ntopic: Repairing a torn canvas tote bag at home\nplatform: Instagram\ncount: 5\n\n정확한 도구 출력\nGenerate 5 relevant hashtags for Instagram about: \"Repairing a torn canvas tote bag at home\"\n\nRequirements:\n- Mix popular and niche hashtags. Use 20-30 for maximum reach.\n- Include a mix of popular (high volume) and niche (specific) hashtags\n- Make them relevant to the topic\n- Format: List each hashtag on a new line, starting with #\n\nPlease provide the hashtags only, no explanations."
				},
				{
					"heading": "추가 예제: 플랫폼 바꾸기",
					"text": "바질 영상 요청은 YouTube를 선택하고 개수는 다섯 개로 유지합니다. 첫 부분의 플랫폼 이름과 고정 팁은 바뀌지만 나머지 요구 사항 구조는 같습니다. 함수는 여전히 해시태그를 한 줄에 하나씩 요청합니다. 영상을 살피거나 플랫폼 메타데이터 필드를 구분하거나 검색량과 현재 인기 수치를 가져오지는 않습니다.",
					"example": "입력과 선택값\ntopic: A short video showing how to repot a basil plant\nplatform: YouTube\ncount: 5\n\n정확한 도구 출력\nGenerate 5 relevant hashtags for YouTube about: \"A short video showing how to repot a basil plant\"\n\nRequirements:\n- Tags help SEO. Include variations and related terms.\n- Include a mix of popular (high volume) and niche (specific) hashtags\n- Make them relevant to the topic\n- Format: List each hashtag on a new line, starting with #\n\nPlease provide the hashtags only, no explanations."
				},
				{
					"heading": "실수 3: 사전 팁을 실시간 근거로 보기",
					"text": "플랫폼 팁은 저장된 문자열입니다. trending이나 maximum reach라는 표현은 현재 사용량, 플랫폼 규칙, 참여 데이터를 확인했다는 뜻이 아닙니다."
				},
				{
					"heading": "실수 4: 후보 검수 기대하기",
					"text": "이 페이지는 검수할 태그 후보 자체를 만들지 않습니다. 다른 서비스가 제안한 태그의 의미와 관련성을 직접 검토하세요. 금지 태그나 적절성 필터는 실행되지 않습니다."
				},
				{
					"heading": "실수 5: 주제를 조사된 맥락으로 보기",
					"text": "주제는 따옴표 안에 복사됩니다. gardening 같은 넓은 표현은 그대로 남으며 생성기는 실제 식물, 활동, 독자를 추론하지 않습니다."
				},
				{
					"heading": "더 나은 결과를 위한 팁",
					"text": "",
					"tips": [
						"주제에 보이는 활동과 구체적인 대상을 적으세요.",
						"요청한 개수와 삽입된 팁의 숫자를 비교하세요.",
						"관련성이 목표라면 복사한 요청에서 근거 없는 인기 요구를 제거하고, 후보를 실제 게시물과 대조하세요."
					]
				}
			]
		},
		ja: {
			title: 'ハッシュタグ生成ガイド',
			description: 'AIを使用してソーシャルメディア向けの効果的なハッシュタグを生成する方法を学びましょう。Instagram、Twitter、TikTokなどに最適化されたハッシュタグでコンテンツの可視性を高めましょう。',
			cta: 'ハッシュタグ生成を試す',
			sections: [
				{
					heading: 'ハッシュタグ生成ツールとは？',
					text: 'ハッシュタグ生成ツールは、ソーシャルメディアコンテンツに関連性のある、トレンディで効果的なハッシュタグを作成するAI搭載のツールです。ハッシュタグは、Instagram、Twitter、TikTok、LinkedIn、Facebookなどのプラットフォームでのコンテンツ発見に不可欠です。私たちのジェネレーターはコンテンツを分析し、そのコンテキストとテーマを理解し、リーチとエンゲージメントを最大化するように設計されたハッシュタグのキュレーションリストを生成します。どのタグが効果的か推測したり、トレンドトピックをリサーチするのに時間を費やす代わりに、特定のコンテンツとターゲットオーディエンスに合わせて最適化されたハッシュタグを即座に生成できます。このツールは、ハッシュタグの人気度、競争レベル、関連性などの要素を考慮して、投稿が適切な人々に発見されるよう支援します。'
				},
				{
					heading: 'ハッシュタグ生成ツールの仕組み',
					text: 'AIハッシュタグ生成ツールは、高度な自然言語処理を使用してコンテンツを深く理解します。説明、キャプション、またはトピックを提供すると、AIは主要なテーマ、関連する概念、現在のトレンドを識別します。そして、さまざまなカテゴリのハッシュタグを生成します：幅広いリーチのための人気タグ、バランスの取れた露出のための中程度の競争タグ、ターゲットオーディエンス向けのニッチ特定タグ、タイムリーな関連性のためのトレンドタグ。生成ツールはプラットフォーム固有のベストプラクティスを考慮します - Instagramの投稿は20-30個のハッシュタグでうまく機能し、Twitterは2-5個の集中したタグが効果的です。リーチを損なう可能性のある過度に使用されたり禁止されたハッシュタグを避けながら、コンテンツの可視性を最適化するよう設計された戦略的なミックスを受け取ります。'
				},
				{
					heading: 'ハッシュタグ生成ツールの使い方',
					text: '始めるのは簡単です。入力フィールドにコンテンツの説明、キャプション、またはトピックを入力します。ハッシュタグ戦略はプラットフォームによって異なるため、ターゲットプラットフォーム（Instagram、Twitter、TikTok、LinkedInなど）を選択します。旅行、食べ物、ファッション、フィットネス、ビジネス、テクノロジーなどのコンテンツカテゴリを選択します。希望するハッシュタグ数とミックス（人気vsニッチの比率）を指定します。生成をクリックすると、数秒以内にカスタマイズされたハッシュタグセットを受け取ります。出力には、人気レベル別のハッシュタググループ、推定リーチメトリクス、ハッシュタグ配置の提案が含まれます。セット全体をコピーするか、個別のハッシュタグを選択できます。'
				},
				{
					heading: 'ハッシュタグ戦略のベストプラクティス',
					text: '効果的なハッシュタグ戦略は、人気のタグを追加するだけではありません。ハッシュタグのサイズを混ぜ合わせてください：幅広い露出のために高ボリュームハッシュタグ（100万+投稿）、競争力のある可視性のために中ボリューム（10万-100万投稿）、目立つことができるニッチコミュニティのために低ボリューム（10万未満）を使用します。ハッシュタグを関連性のあるものに保ってください - 無関係なタグはエンゲージメントを損ない、プラットフォームのペナルティを引き起こす可能性があります。スパムに見えないように投稿間でハッシュタグをローテーションしてください。キャンペーン用のブランドハッシュタグを作成し、ユーザー生成コンテンツを奨励してください。競合他社のハッシュタグをリサーチして、業界で何が効果的かを理解してください。リーチを制限する可能性のある禁止またはシャドウバンされたハッシュタグを避けてください。'
				},
				{
					heading: 'プラットフォーム別のヒント',
					text: '各ソーシャルプラットフォームには独自のハッシュタグダイナミクスがあります。Instagramは最大30個のハッシュタグを許可し、探索ページとハッシュタグフィードでの発見可能性の向上で戦略的な使用に報います。Twitterはより控えめです - 読みやすさを維持しながらエンゲージメントを高めるには、2-5個の関連ハッシュタグが最適です。TikTokハッシュタグは、動画がFor Youページに表示されるのに役立ちます。トレンドのサウンド/チャレンジとニッチタグを混ぜ合わせてください。LinkedInハッシュタグ（3-5個推奨）は、プロフェッショナルなコンテンツが業界のオーディエンスに届くのに役立ちます。Facebookハッシュタグは影響力が少ないですが、発見可能性に役立つことがあります。YouTubeハッシュタグ（動画タイトルの上に3-5個）は検索可視性を向上させます。'
				},
				{
					heading: '一般的な使用例',
					text: 'コンテンツクリエイターはハッシュタグ生成ツールを使用してフォロワーを増やし、すべての投稿でエンゲージメントを高めています。企業は製品発売、キャンペーン、ブランド認知イニシアチブのためのハッシュタグを生成しています。ソーシャルメディアマネージャーは、複数のクライアントアカウント用に最適化されたハッシュタグを生成することで、何時間ものリサーチ時間を節約しています。インフルエンサーは関連性を維持し、新しいオーディエンスに届くためにトレンドタグを見つけています。eコマースストアは製品固有のハッシュタグを使用してトラフィックと売上を促進しています。イベント主催者はユニークなイベントハッシュタグと関連する発見タグを作成しています。旅行ブロガーは場所固有と旅行ニッチのハッシュタグを見つけています。フードコンテンツクリエイターはフーディーコミュニティとトレンドの料理タグを発見しています。'
				}
			]
		},
		zh: {
			title: '标签生成指南',
			description: '学习如何使用AI为社交媒体生成有效的标签。通过为Instagram、Twitter、TikTok等优化的标签提升您的内容可见度。',
			cta: '试用标签生成',
			sections: [
				{
					heading: '什么是标签生成器？',
					text: '标签生成器是一个AI驱动的工具，可为您的社交媒体内容创建相关的、热门的和有效的标签。标签对于Instagram、Twitter、TikTok、LinkedIn和Facebook等平台上的内容发现至关重要。我们的生成器分析您的内容，理解其上下文和主题，并生成旨在最大化您的覆盖范围和参与度的精选标签列表。您无需猜测哪些标签可能有效或花时间研究热门话题，而是可以立即生成针对您特定内容和目标受众量身定制的优化标签。该工具考虑标签受欢迎程度、竞争水平和相关性等因素，帮助您的帖子被合适的人发现。'
				},
				{
					heading: '标签生成器如何工作',
					text: '我们的AI标签生成器使用先进的自然语言处理来深入理解您的内容。当您提供描述、标题或主题时，AI会识别关键主题、相关概念和当前趋势。然后它生成不同类别的标签：用于广泛覆盖的高人气标签、用于平衡曝光的中等竞争标签、用于目标受众的细分特定标签，以及用于及时相关性的热门标签。生成器考虑特定平台的最佳实践 - Instagram帖子使用20-30个标签效果很好，而Twitter使用2-5个集中标签效果更佳。您将收到一个战略性组合，旨在优化内容可见度，同时避免可能损害覆盖范围的过度使用或被禁止的标签。'
				},
				{
					heading: '如何使用标签生成工具',
					text: '入门很简单。在输入字段中输入您的内容描述、标题或主题。选择您的目标平台（Instagram、Twitter、TikTok、LinkedIn等），因为标签策略因平台而异。选择您的内容类别，如旅行、美食、时尚、健身、商业或技术。指定您偏好的标签数量和组合（热门与细分的比例）。点击生成，几秒钟内即可收到定制的标签集。输出包括按受欢迎程度分组的标签、预估覆盖指标和标签放置建议。您可以复制整个集合或选择单个标签。使用不同的参数重新生成以探索各种组合，直到找到完美的组合。'
				},
				{
					heading: '标签策略最佳实践',
					text: '有效的标签策略不仅仅是添加热门标签。混合标签大小：使用一些高流量标签（100万+帖子）获得广泛曝光，中等流量（10万-100万帖子）获得竞争性可见度，低流量（10万以下）进入您可以脱颖而出的细分社区。保持标签相关性 - 不相关的标签可能损害参与度并可能触发平台处罚。在帖子之间轮换标签以避免看起来像垃圾信息。为活动创建品牌标签并鼓励用户生成内容。研究竞争对手的标签以了解您所在行业的有效做法。避免可能限制覆盖范围的被禁止或影子封禁的标签。我们的生成器自动过滤有问题的标签并提供平衡的组合以获得最佳性能。'
				},
				{
					heading: '特定平台提示',
					text: '每个社交平台都有独特的标签动态。Instagram允许最多30个标签，并通过在探索页面和标签动态中增加可发现性来奖励战略性使用。Twitter更保守 - 2-5个相关标签在保持可读性的同时效果最佳。TikTok标签帮助您的视频出现在For You页面；将热门声音/挑战与细分标签混合。LinkedIn标签（建议3-5个）帮助专业内容触达行业受众。Facebook标签影响较小但仍可帮助提高可发现性。YouTube标签（视频标题上方3-5个）提高搜索可见度。我们的生成器根据您选择的平台定制建议以最大化效果。'
				},
				{
					heading: '常见使用场景',
					text: '内容创作者使用我们的标签生成器来增加粉丝并提高每篇帖子的参与度。企业为产品发布、活动和品牌知名度计划生成标签。社交媒体经理通过为多个客户账户生成优化标签节省数小时的研究时间。网红寻找热门标签以保持相关性并触达新受众。电子商务商店使用产品特定标签来推动流量和销售。活动组织者创建独特的活动标签和相关发现标签。旅行博主找到位置特定和旅行细分标签。美食内容创作者发现美食社区和热门烹饪标签。无论您的细分领域是什么，我们的AI都能理解您的内容并生成有效连接您与目标受众的标签。'
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
				{#if section.text}
					<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
				{/if}
				{#if section.tips}
					<ul class="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-dark-400 leading-relaxed">
						{#each section.tips as tip}
							<li>{tip}</li>
						{/each}
					</ul>
				{/if}
				{#if section.example}
					<pre class="bg-gray-100 dark:bg-dark-900 p-4 rounded-lg overflow-x-auto text-sm mt-3 text-gray-800 dark:text-dark-200"><code>{section.example}</code></pre>
				{/if}
			</div>
		{/each}
	</div>
	{#if lang === 'en' || lang === 'ko'}
		<nav class="mt-8 space-y-3 text-sm" aria-label={lang === 'ko' ? '관련 도구와 가이드' : 'Related tools and guides'}>
			<a href="/{lang}/hashtag" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "해시태그 프롬프트 생성기" : "Hashtag Prompt Builder"}</a>
			<a href="/{lang}/writing" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "글쓰기 수정 프롬프트 생성기" : "Writing Revision Prompt Builder"}</a>
			<a href="/{lang}/image" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "이미지 프롬프트 생성기" : "Image Prompt Builder"}</a>
		</nav>
	{/if}
	<div class="mt-12">
		<a href="/{lang}/hashtag" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
