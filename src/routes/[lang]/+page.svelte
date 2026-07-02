<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const tools = [
		{ id: 'prompt', icon: '💬', color: 'from-purple-500 to-indigo-500' },
		{ id: 'image', icon: '🎨', color: 'from-pink-500 to-rose-500' },
		{ id: 'summarizer', icon: '📝', color: 'from-blue-500 to-cyan-500' },
		{ id: 'translator', icon: '🌐', color: 'from-green-500 to-emerald-500' },
		{ id: 'code', icon: '💻', color: 'from-orange-500 to-amber-500' },
		{ id: 'email', icon: '📧', color: 'from-red-500 to-pink-500' },
		{ id: 'hashtag', icon: '#️⃣', color: 'from-violet-500 to-purple-500' },
		{ id: 'writing', icon: '✍️', color: 'from-teal-500 to-cyan-500' }
	];

	// Long-form, first-person SSR content for AdSense compliance.
	// en/ko/ja/zh have native copy; the other locales fall back to English
	// (and are noindexed in the layout).
	type IntroSection = {
		heading: Partial<Record<Locale, string>> & { en: string };
		paragraphs: Partial<Record<Locale, string[]>> & { en: string[] };
	};

	const introSections: IntroSection[] = [
		{
			heading: {
				en: 'Why I built this site',
				ko: '이 사이트를 만든 이유',
				ja: 'このサイトを作った理由',
				zh: '为什么会有这个网站'
			},
			paragraphs: {
				en: [
					"I built sdk.ac because I was tired of sending people links to 'free' AI tools that were actually lead-capture funnels. You click Summarize and instead of a summary you get a signup wall, a three-uses-per-day counter, or a checkout page asking for a card 'to verify your identity'. The underlying AI request costs a fraction of a cent, and most of these tools are a prompt template wrapped around a text box. Charging a monthly subscription for that felt wrong, so I made the version I wanted to exist: open the page, type, get a result, leave.",
					'Everything here is free, with no login and no usage counter. There is no account system because there is nothing worth gating behind one. There is no pro tier because these tools are deliberately simple, and a pro tier would just be padding. The site covers its costs with modest advertising and by being cheap to run — a static SvelteKit site on edge hosting costs almost nothing per visitor.',
					'Privacy matters more here than on most sites, because what people paste into a summarizer or an email writer is often exactly the text they would never post publicly: a performance review, a half-finished apology, an internal document. We do not require an account, we do not build a profile of you, and we do not keep an archive of what you typed. The tools are designed so that your input exists for the duration of the request and then it is gone.'
				],
				ko: [
					"sdk.ac를 만든 이유는, '무료'라고 써 있지만 실제로는 리드 수집 퍼널인 AI 도구 링크를 사람들에게 보내는 게 지긋지긋했기 때문입니다. 요약하기를 누르면 요약 대신 회원가입 벽, 하루 3회 제한 카운터, '본인 확인을 위해' 카드 정보를 요구하는 결제 페이지가 나옵니다. 실제 AI 요청 비용은 1센트의 몇 분의 일이고, 이런 도구 대부분은 텍스트 박스에 프롬프트 템플릿을 씌운 것에 불과합니다. 거기에 월 구독료를 받는 건 잘못됐다고 느꼈고, 그래서 제가 원하던 버전을 직접 만들었습니다. 페이지를 열고, 입력하고, 결과를 받고, 떠나면 됩니다.",
					'여기 있는 모든 것은 무료이고, 로그인도 사용량 제한도 없습니다. 계정 시스템이 없는 이유는 계정 뒤에 잠가둘 만한 것이 없기 때문입니다. 프로 티어가 없는 이유는 이 도구들이 의도적으로 단순하게 만들어졌고, 프로 티어를 만들면 그냥 군더더기가 되기 때문입니다. 사이트는 절제된 광고와 낮은 운영비로 유지됩니다 — 엣지 호스팅 위의 정적 SvelteKit 사이트는 방문자당 비용이 거의 들지 않습니다.',
					'프라이버시는 이 사이트에서 다른 곳보다 더 중요합니다. 사람들이 요약기나 이메일 작성기에 붙여넣는 텍스트는 공개적으로는 절대 올리지 않을 바로 그 텍스트인 경우가 많기 때문입니다. 인사 평가, 쓰다 만 사과문, 내부 문서 같은 것들요. 계정을 요구하지 않고, 사용자 프로필을 만들지 않고, 입력한 내용을 보관하지 않습니다. 여러분의 입력은 요청이 처리되는 동안만 존재하고 그 후에는 사라지도록 설계했습니다.'
				],
				ja: [
					'sdk.acを作ったのは、「無料」と書いてあるのに実際はリード獲得ファネルでしかないAIツールのリンクを人に送るのにうんざりしたからです。「要約する」を押すと、要約の代わりに会員登録の壁、1日3回までのカウンター、「本人確認のため」にカード情報を求める決済ページが出てきます。裏側のAIリクエストのコストは1セントの何分の一かで、こうしたツールの大半はテキストボックスにプロンプトのテンプレートを被せただけのものです。それに月額課金するのは違うと感じたので、自分が欲しかったバージョンを作りました。ページを開いて、入力して、結果を受け取って、立ち去る。それだけです。',
					'ここにあるものはすべて無料で、ログインも利用回数の制限もありません。アカウント機能がないのは、アカウントの裏に隠す価値のあるものがないからです。プロプランがないのは、これらのツールが意図的にシンプルに作られていて、プロプランを作ってもただの水増しになるからです。サイトは控えめな広告と低い運営コストで成り立っています。エッジホスティング上の静的なSvelteKitサイトは、訪問者あたりのコストがほとんどかかりません。',
					'プライバシーは、このサイトでは他の多くのサイト以上に重要です。要約ツールやメール作成ツールに貼り付けられるテキストは、人前には絶対に出さない類いの文章であることが多いからです。人事評価、書きかけの謝罪文、社内文書。アカウントを要求せず、ユーザーのプロフィールを作らず、入力内容のアーカイブも持ちません。入力はリクエストが処理される間だけ存在し、その後は消えるように設計しています。'
				],
				zh: [
					"我做 sdk.ac，是因为受够了给别人发所谓“免费”AI 工具的链接，结果那只是一个获客漏斗。你点了“总结”，得到的不是摘要，而是注册墙、每天三次的次数限制，或者一个“为了验证身份”要你填银行卡的付款页。背后那次 AI 请求的成本只有几分之一美分，而这类工具大多只是在文本框外面包了一层提示词模板。为这种东西收月费让我觉得不对，所以我做了自己想要的版本：打开页面，输入，拿到结果，离开。",
					'这里的一切都免费，不用登录，也没有次数限制。没有账号系统，是因为没有什么值得锁在账号后面。没有专业版，是因为这些工具刻意做得简单，加个专业版只会是注水。网站靠克制的广告和极低的运营成本维持——部署在边缘节点上的静态 SvelteKit 网站，每个访客的成本几乎可以忽略。',
					'隐私在这里比在大多数网站上更重要，因为人们贴进总结器或邮件写作器的，往往正是他们绝不会公开发布的文字：绩效评估、写了一半的道歉、内部文件。我们不要求注册账号，不给你建画像，也不存档你输入过的内容。这些工具的设计是：你的输入只在请求处理期间存在，之后就消失了。'
				]
			}
		},
		{
			heading: {
				en: 'What each tool is actually for',
				ko: '각 도구는 무엇을 위한 것인가',
				ja: '各ツールは何のためにあるか',
				zh: '每个工具是做什么的'
			},
			paragraphs: {
				en: [
					"The AI Translator is for translation that carries tone, not just vocabulary. Dictionary-style translation gives you technically correct sentences that read like a robot wrote them; this one lets you say 'make it polite', 'make it casual', 'this is a business email' and get a version a native speaker would actually send. The AI Summarizer is its counterpart for length instead of language: paste a long article, a meeting transcript, or a report, and get the argument in a few sentences so you can decide whether the whole thing deserves your time.",
					"The Prompt Builder exists because the gap between a mediocre AI answer and a genuinely useful one is usually the prompt, not the model. It walks you through role, context, task, constraints, and output format, and assembles them into a structured prompt you can paste into ChatGPT, Claude, or Gemini. The Image Prompt Builder does the same for image generators like Midjourney, Stable Diffusion, and DALL-E, where the difference between 'a cat' and a usable prompt is a pile of conventions — style keywords, lighting, composition, aspect ratio — that nobody should have to memorize.",
					"The Code Explainer takes a block of code you did not write — a regex from Stack Overflow, a shell one-liner from a CI config, a function from a codebase you just joined — and explains what it does in plain language. The Email Writer goes the other direction: you give it bullet points and a relationship ('decline politely', 'follow up on an invoice', 'ask my professor for an extension') and it drafts the message so you can edit instead of staring at a blank compose window.",
					'The Hashtag Generator suggests tags for Instagram, TikTok, X, and the rest, mixing large generic tags with smaller specific ones — the mix that actually gets a post discovered instead of buried. The Writing Assistant is the general-purpose one: rewriting, tightening, fixing grammar, shifting tone from casual to formal or back. Eight tools, each aimed at one specific, recurring moment where a blank text box wastes ten minutes of your day.'
				],
				ko: [
					"AI 번역기는 단어가 아니라 톤을 옮기는 번역을 위한 도구입니다. 사전식 번역은 기술적으로는 맞지만 로봇이 쓴 것처럼 읽히는 문장을 줍니다. 이 도구에서는 '정중하게', '캐주얼하게', '비즈니스 이메일이야'라고 지정해서 원어민이 실제로 보낼 법한 버전을 받을 수 있습니다. AI 요약기는 언어 대신 길이를 다루는 짝꿍입니다. 긴 기사, 회의록, 보고서를 붙여넣으면 핵심 논지를 몇 문장으로 받아서, 전체를 읽을 가치가 있는지 판단할 수 있습니다.",
					"프롬프트 빌더가 존재하는 이유는, 평범한 AI 답변과 정말 유용한 답변의 차이가 보통 모델이 아니라 프롬프트에서 갈리기 때문입니다. 역할, 맥락, 작업, 제약, 출력 형식을 차례로 물어보고, ChatGPT나 Claude, Gemini에 붙여넣을 수 있는 구조화된 프롬프트로 조립해 줍니다. 이미지 프롬프트 빌더는 Midjourney, Stable Diffusion, DALL-E 같은 이미지 생성기를 위해 같은 일을 합니다. '고양이'와 쓸 만한 프롬프트의 차이는 스타일 키워드, 조명, 구도, 종횡비 같은 관례 더미인데, 그걸 아무도 외우고 다닐 필요는 없으니까요.",
					"코드 설명기는 여러분이 직접 쓰지 않은 코드 — Stack Overflow에서 가져온 정규식, CI 설정 안의 셸 한 줄짜리, 막 합류한 코드베이스의 함수 — 를 받아서 무엇을 하는지 평이한 언어로 설명합니다. 이메일 작성기는 반대 방향입니다. 요점과 관계('정중하게 거절', '미수금 팔로업', '교수님께 기한 연장 요청')를 주면 초안을 만들어 주니, 빈 작성창을 노려보는 대신 고치기만 하면 됩니다.",
					'해시태그 생성기는 Instagram, TikTok, X 등을 위한 태그를 제안하는데, 큰 범용 태그와 작고 구체적인 태그를 섞어 줍니다 — 게시물이 묻히지 않고 실제로 발견되게 하는 조합이죠. 글쓰기 도우미는 범용 도구입니다. 고쳐 쓰기, 압축, 문법 교정, 캐주얼과 격식 사이의 톤 전환. 여덟 개의 도구는 각각, 빈 텍스트 박스가 하루 10분을 잡아먹는 특정하고 반복적인 순간 하나를 겨냥합니다.'
				],
				ja: [
					'AI翻訳は、語彙だけでなくトーンを運ぶ翻訳のためのツールです。辞書的な翻訳は、技術的には正しいのにロボットが書いたように読める文を返します。ここでは「丁寧に」「カジュアルに」「これはビジネスメール」と指定でき、ネイティブが実際に送りそうな文面になります。AI要約はその対になるツールで、言語ではなく長さを扱います。長い記事、会議の書き起こし、レポートを貼り付ければ、要点を数文で受け取り、全文を読む価値があるか判断できます。',
					'プロンプトビルダーが存在するのは、平凡なAIの回答と本当に役立つ回答の差は、たいていモデルではなくプロンプトで決まるからです。役割、文脈、タスク、制約、出力形式を順に尋ね、ChatGPTやClaude、Geminiに貼り付けられる構造化プロンプトに組み立てます。画像プロンプトビルダーは、MidjourneyやStable Diffusion、DALL-Eといった画像生成AIのために同じことをします。「猫」と使えるプロンプトの差は、スタイルキーワード、ライティング、構図、アスペクト比といった慣習の山であり、誰もそれを暗記する必要はないはずです。',
					'コード解説は、自分で書いていないコード — Stack Overflowから持ってきた正規表現、CI設定の中のシェルワンライナー、参加したばかりのコードベースの関数 — を受け取り、何をしているのかを平易な言葉で説明します。メール作成はその逆方向です。要点と関係性(「丁寧に断る」「未払いの請求をフォローする」「教授に締切延長をお願いする」)を渡せば下書きを作ってくれるので、空白の作成画面を見つめる代わりに編集から始められます。',
					'ハッシュタグ生成は、InstagramやTikTok、Xなどのためのタグを提案します。大きな汎用タグと小さく具体的なタグを混ぜる — 投稿が埋もれずに実際に見つけてもらえる配合です。文章アシスタントは汎用ツールで、書き直し、引き締め、文法修正、カジュアルとフォーマルの間のトーン変換を担当します。8つのツールはそれぞれ、空のテキストボックスが1日の10分を奪っていく、特定の繰り返し起こる瞬間を狙っています。'
				],
				zh: [
					'AI 翻译器做的是传递语气的翻译，而不只是词汇的搬运。词典式翻译给你的是技术上正确、读起来却像机器人写的句子；在这里你可以说“礼貌一点”“随意一点”“这是商务邮件”，拿到母语者真的会发出去的版本。AI 总结器是它在“长度”维度上的搭档：贴进一篇长文、一份会议记录或一份报告，几句话拿到核心论点，再决定全文值不值得花时间。',
					'提示词构建器之所以存在，是因为平庸的 AI 回答和真正有用的回答之间，差的通常是提示词而不是模型。它会引导你依次填写角色、背景、任务、约束和输出格式，组装成一条可以直接贴进 ChatGPT、Claude 或 Gemini 的结构化提示词。图像提示词构建器为 Midjourney、Stable Diffusion、DALL-E 这类图像生成器做同样的事——“一只猫”和一条可用的提示词之间，隔着一堆风格关键词、光线、构图、宽高比之类的行话，这些没人应该去死记硬背。',
					'代码解释器接收一段不是你写的代码——Stack Overflow 上抄来的正则、CI 配置里的 shell 单行命令、刚加入的代码库里的某个函数——用平实的语言解释它在做什么。邮件写作器则是反方向：你给它要点和关系（“礼貌地拒绝”“催一笔逾期款”“请教授延长截止日期”），它写出草稿，你只需要修改，而不是对着空白的撰写窗口发呆。',
					'话题标签生成器为 Instagram、TikTok、X 等平台推荐标签，把大而泛的标签和小而具体的标签混在一起——这才是让帖子真正被发现而不是被淹没的配比。写作助手是万能款：改写、精简、修语法、在随意和正式之间切换语气。八个工具，每一个都对准一个具体且反复出现的时刻：一个空白文本框吃掉你一天里的十分钟。'
				]
			}
		},
		{
			heading: {
				en: 'How these tools are built',
				ko: '이 도구들을 어떻게 만들었나',
				ja: 'これらのツールをどう作ったか',
				zh: '这些工具是怎么做出来的'
			},
			paragraphs: {
				en: [
					'The site is a SvelteKit app. Each tool page is server-rendered, so what a search crawler or a reader with JavaScript disabled sees is real content, not an empty div waiting for a bundle. Svelte keeps the client-side payload small — these pages are mostly text and a form, and they should load like it.',
					'The tools themselves are thin by design. Most of the engineering effort went into the prompts and the interfaces, not into infrastructure: figuring out which questions to ask you, in which order, so the assembled request produces consistently useful output. A tool that asks three good questions beats a tool with twenty settings you will never touch.',
					'I add tools slowly, and only when I have personally hit the problem more than once. Every tool here started as something I or someone I know needed in an ordinary week — translating a message to a coworker, summarizing a document five minutes before a meeting, decoding a colleague\'s regex. If a tool is on this site, it earned its place; nothing here exists to inflate a tools count for search engines.'
				],
				ko: [
					'사이트는 SvelteKit 앱입니다. 각 도구 페이지는 서버에서 렌더링되므로, 검색 크롤러나 JavaScript를 끈 독자가 보는 것은 번들을 기다리는 빈 div가 아니라 진짜 콘텐츠입니다. Svelte 덕분에 클라이언트 페이로드가 작게 유지됩니다 — 이 페이지들은 대부분 텍스트와 폼이고, 그렇게 가볍게 로드되어야 합니다.',
					'도구 자체는 의도적으로 얇게 만들었습니다. 엔지니어링 노력 대부분은 인프라가 아니라 프롬프트와 인터페이스에 들어갔습니다. 어떤 질문을 어떤 순서로 물어야 조립된 요청이 일관되게 유용한 출력을 내는지 알아내는 일이요. 좋은 질문 세 개를 하는 도구가, 절대 건드리지 않을 설정 스무 개짜리 도구를 이깁니다.',
					'도구는 천천히, 제가 직접 같은 문제를 두 번 이상 겪었을 때만 추가합니다. 여기 있는 모든 도구는 저나 제 지인이 평범한 한 주 동안 실제로 필요했던 것에서 시작했습니다. 동료에게 보낼 메시지 번역, 회의 5분 전 문서 요약, 동료가 쓴 정규식 해독 같은 것들이요. 이 사이트에 있는 도구는 자기 자리를 스스로 얻어낸 것이고, 검색엔진용 도구 개수 부풀리기를 위해 존재하는 것은 없습니다.'
				],
				ja: [
					'サイトはSvelteKitアプリです。各ツールページはサーバーでレンダリングされるので、検索クローラーやJavaScriptを切った読者が見るのは、バンドルを待つ空のdivではなく本物のコンテンツです。Svelteのおかげでクライアント側のペイロードは小さく保たれます。これらのページはほとんどがテキストとフォームであり、そのように軽く読み込まれるべきです。',
					'ツール自体は意図的に薄く作っています。エンジニアリングの労力の大半は、インフラではなくプロンプトとインターフェースに注ぎました。どの質問をどの順番で尋ねれば、組み立てられたリクエストが一貫して役立つ出力を生むのか。良い質問を3つするツールは、決して触らない設定が20個あるツールに勝ちます。',
					'ツールはゆっくり、自分自身が同じ問題に2回以上ぶつかったときだけ追加します。ここにあるツールはすべて、私や知人が普通の一週間の中で実際に必要としたものから始まりました。同僚へのメッセージの翻訳、会議5分前の資料の要約、同僚の書いた正規表現の解読。ここにあるツールは自分の居場所を自分で勝ち取ったものであり、検索エンジン向けにツール数を水増しするために存在するものはありません。'
				],
				zh: [
					'网站是一个 SvelteKit 应用。每个工具页都在服务端渲染，所以搜索爬虫或关闭了 JavaScript 的读者看到的是真实内容，而不是一个等着加载脚本包的空 div。Svelte 让客户端体积保持很小——这些页面主要就是文字和表单，加载起来也理应像文字和表单一样轻。',
					'工具本身刻意做得很薄。大部分工程精力花在了提示词和界面上，而不是基础设施：搞清楚该问你哪些问题、按什么顺序问，组装出的请求才能稳定产出有用的结果。一个会问三个好问题的工具，胜过一个有二十个你永远不会碰的设置项的工具。',
					'工具加得很慢，只有当我自己不止一次撞上同一个问题时才会加。这里的每个工具都源于我或我认识的人在普通的一周里真实需要过的东西：翻译一条发给同事的消息、开会前五分钟总结一份文件、看懂同事写的正则。能出现在这个网站上的工具都是自己挣来的位置，没有任何东西是为了给搜索引擎凑工具数量而存在的。'
				]
			}
		},
		{
			heading: {
				en: 'Honest limitations you should know about',
				ko: '알고 써야 할 솔직한 한계',
				ja: '知っておくべき正直な限界',
				zh: '你应该知道的真实局限'
			},
			paragraphs: {
				en: [
					'AI output is a draft, not a verdict. Language models produce fluent, confident text whether or not the underlying claim is true, and a wrong answer reads exactly as smoothly as a right one. Summaries can drop the one caveat that mattered. Translations can miss sarcasm, honorifics, or culturally loaded phrasing. The Code Explainer can describe what code usually does while missing what your code actually does in an edge case. Treat every output as a starting point that you — the person who understands the context — review before using.',
					'Some jobs are wrong for these tools regardless of quality. Do not rely on AI translation for contracts, medical instructions, immigration paperwork, or anything where a mistranslated clause has real consequences — pay a professional translator. Do not treat a summary as a substitute for reading a document you will be held accountable for. Do not paste passwords, API keys, or other secrets into any AI tool, including this one; the safest secret is the one that never leaves your machine.',
					'And AI text has a texture. If you send AI-drafted emails unedited, the people receiving them will eventually notice, and it will cost you more credibility than the drafts saved you in time. The tools here are built to give you a good first 80 percent. The last 20 percent — the judgment, the specifics, the voice — has to be yours, and honestly, that is the part worth doing.'
				],
				ko: [
					"AI 출력은 초안이지 판결이 아닙니다. 언어 모델은 주장이 사실이든 아니든 유창하고 자신감 있는 텍스트를 만들어내고, 틀린 답도 맞는 답과 똑같이 매끄럽게 읽힙니다. 요약은 정작 중요했던 단서 하나를 빠뜨릴 수 있습니다. 번역은 빈정거림, 경어, 문화적으로 민감한 표현을 놓칠 수 있습니다. 코드 설명기는 코드가 '보통' 하는 일을 설명하면서 여러분의 코드가 엣지 케이스에서 '실제로' 하는 일을 놓칠 수 있습니다. 모든 출력을, 맥락을 아는 사람인 여러분이 사용 전에 검토하는 출발점으로 취급하세요.",
					'품질과 무관하게 이 도구들에 맡기면 안 되는 일도 있습니다. 계약서, 의료 지침, 이민 서류처럼 오역된 조항 하나가 실제 결과를 낳는 문서는 AI 번역에 의존하지 말고 전문 번역가에게 맡기세요. 책임져야 할 문서라면 요약을 정독의 대체물로 삼지 마세요. 비밀번호, API 키, 기타 비밀은 이 사이트를 포함한 어떤 AI 도구에도 붙여넣지 마세요. 가장 안전한 비밀은 여러분의 기계를 떠나지 않은 비밀입니다.',
					'그리고 AI 텍스트에는 특유의 질감이 있습니다. AI가 쓴 이메일을 고치지 않고 그대로 보내면 받는 사람들은 결국 알아차리고, 그때 잃는 신뢰는 초안이 아껴준 시간보다 비쌉니다. 여기 있는 도구들은 괜찮은 첫 80퍼센트를 주도록 만들어졌습니다. 마지막 20퍼센트 — 판단, 구체성, 목소리 — 는 여러분의 몫이어야 하고, 솔직히 그게 할 가치가 있는 부분입니다.'
				],
				ja: [
					'AIの出力は下書きであって、判決ではありません。言語モデルは、主張が事実かどうかに関係なく流暢で自信に満ちたテキストを生成し、間違った答えも正しい答えとまったく同じくらい滑らかに読めます。要約は、一番重要だった但し書きを落とすことがあります。翻訳は、皮肉、敬語、文化的に繊細な言い回しを取りこぼすことがあります。コード解説は、コードが「普通」することを説明しながら、あなたのコードがエッジケースで「実際に」することを見落とすかもしれません。すべての出力を、文脈を理解しているあなた自身が使う前に確認する出発点として扱ってください。',
					'品質に関係なく、これらのツールに任せるべきでない仕事もあります。契約書、医療の指示、移民関係の書類など、誤訳された一文が現実の結果を生むものはAI翻訳に頼らず、プロの翻訳者に依頼してください。責任を問われる文書について、要約を読了の代わりにしないでください。パスワードやAPIキーなどの秘密情報は、このサイトを含むどのAIツールにも貼り付けないでください。最も安全な秘密は、あなたのマシンから出なかった秘密です。',
					'そして、AIのテキストには独特の手触りがあります。AIが下書きしたメールを手を入れずに送り続ければ、受け取る側はいずれ気づき、そのとき失う信頼は下書きが節約した時間より高くつきます。ここのツールは、良い最初の80パーセントを渡すために作られています。残りの20パーセント — 判断、具体性、声 — はあなたのものであるべきで、正直なところ、そこがやる価値のある部分です。'
				],
				zh: [
					'AI 的输出是草稿，不是裁决。语言模型不管背后的说法是真是假，都会生成流畅而自信的文字，错误的答案读起来和正确的答案一样顺滑。摘要可能恰好漏掉那条最关键的限定条件。翻译可能错过讽刺、敬语或带有文化分量的措辞。代码解释器可能在描述这段代码“通常”做什么的同时，漏掉你的代码在边界情况下“实际”做什么。请把每一份输出都当作起点，由你——那个真正理解上下文的人——在使用前审核。',
					'有些事无论工具质量多高都不该交给它们。合同、医疗指示、移民文件，这类一处误译就有真实后果的文本，不要依赖 AI 翻译，请找专业译者。对你要承担责任的文件，不要拿摘要代替通读。不要把密码、API 密钥或其他机密贴进任何 AI 工具，包括这个网站——最安全的机密是从未离开你机器的那一个。',
					'另外，AI 文字有它的质感。如果你把 AI 起草的邮件原封不动地发出去，收件人迟早会察觉，那时你损失的信任会比草稿帮你省下的时间更贵。这里的工具是为了给你一个不错的前 80%。最后的 20%——判断、细节、你自己的声音——必须由你来完成，而说实话，那才是值得做的部分。'
				]
			}
		},
		{
			heading: {
				en: 'What this site is not',
				ko: '이 사이트가 아닌 것',
				ja: 'このサイトではないもの',
				zh: '这个网站不是什么'
			},
			paragraphs: {
				en: [
					"This is not a SaaS in disguise. There is no waitlist, no 'book a demo', no newsletter interstitial, and no plan to bolt an account system on later. It is a set of pages that do what they say.",
					'It is also not trying to be everything. There are eight tools, chosen deliberately, plus guides explaining how to get better results from each. If the site grows, it grows a tool at a time, each one held to the same bar: would I use this myself, this week? That bar is the entire product strategy.'
				],
				ko: [
					"이건 위장한 SaaS가 아닙니다. 대기자 명단도, '데모 예약'도, 뉴스레터 팝업도 없고, 나중에 계정 시스템을 붙일 계획도 없습니다. 말한 대로 동작하는 페이지들의 모음입니다.",
					"모든 것이 되려고 하지도 않습니다. 신중하게 고른 여덟 개의 도구와, 각 도구에서 더 나은 결과를 얻는 법을 설명하는 가이드가 있습니다. 사이트가 커진다면 도구 하나씩, 같은 기준을 통과하면서 커질 겁니다. '나라면 이번 주에 이걸 직접 쓸까?' 그 기준이 제품 전략의 전부입니다."
				],
				ja: [
					'これは偽装したSaaSではありません。ウェイトリストも「デモを予約」もニュースレターのポップアップもなく、後からアカウント機能を付ける計画もありません。書いてあるとおりに動くページの集まりです。',
					'すべてになろうともしていません。慎重に選んだ8つのツールと、それぞれでより良い結果を得る方法を説明するガイドがあります。サイトが育つなら、ツール1つずつ、同じ基準を通りながら育ちます。「自分なら今週、これを実際に使うか?」その基準がプロダクト戦略のすべてです。'
				],
				zh: [
					'这不是一个伪装的 SaaS。没有等候名单，没有“预约演示”，没有订阅弹窗，也没有以后再加账号系统的计划。它就是一组说到做到的页面。',
					'它也不打算包罗万象。这里有精心挑选的八个工具，外加讲解如何在每个工具里拿到更好结果的指南。如果网站要扩张，也是一次加一个工具，每一个都要过同一道关：“这周我自己会用它吗？”这道关，就是全部的产品策略。'
				]
			}
		}
	];
</script>

<svelte:head>
	<title>{t('home.title')} - SDK.ac</title>
	<meta name="description" content={t('home.subtitle')} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': 'https://sdk.ac/#website',
		name: 'SDK.ac',
		url: 'https://sdk.ac',
		description:
			'Free AI-powered tools: translator, summarizer, prompt builder, image prompt builder, code explainer, email writer, hashtag generator, and writing assistant.',
		inLanguage: ['en', 'ko', 'ja', 'zh'],
		publisher: { '@id': 'https://sdk.ac/#organization' }
	})}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': 'https://sdk.ac/#organization',
		name: 'SDKLABS',
		url: 'https://sdk.ac',
		sameAs: ['https://sdk.is', 'https://javascript.ac', 'https://sd.gy']
	})}</` + `script>`}
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
	<!-- Hero Section -->
	<div class="text-center mb-16">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-4">
			{t('home.title')}
		</h1>
		<p class="text-xl text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
			{t('home.subtitle')}
		</p>
	</div>

	<!-- Tools Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each tools as tool}
			<a
				href="/{lang}/{tool.id}"
				class="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-700 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
			>
				<!-- Gradient background on hover -->
				<div class="absolute inset-0 bg-gradient-to-br {tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

				<!-- Icon -->
				<div class="text-4xl mb-4">{tool.icon}</div>

				<!-- Title -->
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
					{t(`home.${tool.id}.title`)}
				</h3>

				<!-- Description -->
				<p class="text-sm text-gray-600 dark:text-dark-400">
					{t(`home.${tool.id}.desc`)}
				</p>

				<!-- Arrow indicator -->
				<div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
					<svg class="w-5 h-5 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</div>
			</a>
		{/each}
	</div>

	<!-- Features Section -->
	<div class="mt-20 text-center">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="p-6">
				<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Fast & Free</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">All tools are completely free to use with instant results</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Privacy First</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Your data stays in your browser - nothing is stored on servers</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Multi-Language</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Available in English, Korean, Japanese, and Chinese</p>
			</div>
		</div>
	</div>

	<!-- Long-form first-person content (SSR, AdSense compliance) -->
	<article class="mt-20 max-w-3xl mx-auto space-y-12 text-gray-700 dark:text-dark-300 leading-relaxed">
		{#each introSections as s}
			<section>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">
					{s.heading[lang] || s.heading.en}
				</h2>
				{#each s.paragraphs[lang] || s.paragraphs.en as p}
					<p class="mb-4">{p}</p>
				{/each}
			</section>
		{/each}
	</article>
</div>
