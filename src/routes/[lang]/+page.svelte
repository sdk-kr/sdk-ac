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
					"SDK.ac brings together seven prompt builders and one leading-sentence extraction tool. The builders combine your text and selected options with fixed instructions in your browser. They do not call an AI model, so the result is a request you can review and take to a separate assistant. The summarizer returns an excerpt from the beginning of your text instead of a prompt.",
					"The tools are free to use without an account or usage counter. Choose the tool for the request you need, fill in its fields, and inspect the generated text. A separate AI service may have its own account requirements, limits, and charges.",
					"Your tool input is processed in page memory. Copying a generated request to another service is a separate step you choose, and that service handles the text under its own policies. The tool pages explain their local behavior and provide examples you can reproduce."
				],
				ko: [
					"SDK.ac는 프롬프트 생성기 7개와 앞문장 추출 도구 하나를 제공합니다. 생성기는 브라우저에서 입력과 선택값을 고정 지시문과 결합합니다. AI 모델을 호출하지 않으므로 결과는 검토한 뒤 외부 AI로 가져갈 요청문입니다. 요약기는 프롬프트 대신 입력 앞부분의 발췌문을 반환합니다.",
					"도구는 계정이나 사용 횟수 제한 없이 무료로 사용할 수 있습니다. 필요한 요청에 맞는 도구를 선택하고 필드를 채운 뒤 생성된 텍스트를 확인하세요. 외부 AI 서비스에는 별도 계정 요건, 제한, 요금이 있을 수 있습니다.",
					"도구 입력은 페이지 메모리에서 처리됩니다. 생성된 요청을 다른 서비스로 복사하는 것은 이용자가 선택하는 별도 단계이며, 해당 서비스는 자체 방침에 따라 텍스트를 처리합니다. 도구 페이지에는 로컬 동작 설명과 재현 가능한 예제가 있습니다."
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
					"Translation Prompt Builder inserts your source text and chosen source and target languages into a translation request. It does not translate the text or detect its language. Leading-Sentence Summarizer extracts opening chunks separated by periods, exclamation marks, or question marks. It does not identify the main argument or rank sentences by importance.",
					"Prompt Generator combines a task, optional context, and a fixed style instruction. Put any required format or constraints in the text fields. Image Prompt Builder combines a subject with fixed style and mood phrases; it creates no images and has no separate rendering controls.",
					"Code Explanation Prompt Builder wraps your snippet with a language label and a request suited to the selected explanation level. It does not execute or analyze code. Email Prompt Builder assembles an email drafting request from type, topic, optional recipient, and tone, followed by a fixed checklist. It does not write or send the email.",
					"Hashtag Prompt Builder inserts your topic, platform, and requested count into a fixed request. Platform tips are stored text, not trend research. Writing Revision Prompt Builder combines existing text with one editing instruction: improvement, grammar correction, simplification, formal tone, or casual tone. The text itself remains unchanged in its output."
				],
				ko: [
					"번역 프롬프트 생성기는 원문과 선택한 원본·대상 언어를 번역 요청에 넣습니다. 직접 번역하거나 언어를 감지하지 않습니다. 앞문장 추출 요약기는 마침표, 느낌표, 물음표로 나눈 앞쪽 구간을 추출합니다. 핵심 논지를 판별하거나 문장의 중요도를 평가하지 않습니다.",
					"프롬프트 생성기는 작업, 선택 맥락, 고정 스타일 지시를 결합합니다. 필요한 형식이나 제약은 텍스트 필드에 적으세요. 이미지 프롬프트 생성기는 대상과 고정 스타일·분위기 문구를 결합하며, 이미지를 만들거나 별도 렌더링 설정을 제공하지 않습니다.",
					"코드 설명 프롬프트 생성기는 코드에 언어 표시와 선택한 설명 수준의 요청을 붙입니다. 코드를 실행하거나 분석하지 않습니다. 이메일 프롬프트 생성기는 유형, 주제, 선택 수신자, 어조로 작성 요청을 조립하고 고정 목록을 덧붙입니다. 이메일을 직접 쓰거나 보내지 않습니다.",
					"해시태그 프롬프트 생성기는 주제, 플랫폼, 요청 개수를 고정 요청에 넣습니다. 플랫폼 팁은 트렌드 조사가 아닌 저장된 문구입니다. 글쓰기 수정 프롬프트 생성기는 기존 텍스트에 개선, 문법 교정, 단순화, 격식, 편한 어조 중 하나의 지시를 결합합니다. 출력 안의 원문은 바뀌지 않습니다."
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
					"The site uses SvelteKit and TypeScript. Pages present forms and explanatory text, while the tool functions run in the browser. Generating a request is local string assembly; it does not start a conversation with an AI service.",
					"Each preset selects a fixed instruction. The same input and options produce the same output, which makes it possible to compare the guide examples character for character. Regenerating without changing a field will not produce a different draft.",
					"The summarizer uses a different method: it splits text at specified punctuation and selects an opening portion. Its length settings control the number of chunks retained. Review the actual output because a shorter excerpt can omit conditions that appear later in the source."
				],
				ko: [
					"사이트는 SvelteKit과 TypeScript를 사용합니다. 페이지는 폼과 설명문을 표시하고 도구 함수는 브라우저에서 실행됩니다. 요청 생성은 로컬 문자열 조립이며 AI 서비스와의 대화를 시작하지 않습니다.",
					"각 사전 설정은 고정 지시문을 선택합니다. 입력과 선택값이 같으면 출력도 같으므로 가이드 예제를 문자 단위로 대조할 수 있습니다. 필드를 바꾸지 않고 다시 생성해도 다른 초안이 나오지 않습니다.",
					"요약기는 다른 방식으로 작동합니다. 지정된 문장부호로 텍스트를 나눠 앞부분을 선택합니다. 길이 설정은 남길 구간 수를 정합니다. 짧아진 발췌문에서 원문 뒤쪽의 조건이 빠질 수 있으므로 실제 출력을 검토하세요."
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
					"Distinguish the request you build here from an answer you obtain elsewhere. The builders preserve your inputs inside fixed wording, so an incorrect date or an ambiguous instruction remains incorrect or ambiguous. Review the assembled text before copying it.",
					"An external assistant may return a translation, email draft, code explanation, or edited paragraph, but those results are not generated or verified by SDK.ac. Compare names, numbers, conditions, and claims with your source material before using them.",
					"For the local summarizer, compare the excerpt directly with the full original. The displayed reduction measures whitespace-separated tokens rather than meaning preserved. For consequential documents, an opening excerpt is not a substitute for reading the complete text."
				],
				ko: [
					"여기서 만든 요청과 다른 곳에서 얻은 답변을 구분하세요. 생성기는 입력을 고정 문구 안에 유지하므로 잘못된 날짜나 모호한 지시도 그대로 남습니다. 복사하기 전에 조립된 텍스트를 검토하세요.",
					"외부 AI가 번역, 이메일 초안, 코드 설명, 수정문을 반환할 수 있지만 SDK.ac가 생성하거나 검증한 결과는 아닙니다. 사용하기 전에 이름, 숫자, 조건, 주장을 원자료와 대조하세요.",
					"로컬 요약기의 발췌문은 원문 전체와 직접 비교하세요. 표시된 감소율은 의미 보존이 아니라 공백으로 나눈 토큰을 기준으로 합니다. 중요한 문서에서는 앞부분 발췌가 전체 읽기를 대신하지 못합니다."
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
			lang === 'ko'
				? '브라우저에서 실행되는 프롬프트 생성기 7개와 앞문장 추출 요약기. AI 모델을 호출하지 않습니다.'
				: lang === 'en'
					? 'Seven browser-based prompt builders and a leading-sentence summarizer. No AI model calls.'
					: 'Free AI-powered tools: translator, summarizer, prompt builder, image prompt builder, code explainer, email writer, hashtag generator, and writing assistant.',
		inLanguage: ['en', 'ko', 'ja', 'zh'],
		publisher: { '@id': 'https://sdk.ac/#organization' }
	})}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': 'https://sdk.ac/#organization',
		name: 'SDKLabs',
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
				<p class="text-gray-600 dark:text-dark-400 text-sm">{lang === 'ko' ? '무료로 요청문을 조립하거나 원문 앞부분을 추출하세요' : lang === 'en' ? 'Build requests or extract opening text locally, free of charge' : 'All tools are completely free to use with instant results'}</p>
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
