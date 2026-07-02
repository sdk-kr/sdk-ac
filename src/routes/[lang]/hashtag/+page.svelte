<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'What Hashtags Do (and No Longer Do) on Each Platform',
				ko: '플랫폼별로 해시태그가 하는 일 (그리고 더는 안 하는 일)',
				ja: '各プラットフォームでハッシュタグがすること(もうしないこと)',
				zh: '话题标签在各平台的作用(以及不再有的作用)'
			},
			body: {
				en: `Hashtags stopped being a magic reach lever years ago, but they still do real work — different work on each platform, which is why one tag list pasted everywhere underperforms everywhere.

On Instagram, hashtags primarily help the system classify your content for recommendations; Instagram's own guidance has shifted from "up to 30" to a handful of genuinely descriptive tags, and search now weighs keywords in captions too. Tags still surface posts on tag pages, but Reels distribution is driven far more by watch time and shares than by tag count.

On X (Twitter), hashtags are mostly a campaign and community convention — one or two for an event, a game, a running joke. Engagement analyses consistently suggest that stuffing several tags reads as spammy, and the algorithm needs no tags to classify text.

TikTok sits in between: tags feed the interest graph that decides which For You audiences see your video first. Broad tags like fyp are wallpaper; specific ones (booktok, homelab, sourdough) actually route content to communities.

LinkedIn treats three to five professional tags as metadata for topic-following feeds. YouTube uses tags weakly, for search disambiguation — the title and description matter far more.

The practical takeaway: pick the platform first, then generate tags. This tool's platform switch changes the strategy, not just the count.`,
				ko: `해시태그가 마법의 도달 레버였던 시대는 몇 년 전에 끝났지만, 여전히 실질적인 일을 합니다. 플랫폼마다 다른 일을요. 그래서 태그 목록 하나를 모든 곳에 붙여넣으면 모든 곳에서 저조합니다.

인스타그램에서 해시태그의 주된 역할은 시스템이 추천을 위해 콘텐츠를 분류하도록 돕는 것입니다. 인스타그램의 공식 안내도 '최대 30개'에서 진짜로 내용을 설명하는 소수의 태그로 옮겨 왔고, 검색은 이제 캡션의 키워드도 함께 봅니다. 태그 페이지 노출은 여전히 있지만, 릴스 배포는 태그 개수보다 시청 시간과 공유에 훨씬 크게 좌우됩니다.

X(트위터)에서 해시태그는 대체로 캠페인과 커뮤니티의 관례입니다. 이벤트, 경기, 밈에 한두 개. 참여도 분석들은 태그를 여러 개 욱여넣으면 스팸처럼 읽힌다는 것을 일관되게 시사하고, 알고리즘은 텍스트 분류에 태그가 필요 없습니다.

틱톡은 그 중간입니다. 태그는 어떤 For You 시청자에게 영상을 먼저 보여줄지 정하는 관심사 그래프에 공급됩니다. fyp 같은 광역 태그는 벽지이고, 구체적인 태그(booktok, homelab, sourdough)가 실제로 콘텐츠를 커뮤니티로 라우팅합니다.

링크드인은 3~5개의 직업적 태그를 주제 팔로우 피드용 메타데이터로 취급합니다. 유튜브에서 태그는 검색 모호성 해소에 약하게 쓰일 뿐, 제목과 설명이 훨씬 중요합니다.

실전 결론: 플랫폼을 먼저 고르고 그다음 태그를 생성하세요. 이 도구의 플랫폼 스위치는 개수가 아니라 전략을 바꿉니다.`,
				ja: `ハッシュタグが魔法のリーチレバーだった時代は数年前に終わりましたが、今も実際の仕事はしています。ただしプラットフォームごとに違う仕事を。だから1つのタグリストをどこにでも貼り付けると、どこでも成績が振るわないのです。

Instagramでは、ハッシュタグの主な役割はシステムがレコメンドのためにコンテンツを分類するのを助けることです。Instagram自身のガイダンスも「最大30個」から、内容を本当に説明する少数のタグへと移り、検索は今やキャプション内のキーワードも重視します。タグページへの露出は残っていますが、リールの配信はタグの数よりも視聴時間とシェアにはるかに強く左右されます。

X(Twitter)では、ハッシュタグは主にキャンペーンとコミュニティの慣習です。イベント、試合、内輪ネタに1〜2個。エンゲージメント分析は一貫して、タグの詰め込みがスパム的に読まれることを示唆しており、アルゴリズムはテキストの分類にタグを必要としません。

TikTokはその中間です。タグは、どのFor Youオーディエンスに動画を最初に見せるかを決める興味グラフに供給されます。fypのような広域タグは壁紙にすぎず、具体的なタグ(booktok、homelab、sourdough)こそがコンテンツをコミュニティへ届けます。

LinkedInは3〜5個の職業的タグを、トピックフォロー用フィードのメタデータとして扱います。YouTubeのタグは検索の曖昧さ解消に弱く働くだけで、タイトルと説明文のほうがはるかに重要です。

実践的な結論:まずプラットフォームを選び、それからタグを生成すること。このツールのプラットフォーム切り替えは、数ではなく戦略を変えます。`,
				zh: `话题标签作为"流量魔法杠杆"的时代几年前就结束了,但它们仍在做实事——只是在每个平台做的是不同的事。这就是为什么一份标签清单四处粘贴,四处都表现平平。

在 Instagram,标签的主要作用是帮系统为推荐分类你的内容;官方指引也已从"最多 30 个"转向少量真正描述内容的标签,而且搜索现在同样看正文里的关键词。标签页曝光仍然存在,但 Reels 的分发远比标签数量更取决于完播率和分享。

在 X(推特),标签基本是活动与社群的约定俗成——一场活动、一场比赛、一个梗,配一两个即可。对互动数据的分析一再表明,堆砌多个标签会显得像垃圾内容,而算法给文本分类根本不需要标签。

TikTok 介于两者之间:标签喂给兴趣图谱,决定你的视频先推给哪些 For You 受众。fyp 这类宽泛标签是墙纸;具体标签(booktok、homelab、sourdough)才真正把内容路由到社群。

LinkedIn 把三到五个职业相关标签当作话题订阅信息流的元数据。YouTube 的标签只在搜索消歧上有微弱作用——标题和描述重要得多。

实用结论:先选平台,再生成标签。这个工具的平台开关改变的是策略,不只是数量。`
			}
		},
		{
			heading: {
				en: 'Why Eight Specific Tags Beat Thirty Generic Ones',
				ko: '왜 구체적인 태그 8개가 두루뭉술한 30개를 이기는가',
				ja: 'なぜ具体的な8個が汎用の30個に勝つのか',
				zh: '为什么 8 个精准标签胜过 30 个泛泛标签'
			},
			body: {
				en: `A hashtag is a room you walk into. Under love or travel, hundreds of posts arrive per minute; your post is on the newest feed for seconds, and you are competing with accounts whose engagement dwarfs yours. Ranked ("Top") placement in a huge tag goes to posts that already performed — using the tag did not cause the performance.

Mid-size and niche tags invert the math. In a tag with a few thousand well-targeted followers — say solotravelseoul instead of travel — your post can stay visible for hours, and everyone browsing chose to be there. Smaller rooms, but full of the right people, and early engagement from the right people is exactly the signal recommendation systems amplify into broader distribution.

The working structure is a ladder: a couple of mid-size reach tags (100k–1M posts), a majority of niche community tags (5k–100k) where you can realistically rank, and a few micro tags (under 5k) including your branded tag. Skip the mega tier entirely unless you are already a large account.

One more reason fewer is better: tag relevance is a classification signal. Thirty tags spanning fitness, crypto and coffeeart tell the system your post is about nothing in particular. Eight coherent tags describe one topic — and coherent classification is what earns non-follower reach.`,
				ko: `해시태그는 당신이 걸어 들어가는 방입니다. love나 travel 아래에는 분당 수백 개의 게시물이 도착합니다. 당신의 게시물은 최신 피드에 몇 초 머물고, 참여도가 당신을 압도하는 계정들과 경쟁합니다. 거대 태그의 상위('인기') 자리는 이미 성과를 낸 게시물에게 돌아갑니다. 태그를 써서 성과가 난 게 아닙니다.

중형·니치 태그는 그 산수를 뒤집습니다. 잘 겨냥된 수천 명이 보는 태그 — travel 대신 solotravelseoul — 에서는 게시물이 몇 시간씩 노출될 수 있고, 거기를 둘러보는 모두가 스스로 선택해서 온 사람들입니다. 방은 작지만 맞는 사람들로 차 있고, 맞는 사람들의 초기 참여야말로 추천 시스템이 더 넓은 배포로 증폭시키는 바로 그 신호입니다.

실전 구조는 사다리입니다. 중형 도달 태그 두어 개(게시물 10만~100만), 현실적으로 상위 노출을 노릴 수 있는 니치 커뮤니티 태그 다수(5천~10만), 그리고 브랜드 태그를 포함한 마이크로 태그 몇 개(5천 미만). 이미 큰 계정이 아니라면 메가 티어는 통째로 건너뛰세요.

적을수록 좋은 이유가 하나 더 있습니다. 태그 적합성은 분류 신호입니다. fitness, crypto, coffeeart에 걸쳐 있는 30개 태그는 시스템에 이 게시물이 딱히 무엇에 관한 것도 아니라고 말합니다. 일관된 태그 8개는 하나의 주제를 설명하고, 일관된 분류가 곧 비팔로워 도달을 벌어다 줍니다.`,
				ja: `ハッシュタグはあなたが足を踏み入れる部屋です。loveやtravelの下には毎分数百件の投稿が届きます。あなたの投稿が最新フィードに留まるのは数秒で、エンゲージメントが桁違いのアカウントと競うことになります。巨大タグの上位(「人気」)枠は、すでに成果を出した投稿に与えられます。タグを使ったから成果が出たのではありません。

中規模・ニッチなタグはその算数を逆転させます。よく狙いの定まった数千人が見るタグ — travelではなくsolotravelseoul — なら、投稿は数時間見え続け、そこを眺めている全員が自ら選んで来た人たちです。部屋は小さくても正しい人で満ちており、正しい人からの初期エンゲージメントこそ、レコメンドシステムがより広い配信へと増幅するシグナルです。

実戦的な構造は梯子です。中規模のリーチタグを2〜3個(投稿10万〜100万件)、現実的に上位を狙えるニッチなコミュニティタグを大半(5千〜10万件)、そしてブランドタグを含むマイクロタグを数個(5千件未満)。すでに大きなアカウントでない限り、メガ級はまるごと飛ばしましょう。

少ないほうが良い理由がもう1つ。タグの関連性は分類シグナルです。fitness、crypto、coffeeartにまたがる30個のタグは、この投稿が特に何についてでもないとシステムに告げます。一貫した8個のタグは1つのトピックを描写し、一貫した分類こそが非フォロワーへのリーチを稼ぐのです。`,
				zh: `一个话题标签就是你走进的一个房间。在 love 或 travel 下面,每分钟涌入数百条帖子;你的帖子在最新流里只停留几秒,而你的竞争对手是互动量碾压你的账号。大标签的"热门"位置只留给已经表现出色的帖子——不是用了标签才有的表现。

中型和小众标签把这笔账倒过来算。在一个有几千名精准关注者的标签里——比如用 solotravelseoul 而不是 travel——你的帖子能持续可见好几个小时,而且逛这里的每个人都是主动选择来的。房间更小,但坐满了对的人;来自对的人的早期互动,恰恰是推荐系统会放大成更大范围分发的信号。

实操结构是一架梯子:两三个中型触达标签(10 万至 100 万帖),大部分是你有实力上榜的小众社群标签(5 千至 10 万帖),再加几个包括品牌标签在内的微型标签(5 千帖以下)。除非你已经是大号,否则直接跳过千万级标签。

"少即是多"还有一个原因:标签的相关性本身是分类信号。横跨 fitness、crypto 和 coffeeart 的 30 个标签,等于告诉系统这条帖子什么都不是。8 个连贯的标签描述同一个主题——而连贯的分类,才是非粉丝流量的来源。`
			},
			code: {
				example: `Post: homemade sourdough timelapse (Instagram Reel)

Weak (generic wallpaper):
#bread #food #foodie #yummy #instafood #love
#baking #delicious #homemade #foodporn ... x30

Stronger (ladder, 9 tags):
Reach:  #sourdough #breadbaking
Niche:  #sourdoughstarter #wildyeast #breadtok
        #sourdoughclub #homebaker
Micro:  #crumbshot #yourbrandbakes`
			}
		},
		{
			heading: {
				en: 'Banned Tags and Other Silent Reach Killers',
				ko: '금지 태그와 조용한 도달 킬러들',
				ja: '禁止タグとその他の静かなリーチキラー',
				zh: '被禁标签与其他隐形限流杀手'
			},
			body: {
				en: `Some hashtags actively hurt. Platforms restrict tags that spam and policy-violating content has colonized, and the list is not intuitive: over the years Instagram has restricted innocuous-sounding tags because they were flooded with content that broke the rules. A restricted tag will not show your post beyond your followers, and by some accounts using one can dampen the whole post.

The check is manual but fast: search the tag on the platform before using it. On Instagram, a restricted tag either returns no results, or shows a warning, or displays only Top posts with no Recent — all red flags. Do this especially for tags an AI generated, because models happily invent plausible-sounding tags that are restricted, dead, or simply nonexistent. A tag with zero prior posts is not an opportunity; it is a room with no one in it (the sole exception: your own branded tag, which you are deliberately founding).

Also watch for hijacked tags — a niche tag that a spam wave or an unrelated fandom has taken over since the last time you used it — and irrelevant trending tags. Riding a trending tag your content does not match is the classic engagement-bait pattern that platforms explicitly demote and viewers report.`,
				ko: `어떤 해시태그는 적극적으로 해를 끼칩니다. 플랫폼은 스팸과 규정 위반 콘텐츠가 점령한 태그를 제한하는데, 그 목록은 직관적이지 않습니다. 인스타그램은 지난 몇 년간 무해하게 들리는 태그들도 규칙 위반 콘텐츠가 넘쳐난다는 이유로 제한해 왔습니다. 제한된 태그는 게시물을 팔로워 너머로 노출하지 않고, 일부 사례에 따르면 하나만 써도 게시물 전체가 눌릴 수 있습니다.

확인은 수동이지만 빠릅니다. 쓰기 전에 그 플랫폼에서 태그를 검색해 보세요. 인스타그램에서 제한된 태그는 결과가 아예 없거나, 경고가 뜨거나, '최근' 없이 '인기' 게시물만 표시됩니다. 전부 적신호입니다. AI가 생성한 태그라면 특히 이 확인이 필수입니다. 모델은 제한됐거나, 죽었거나, 아예 존재하지 않는 그럴듯한 태그를 태연하게 지어내기 때문입니다. 이전 게시물이 0개인 태그는 기회가 아니라 아무도 없는 방입니다. (유일한 예외: 의도적으로 개설하는 당신의 브랜드 태그.)

납치된 태그도 조심하세요. 마지막으로 썼을 때 이후 스팸 물결이나 무관한 팬덤이 점령해 버린 니치 태그 말입니다. 그리고 무관한 트렌딩 태그. 내용과 맞지 않는 유행 태그에 올라타는 것은 플랫폼이 명시적으로 강등하고 시청자가 신고하는 고전적인 참여 낚시 패턴입니다.`,
				ja: `一部のハッシュタグは積極的に害を及ぼします。プラットフォームはスパムや規約違反コンテンツに占拠されたタグを制限しますが、そのリストは直感的ではありません。Instagramはこの数年、無害に聞こえるタグでさえ、ルール違反コンテンツで溢れたという理由で制限してきました。制限されたタグはあなたの投稿をフォロワーの外に見せず、報告によっては1つ使うだけで投稿全体が抑制されることもあります。

チェックは手動ですが速い。使う前にそのプラットフォームでタグを検索してください。Instagramで制限されたタグは、結果が出ないか、警告が表示されるか、「最近」なしで「人気」投稿だけが表示されます。すべて危険信号です。AIが生成したタグなら、この確認は特に必須です。モデルは、制限済み・死んでいる・そもそも存在しない、もっともらしいタグを平然と発明するからです。過去の投稿がゼロのタグはチャンスではなく、誰もいない部屋です。(唯一の例外:意図的に立ち上げる自分のブランドタグ。)

乗っ取られたタグにも注意を。前回使ったとき以降、スパムの波や無関係なファンダムが占拠してしまったニッチタグのことです。それから無関係なトレンドタグ。内容と合わない流行タグへの便乗は、プラットフォームが明示的に降格させ、視聴者が通報する、古典的なエンゲージメントベイトのパターンです。`,
				zh: `有些标签会造成实打实的伤害。平台会限制被垃圾内容和违规内容占领的标签,而这份名单并不符合直觉:多年来 Instagram 限制过不少听起来人畜无害的标签,只因它们被违规内容淹没。被限制的标签不会把你的帖子推给粉丝之外的人,而且有说法称,用上一个就可能压制整条帖子的表现。

核查是手动的,但很快:用之前先在平台上搜索这个标签。在 Instagram,受限标签要么搜不到结果,要么弹出警告,要么只显示"热门"而没有"最新"——全是红灯。对 AI 生成的标签尤其要做这一步,因为模型会面不改色地发明听起来合理、实则受限、已死、甚至根本不存在的标签。一个历史帖子数为零的标签不是机会,而是一间空屋(唯一例外:你刻意创立的品牌标签)。

还要提防被劫持的标签——自你上次使用以来,已被垃圾潮或不相干的粉圈占领的小众标签——以及蹭不相干的热搜标签。内容对不上却硬蹭热门标签,是平台明确降权、观众主动举报的经典钓鱼套路。`
			}
		},
		{
			heading: {
				en: 'Build a Tag Library, Not a Tag List',
				ko: '태그 목록이 아니라 태그 라이브러리를 만들라',
				ja: 'タグリストではなくタグライブラリを作る',
				zh: '建标签库,而不是标签清单'
			},
			body: {
				en: `Copy-pasting one identical block of tags under every post is both a wasted opportunity and a mild spam signal — repetitive-content systems notice identical blocks. The sustainable alternative is a library: 30–50 verified tags sorted into buckets, from which each post draws a fresh hand.

Useful buckets: branded (your name, your series), community (tags a specific audience actually browses), descriptive (what is literally in this post), format (reel, tutorial, beforeafter), and location if you are local. Every tag enters the library only after the search check from the previous section, with a note of its approximate size.

Per post, pull roughly one branded, two or three community, two or three descriptive, and one format or location tag, matched to that post's actual content. Two posts in the same week should share the topic buckets but not the exact set. This is where a generator earns its keep: hand it your library and the post description, and let it select and localize — a far more reliable task for an AI than inventing tags from nothing.`,
				ko: `모든 게시물 밑에 똑같은 태그 블록을 복붙하는 것은 기회 낭비인 동시에 가벼운 스팸 신호입니다. 반복 콘텐츠 시스템은 동일한 블록을 알아챕니다. 지속 가능한 대안은 라이브러리입니다. 버킷별로 정리된 검증 완료 태그 30~50개를 두고, 게시물마다 새 패를 뽑는 것입니다.

유용한 버킷: 브랜드(당신의 이름, 시리즈), 커뮤니티(특정 독자층이 실제로 둘러보는 태그), 묘사(이 게시물에 문자 그대로 담긴 것), 형식(릴, 튜토리얼, 비포애프터), 그리고 지역 기반이라면 위치. 모든 태그는 앞 섹션의 검색 확인을 통과한 뒤에야, 대략적인 규모 메모와 함께 라이브러리에 들어갑니다.

게시물당 브랜드 1개, 커뮤니티 2~3개, 묘사 2~3개, 형식 또는 위치 1개 정도를 그 게시물의 실제 내용에 맞춰 뽑으세요. 같은 주에 올린 두 게시물은 주제 버킷은 공유하되 정확히 같은 세트여서는 안 됩니다. 생성기가 밥값을 하는 지점이 바로 여기입니다. 라이브러리와 게시물 설명을 건네고 선택과 현지화를 맡기세요. 무에서 태그를 발명하게 하는 것보다 AI에게 훨씬 믿을 만한 과제입니다.`,
				ja: `すべての投稿の下に同一のタグブロックをコピペするのは、機会の浪費であると同時に軽度のスパムシグナルです。反復コンテンツの検出システムは同一ブロックに気づきます。持続可能な代替案はライブラリです。バケツごとに整理された検証済みタグを30〜50個持ち、投稿ごとに新しい手札を引くのです。

有用なバケツ:ブランド(自分の名前、シリーズ)、コミュニティ(特定のオーディエンスが実際に眺めているタグ)、描写(この投稿に文字通り写っているもの)、フォーマット(リール、チュートリアル、ビフォーアフター)、そしてローカルなら位置。すべてのタグは、前のセクションの検索チェックを通過してはじめて、おおよその規模のメモとともにライブラリ入りします。

投稿ごとに、ブランド1個、コミュニティ2〜3個、描写2〜3個、フォーマットまたは位置1個ほどを、その投稿の実際の内容に合わせて引きます。同じ週の2つの投稿は、トピックのバケツは共有しても、まったく同じセットであってはいけません。生成ツールが真価を発揮するのはここです。ライブラリと投稿の説明を渡し、選択とローカライズを任せましょう。ゼロからタグを発明させるより、AIにとってはるかに信頼できるタスクです。`,
				zh: `在每条帖子下面复制粘贴同一块标签,既浪费机会,也是轻度的垃圾信号——重复内容检测系统认得出一模一样的标签块。可持续的替代方案是标签库:30 到 50 个经过验证、按类分桶的标签,每条帖子从中抽一手新牌。

实用的分桶:品牌(你的名字、你的系列)、社群(特定受众真的会去逛的标签)、描述(这条帖子里实实在在有什么)、形式(reel、教程、前后对比),如果做本地生意,再加位置。每个标签都要先通过上一节的搜索核查、标注大致规模,才能进库。

每条帖子大约抽:品牌 1 个、社群 2-3 个、描述 2-3 个、形式或位置 1 个,并与帖子的真实内容匹配。同一周的两条帖子可以共享主题分桶,但不能是完全相同的组合。生成器真正的用武之地就在这里:把你的库和帖子描述交给它,让它做挑选和本地化——对 AI 来说,这比凭空发明标签可靠得多。`
			},
			code: {
				example: `Prompt for this workflow:

"Here is my verified tag library (size in parens):
brand: #wanderkimchi
community: #solofemaletravel(80k) #koreatravel(400k)
  #seoulfood(120k) #backpackingasia(60k)
descriptive: #streetfoodmarket #nightmarket
  #gwangjangmarket(45k)
format: #travelreel #foodtour

Post: 60-sec reel eating bindaetteok at Gwangjang
Market, Seoul, at night.

Pick 8 tags from the library ONLY. No new tags.
Order: community first, then descriptive."`
			}
		},
		{
			heading: {
				en: 'Measure, Rotate, and Double-Check the Machine',
				ko: '측정하고, 교체하고, 기계를 재확인하라',
				ja: '測定し、入れ替え、機械を再確認する',
				zh: '测量、轮换,并复核机器的输出'
			},
			body: {
				en: `Hashtag advice without measurement is folklore. Platforms expose the data: Instagram post insights show impressions attributable to hashtags, and TikTok analytics show traffic sources per video. The workflow is boringly simple — record which tag set each post used, check hashtag-attributed reach after 48 hours, and after ten posts you will know which community tags produce visitors and which are dead weight. Retire the bottom third, promote experiments into the library, repeat monthly, and re-verify your core tags every few months, since a tag's health can change under you.

Two honest caveats about AI-generated tags. First, models do not know today's trends: training data lags, so a "trending" tag from a generator may have peaked long ago — check anything time-sensitive in the platform's own search, where real posting volume is visible. Second, verify spelling and meaning before publishing, especially across languages: concatenated words can hide embarrassing readings, and a tag that means something innocent in English may carry slang you do not want in another market. The generator proposes; the analytics dispose.`,
				ko: `측정 없는 해시태그 조언은 민간전승입니다. 플랫폼은 데이터를 공개합니다. 인스타그램 게시물 인사이트는 해시태그에서 온 노출을 보여주고, 틱톡 분석은 영상별 트래픽 소스를 보여줍니다. 워크플로는 지루할 만큼 단순합니다. 게시물마다 어떤 태그 세트를 썼는지 기록하고, 48시간 뒤 해시태그 기여 도달을 확인하세요. 열 개 게시물이면 어떤 커뮤니티 태그가 방문자를 만들고 어떤 것이 짐인지 알게 됩니다. 하위 3분의 1을 은퇴시키고, 실험 태그를 라이브러리로 승격시키고, 매달 반복하고, 핵심 태그는 몇 달마다 재검증하세요. 태그의 건강 상태는 모르는 사이에 바뀔 수 있습니다.

AI 생성 태그에 대한 정직한 경고 둘. 첫째, 모델은 오늘의 트렌드를 모릅니다. 학습 데이터는 뒤처져 있어서, 생성기가 말하는 '트렌딩' 태그는 이미 오래전에 정점을 지났을 수 있습니다. 시간에 민감한 것은 실제 게시량이 보이는 플랫폼 자체 검색에서 확인하세요. 둘째, 게시 전에 철자와 의미를 검증하세요. 특히 언어를 넘나들 때요. 붙여 쓴 단어는 민망한 독해를 숨길 수 있고, 영어로는 무해한 태그가 다른 시장에서는 원치 않는 속어일 수 있습니다. 생성기는 제안하고, 분석 데이터가 결정합니다.`,
				ja: `測定のないハッシュタグ論は民間伝承です。プラットフォームはデータを公開しています。Instagramの投稿インサイトはハッシュタグ経由のインプレッションを示し、TikTokのアナリティクスは動画ごとのトラフィックソースを示します。ワークフローは退屈なほど単純です。投稿ごとにどのタグセットを使ったか記録し、48時間後にハッシュタグ由来のリーチを確認する。10投稿もすれば、どのコミュニティタグが訪問者を生み、どれが重りなのかが分かります。下位3分の1を引退させ、実験タグをライブラリに昇格させ、毎月繰り返し、コアタグは数か月ごとに再検証しましょう。タグの健康状態は知らぬ間に変わり得ます。

AI生成タグについて正直な注意を2つ。第一に、モデルは今日のトレンドを知りません。学習データは遅れており、生成ツールの言う「トレンド」タグはとうに頂点を過ぎているかもしれません。時間に敏感なものは、実際の投稿量が見えるプラットフォーム自身の検索で確認を。第二に、公開前に綴りと意味を検証してください。特に言語をまたぐときは。連結された単語は恥ずかしい読み方を隠すことがあり、英語では無害なタグが別の市場では望まないスラングを帯びることもあります。生成ツールは提案し、アナリティクスが裁くのです。`,
				zh: `没有测量的标签经验都是民间传说。平台其实给了数据:Instagram 的帖子洞察显示来自标签的曝光量,TikTok 的分析显示每条视频的流量来源。工作流简单得乏味——记录每条帖子用了哪套标签,48 小时后查看标签带来的触达;十条帖子之后,你就知道哪些社群标签真的带来访客,哪些是死重。淘汰垫底的三分之一,把表现好的实验标签转正入库,每月重复,并且每隔几个月重新验证核心标签——标签的健康状况会在你不知情时改变。

关于 AI 生成标签的两条诚实警告。第一,模型不知道今天的热点:训练数据是滞后的,生成器口中的"热门"标签可能早已过气——凡是时效性内容,都去平台自己的搜索里核实,那里能看到真实发帖量。第二,发布前核对拼写和含义,尤其是跨语言时:连写的单词可能藏着尴尬的断句,一个在英文里无害的标签,换个市场可能就是你不想沾的俚语。生成器负责提议;数据负责裁决。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let topic = '';
	let platform = 'Instagram';
	let count = 15;
	let output = '';
	let copied = false;

	const platforms = ['Instagram', 'Twitter', 'TikTok', 'LinkedIn', 'YouTube'];

	const platformTips: Record<string, string> = {
		Instagram: 'Mix popular and niche hashtags. Use 20-30 for maximum reach.',
		Twitter: 'Use 1-3 relevant hashtags. More can reduce engagement.',
		TikTok: 'Trending hashtags boost visibility. Mix broad and specific.',
		LinkedIn: 'Keep it professional. Use 3-5 industry-relevant hashtags.',
		YouTube: 'Tags help SEO. Include variations and related terms.'
	};

	function generate() {
		if (!topic.trim()) return;

		const prompt = `Generate ${count} relevant hashtags for ${platform} about: "${topic}"

Requirements:
- ${platformTips[platform]}
- Include a mix of popular (high volume) and niche (specific) hashtags
- Make them relevant to the topic
- Format: List each hashtag on a new line, starting with #

Please provide the hashtags only, no explanations.`;

		output = prompt;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		topic = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('hashtag.title')} - SDK.ac</title>
	<meta name="description" content={t('hashtag.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('hashtag.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('hashtag.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Topic Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('hashtag.topic')}
			</label>
			<textarea
				bind:value={topic}
				placeholder={t('hashtag.topicPlaceholder')}
				class="w-full h-24 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Platform Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('hashtag.platform')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each platforms as p}
					<button
						on:click={() => platform = p}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {platform === p
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{p}
					</button>
				{/each}
			</div>
			<p class="mt-2 text-xs text-gray-500 dark:text-dark-500">{platformTips[platform]}</p>
		</div>

		<!-- Count Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('hashtag.count')}: {count}
			</label>
			<input
				type="range"
				bind:value={count}
				min="5"
				max="30"
				step="5"
				class="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-400"
			/>
			<div class="flex justify-between text-xs text-gray-500 dark:text-dark-500 mt-1">
				<span>5</span>
				<span>30</span>
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={generate}
				disabled={!topic.trim()}
				class="flex-1 py-3 bg-primary-400 hover:bg-primary-500 text-dark-900 font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{t('ui.generate')}
			</button>
			<button
				on:click={clear}
				class="px-6 py-3 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600 font-medium rounded-xl transition-colors"
			>
				{t('ui.clear')}
			</button>
		</div>

		<!-- Output -->
		{#if output}
			<div>
				<div class="flex justify-between items-center mb-2">
					<label class="text-sm font-medium text-gray-700 dark:text-dark-300">
						{t('hashtag.result')}
					</label>
					<button
						on:click={copyOutput}
						class="text-sm px-3 py-1 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-lg transition-colors"
					>
						{copied ? t('ui.copied') : t('ui.copy')}
					</button>
				</div>
				<div class="p-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl">
					<pre class="whitespace-pre-wrap text-sm text-gray-800 dark:text-dark-200">{output}</pre>
				</div>
			</div>
		{/if}
	</div>

	<ToolGuide {lang} sections={guideSections} />
</div>
