<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; description: string; cta: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Hashtag Generator Guide',
			description: 'Learn how to generate effective hashtags for social media using AI. Boost your content visibility with optimized hashtags for Instagram, Twitter, TikTok and more.',
			cta: 'Try Hashtag Generator',
			sections: [
				{
					heading: 'What is a Hashtag Generator?',
					text: 'A hashtag generator is an AI-powered tool that creates relevant, trending, and effective hashtags for your social media content. Hashtags are essential for content discovery on platforms like Instagram, Twitter, TikTok, LinkedIn, and Facebook. Our generator analyzes your content, understands its context and theme, and produces a curated list of hashtags designed to maximize your reach and engagement. Instead of guessing which tags might work or spending time researching trending topics, you can instantly generate optimized hashtags tailored to your specific content and target audience. The tool considers factors like hashtag popularity, competition level, and relevance to help your posts get discovered by the right people.'
				},
				{
					heading: 'How the Hashtag Generator Works',
					text: 'Our AI hashtag generator uses advanced natural language processing to understand your content deeply. When you provide a description, caption, or topic, the AI identifies key themes, related concepts, and current trends. It then generates hashtags across different categories: highly popular tags for broad reach, medium-competition tags for balanced exposure, niche-specific tags for targeted audiences, and trending tags for timely relevance. The generator considers platform-specific best practices - Instagram posts perform well with 20-30 hashtags, while Twitter benefits from 2-5 focused tags. You receive a strategic mix designed to optimize your content\'s visibility while avoiding overused or banned hashtags that could hurt your reach.'
				},
				{
					heading: 'Using the Hashtag Generator Tool',
					text: 'Getting started is simple. Enter your content description, caption, or topic into the input field. Select your target platform (Instagram, Twitter, TikTok, LinkedIn, etc.) as hashtag strategies differ by platform. Choose your content category such as travel, food, fashion, fitness, business, or technology. Specify your preferred hashtag count and mix (popular vs niche ratio). Click generate and receive your customized hashtag set within seconds. The output includes hashtag groupings by popularity level, estimated reach metrics, and suggestions for hashtag placement. You can copy the entire set or select individual hashtags. Regenerate with different parameters to explore various combinations until you find the perfect mix.'
				},
				{
					heading: 'Hashtag Strategy Best Practices',
					text: 'Effective hashtag strategy goes beyond just adding popular tags. Mix hashtag sizes: use some high-volume hashtags (1M+ posts) for broad exposure, medium-volume (100K-1M posts) for competitive visibility, and low-volume (under 100K) for niche communities where you can stand out. Keep hashtags relevant - irrelevant tags can hurt engagement and may trigger platform penalties. Rotate your hashtags between posts to avoid appearing spammy. Create branded hashtags for campaigns and encourage user-generated content. Research competitor hashtags to understand what works in your industry. Avoid banned or shadowbanned hashtags that can limit your reach. Our generator automatically filters problematic tags and provides a balanced mix for optimal performance.'
				},
				{
					heading: 'Platform-Specific Tips',
					text: 'Each social platform has unique hashtag dynamics. Instagram allows up to 30 hashtags and rewards strategic use with increased discoverability in the Explore page and hashtag feeds. Twitter is more conservative - 2-5 relevant hashtags work best to maintain readability while boosting engagement. TikTok hashtags help your videos appear on the For You page; mix trending sounds/challenges with niche tags. LinkedIn hashtags (3-5 recommended) help professional content reach industry audiences. Facebook hashtags are less impactful but can still help with discoverability. YouTube hashtags (3-5 above the video title) improve search visibility. Our generator tailors recommendations based on your selected platform to maximize effectiveness.'
				},
				{
					heading: 'Common Use Cases',
					text: 'Content creators use our hashtag generator to grow their following and increase engagement on every post. Businesses generate hashtags for product launches, campaigns, and brand awareness initiatives. Social media managers save hours of research time by generating optimized hashtags for multiple client accounts. Influencers find trending tags to stay relevant and reach new audiences. E-commerce stores use product-specific hashtags to drive traffic and sales. Event organizers create unique event hashtags and related discovery tags. Travel bloggers find location-specific and travel-niche hashtags. Food content creators discover foodie communities and trending culinary tags. Whatever your niche, our AI understands your content and generates hashtags that connect you with your target audience effectively.'
				}
			]
		},
		ko: {
			title: '해시태그 생성 가이드',
			description: 'AI를 사용하여 소셜 미디어에 효과적인 해시태그를 생성하는 방법을 알아보세요. Instagram, Twitter, TikTok 등에 최적화된 해시태그로 콘텐츠 가시성을 높이세요.',
			cta: '해시태그 생성 사용하기',
			sections: [
				{
					heading: '해시태그 생성기란?',
					text: '해시태그 생성기는 소셜 미디어 콘텐츠에 관련성 있고, 트렌디하며, 효과적인 해시태그를 만드는 AI 기반 도구입니다. 해시태그는 Instagram, Twitter, TikTok, LinkedIn, Facebook과 같은 플랫폼에서 콘텐츠 발견에 필수적입니다. 생성기는 콘텐츠를 분석하고 맥락과 테마를 이해하며 도달 범위와 참여를 극대화하도록 설계된 해시태그 목록을 생성합니다. 어떤 태그가 효과가 있을지 추측하거나 트렌드 주제를 조사하는 데 시간을 쓰는 대신 특정 콘텐츠와 타겟 오디언스에 맞춤화된 최적화된 해시태그를 즉시 생성할 수 있습니다. 이 도구는 해시태그 인기도, 경쟁 수준, 관련성과 같은 요소를 고려하여 게시물이 적합한 사람들에게 발견되도록 돕습니다.'
				},
				{
					heading: '해시태그 생성기 작동 방식',
					text: 'AI 해시태그 생성기는 고급 자연어 처리를 사용하여 콘텐츠를 깊이 이해합니다. 설명, 캡션 또는 주제를 제공하면 AI가 핵심 테마, 관련 개념, 현재 트렌드를 식별합니다. 그런 다음 다양한 카테고리의 해시태그를 생성합니다: 광범위한 도달을 위한 인기 태그, 균형 잡힌 노출을 위한 중간 경쟁 태그, 타겟 오디언스를 위한 니치 특정 태그, 시의적절한 관련성을 위한 트렌드 태그. 생성기는 플랫폼별 모범 사례를 고려합니다 - Instagram 게시물은 20-30개의 해시태그로 잘 작동하고, Twitter는 2-5개의 집중된 태그가 좋습니다. 도달 범위를 해칠 수 있는 과도하게 사용되거나 금지된 해시태그를 피하면서 콘텐츠 가시성을 최적화하도록 설계된 전략적 믹스를 받습니다.'
				},
				{
					heading: '해시태그 생성 도구 사용법',
					text: '시작은 간단합니다. 입력 필드에 콘텐츠 설명, 캡션 또는 주제를 입력합니다. 해시태그 전략이 플랫폼마다 다르므로 타겟 플랫폼(Instagram, Twitter, TikTok, LinkedIn 등)을 선택합니다. 여행, 음식, 패션, 피트니스, 비즈니스, 기술 등 콘텐츠 카테고리를 선택합니다. 선호하는 해시태그 수와 믹스(인기 vs 니치 비율)를 지정합니다. 생성을 클릭하면 몇 초 내에 맞춤형 해시태그 세트를 받습니다. 출력에는 인기도 수준별 해시태그 그룹, 예상 도달 메트릭, 해시태그 배치 제안이 포함됩니다. 전체 세트를 복사하거나 개별 해시태그를 선택할 수 있습니다. 완벽한 믹스를 찾을 때까지 다른 매개변수로 다시 생성하세요.'
				},
				{
					heading: '해시태그 전략 모범 사례',
					text: '효과적인 해시태그 전략은 단순히 인기 태그를 추가하는 것 이상입니다. 해시태그 크기를 혼합하세요: 광범위한 노출을 위해 고용량 해시태그(100만+ 게시물), 경쟁력 있는 가시성을 위해 중간 용량(10만-100만 게시물), 눈에 띌 수 있는 니치 커뮤니티를 위해 저용량(10만 미만)을 사용합니다. 해시태그를 관련성 있게 유지하세요 - 관련 없는 태그는 참여를 해치고 플랫폼 페널티를 유발할 수 있습니다. 스팸처럼 보이지 않도록 게시물 간에 해시태그를 교체하세요. 캠페인용 브랜드 해시태그를 만들고 사용자 생성 콘텐츠를 장려하세요. 경쟁사 해시태그를 조사하여 업계에서 무엇이 효과적인지 이해하세요. 도달 범위를 제한할 수 있는 금지되거나 쉐도우밴된 해시태그를 피하세요.'
				},
				{
					heading: '플랫폼별 팁',
					text: '각 소셜 플랫폼은 고유한 해시태그 역학을 가지고 있습니다. Instagram은 최대 30개의 해시태그를 허용하며 탐색 페이지와 해시태그 피드에서 발견 가능성 증가로 전략적 사용에 보상합니다. Twitter는 더 보수적입니다 - 가독성을 유지하면서 참여를 높이기 위해 2-5개의 관련 해시태그가 가장 잘 작동합니다. TikTok 해시태그는 비디오가 For You 페이지에 나타나도록 도와줍니다; 트렌드 사운드/챌린지와 니치 태그를 혼합하세요. LinkedIn 해시태그(3-5개 권장)는 전문 콘텐츠가 업계 오디언스에게 도달하도록 돕습니다. Facebook 해시태그는 영향력이 적지만 여전히 발견 가능성에 도움이 될 수 있습니다. YouTube 해시태그(비디오 제목 위에 3-5개)는 검색 가시성을 향상시킵니다.'
				},
				{
					heading: '일반적인 사용 사례',
					text: '콘텐츠 제작자들은 해시태그 생성기를 사용하여 팔로워를 늘리고 모든 게시물에서 참여를 높입니다. 기업은 제품 출시, 캠페인, 브랜드 인지도 이니셔티브를 위한 해시태그를 생성합니다. 소셜 미디어 매니저는 여러 고객 계정에 대해 최적화된 해시태그를 생성하여 수시간의 조사 시간을 절약합니다. 인플루언서는 관련성을 유지하고 새로운 오디언스에게 도달하기 위해 트렌드 태그를 찾습니다. 전자상거래 상점은 제품별 해시태그를 사용하여 트래픽과 판매를 유도합니다. 이벤트 주최자는 고유한 이벤트 해시태그와 관련 발견 태그를 만듭니다. 여행 블로거는 위치별 및 여행 니치 해시태그를 찾습니다. 음식 콘텐츠 제작자는 푸디 커뮤니티와 트렌드 요리 태그를 발견합니다.'
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
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>
	<div class="mt-12">
		<a href="/{lang}/hashtag" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
