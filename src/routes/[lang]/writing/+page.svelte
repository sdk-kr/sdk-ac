<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Edit in Passes: Structure First, Sentences Last',
				ko: '패스로 나눠 고치기: 구조 먼저, 문장은 마지막',
				ja: 'パスを分けて直す:構造が先、文は最後',
				zh: '分轮修改:先结构,后句子'
			},
			body: {
				en: `Professional editors do not fix a text in one sweep, and neither should you — or your AI assistant. Editing collapses when structural questions and comma questions compete for the same attention. The craft is to separate passes, each with one job.

Pass one is structural: is the main point where a reader will find it, does the order of sections follow the reader's questions rather than your discovery process, is anything missing or duplicated? Polishing a paragraph that should be deleted is the most common way to waste an editing hour. Reverse-outline the draft — one line per paragraph stating what it does — and the structural problems become visible at a glance.

Pass two is the paragraph pass: one idea per paragraph, the idea stated early, evidence following, transitions doing real logical work.

Only pass three touches sentences: active voice, cut hedges, shorter verbs, concrete nouns.

This maps directly onto how to use an assistant. Asking a tool to improve a draft runs all three passes at once, badly — it will polish sentences inside paragraphs that should not exist. Run separate requests: first "list the structural problems, do not rewrite anything", then paragraph-level feedback, and only at the end line edits.`,
				ko: `프로 편집자는 텍스트를 한 번 훑어서 고치지 않습니다. 당신도, 당신의 AI 어시스턴트도 그래야 합니다. 구조 문제와 쉼표 문제가 같은 주의력을 두고 경쟁하면 편집은 무너집니다. 요령은 패스를 분리하고 패스마다 하나의 일만 맡기는 것입니다.

첫 패스는 구조입니다. 핵심 논지가 독자가 찾을 자리에 있는가, 섹션 순서가 내 발견 과정이 아니라 독자의 질문 순서를 따르는가, 빠지거나 중복된 것은 없는가? 삭제해야 할 문단을 다듬는 것이 편집 시간을 낭비하는 가장 흔한 방법입니다. 초안을 역개요로 만들어 보세요. 문단마다 그 문단이 하는 일을 한 줄로 적으면 구조 문제가 한눈에 드러납니다.

둘째는 문단 패스입니다. 문단당 하나의 생각, 생각은 앞쪽에 진술, 근거는 그 뒤에, 접속은 실제 논리적 일을 하도록.

셋째 패스에서만 문장을 만집니다. 능동태, 얼버무림 삭제, 짧은 동사, 구체적 명사.

이것은 어시스턴트 사용법으로 그대로 번역됩니다. 도구에게 초안을 '개선해 달라'고 하면 세 패스를 한꺼번에, 그것도 형편없이 돌립니다. 존재하면 안 되는 문단 속 문장들을 광내는 거죠. 요청을 나누세요. 먼저 '구조적 문제를 나열만 하고 아무것도 고치지 마', 그다음 문단 수준 피드백, 맨 마지막에야 문장 손질.`,
				ja: `プロの編集者はテキストを一度のスイープで直しませんし、あなたも — あなたのAIアシスタントも — そうすべきです。構造の問題と読点の問題が同じ注意力を奪い合うと、編集は崩壊します。技術とは、パスを分け、各パスに1つの仕事だけを持たせることです。

第1パスは構造です。主張は読者が見つけられる場所にあるか、セクションの順序は自分の発見の過程ではなく読者の疑問の順序に従っているか、欠けや重複はないか?削除すべき段落を磨くことこそ、編集の1時間を無駄にする最も一般的な方法です。下書きを逆アウトライン化しましょう。段落ごとにその段落が何をしているかを1行で書けば、構造の問題は一目で見えるようになります。

第2パスは段落のパスです。1段落に1つの考え、考えは早めに提示、根拠はその後、接続語には本物の論理的仕事をさせる。

第3パスでのみ文に触れます。能動態、ぼかし表現の削除、短い動詞、具体的な名詞。

これはアシスタントの使い方にそのまま対応します。ツールに下書きの「改善」を頼むと、3つのパスを一度に、しかも下手に実行します。存在すべきでない段落の中の文を磨き上げてしまうのです。依頼を分けましょう。まず「構造上の問題を列挙だけして、何も書き直すな」、次に段落レベルのフィードバック、最後の最後に文の手入れです。`,
				zh: `专业编辑不会一遍扫完就把稿子改好,你和你的 AI 助手也不该这样。当结构问题和逗号问题争夺同一份注意力时,编辑就垮了。功夫在于分轮,每一轮只干一件事。

第一轮是结构:核心观点是否放在读者能找到的位置?章节顺序是跟着读者的疑问走,还是跟着你的发现过程走?有没有缺失或重复?打磨一个本该删掉的段落,是浪费编辑时间最常见的方式。给草稿做一份反向提纲——每段一行,写明这段在干什么——结构问题立刻一目了然。

第二轮是段落:一段一个意思,意思提前亮出,证据随后跟上,过渡词承担真正的逻辑工作。

只有第三轮才碰句子:主动语态、删除模糊限定、更短的动词、具体的名词。

这直接对应助手的用法。让工具"改进"一份草稿,等于让它同时跑三轮,而且跑得很糟——它会去打磨那些根本不该存在的段落里的句子。把请求拆开:先"只列出结构问题,什么都不要改写",再要段落层面的反馈,最后才做逐句润色。`
			}
		},
		{
			heading: {
				en: 'The Sentence-Level Moves That Do Most of the Work',
				ko: '문장 수준에서 일 대부분을 해내는 기술들',
				ja: '文レベルで仕事の大半をこなす技法',
				zh: '句子层面最见效的几个动作'
			},
			body: {
				en: `Four edits account for most of the improvement in typical business and web prose, and they come straight from the working style guides — Strunk and White's "omit needless words", Orwell's "never use the passive where you can use the active", and the plain-language movement that turned both into checklists.

Activate the verbs. Passive voice is not forbidden — it is fine when the actor is unknown or irrelevant — but default-passive prose hides who does what. "Mistakes were made" versus "we made mistakes" is a difference of accountability, not grammar. Related: hunt nominalizations, the verbs frozen into nouns. Make a decision, conduct an analysis, provide a recommendation thaw into decide, analyze, recommend, and each thaw saves words and restores motion.

Cut the hedges. I think, perhaps, somewhat, it could be argued — one hedge is a nuance; three per paragraph is a writer asking not to be blamed. Keep the hedge only where the uncertainty is real information.

Kill throat-clearing openers. "It is important to note that" adds seven words to any sentence and zero meaning. The same for "in today's fast-paced world" and every cousin.

Then read one paragraph aloud. The ear catches rhythm problems, accidental rhymes, and triple abstractions that the eye forgives. This is also the fastest way to notice when an AI rewrite no longer sounds like you.`,
				ko: `전형적인 업무·웹 산문의 개선 대부분은 네 가지 수정에서 나옵니다. 전부 현역 스타일 가이드에서 곧장 온 것들입니다. 스트렁크와 화이트의 '불필요한 단어를 생략하라', 오웰의 '능동을 쓸 수 있는 곳에 수동을 쓰지 말라', 그리고 그 둘을 체크리스트로 만든 쉬운 언어 운동.

동사를 깨우세요. 수동태가 금지는 아닙니다. 행위자가 미상이거나 무관하면 괜찮습니다. 하지만 기본값이 수동인 산문은 누가 무엇을 하는지 숨깁니다. '실수가 있었다'와 '우리가 실수했다'는 문법이 아니라 책임의 차이입니다. 연관 기술: 명사화 사냥. 동사가 명사로 얼어붙은 것들입니다. '결정을 내리다', '분석을 수행하다', '권고를 제공하다'는 결정하다, 분석하다, 권고하다로 녹고, 녹일 때마다 단어가 줄고 운동감이 돌아옵니다.

얼버무림을 자르세요. '제 생각에는', '아마도', '다소', '~라고 볼 수도 있다'. 한 번의 얼버무림은 뉘앙스지만 문단에 세 번이면 비난받지 않게 해 달라는 작가의 애원입니다. 불확실성이 진짜 정보인 곳에만 남기세요.

헛기침 서두를 죽이세요. '주목해야 할 중요한 점은'은 어떤 문장에든 일곱 단어를 더하고 의미는 0을 더합니다. '빠르게 변화하는 오늘날'과 그 사촌들도 마찬가지입니다.

그다음 한 문단을 소리 내어 읽으세요. 눈은 용서하는 리듬 문제, 우연한 각운, 삼중 추상을 귀는 잡아냅니다. AI 리라이트가 더는 당신처럼 들리지 않는 순간을 알아채는 가장 빠른 방법이기도 합니다.`,
				ja: `典型的なビジネス文・ウェブ文の改善の大半は、4つの修正から生まれます。すべて現役のスタイルガイド直伝です。ストランク&ホワイトの「不要な語を削れ」、オーウェルの「能動が使えるところで受動を使うな」、そしてその両方をチェックリストにしたプレインランゲージ運動。

動詞を目覚めさせる。受動態は禁止ではありません。行為者が不明か無関係なら問題ない。しかしデフォルトが受動の文章は、誰が何をするのかを隠します。「ミスがあった」と「私たちがミスをした」の違いは文法ではなく、責任の所在です。関連技:名詞化狩り。動詞が名詞に凍りついたものです。「決定を行う」「分析を実施する」「提案を提供する」は、決める・分析する・提案するへ溶け、溶かすたびに語数が減って動きが戻ります。

ぼかしを切る。「思うに」「おそらく」「やや」「という見方もできる」— 1つのぼかしはニュアンスですが、1段落に3つは「責めないでください」という書き手の懇願です。不確実性が本物の情報である場所にだけ残しましょう。

咳払いの書き出しを消す。「注目すべき重要な点として」は、どんな文にも7語を足し、意味はゼロを足します。「変化の激しい現代において」とその親戚たちも同罪です。

そして1段落を音読してください。目は許してしまうリズムの問題、偶然の韻、三重の抽象を、耳は捕まえます。AIのリライトがもはや自分らしく聞こえなくなった瞬間に気づく、最速の方法でもあります。`,
				zh: `典型的商务和网络文字,大部分改进来自四个动作,而且全都直接出自实战风格指南——斯特伦克与怀特的"删去多余的词"、奥威尔的"能用主动就绝不用被动",以及把这两条变成清单的平实语言运动。

唤醒动词。被动语态并非禁忌——当行为者未知或无关紧要时用它没问题——但默认被动的文字隐藏了谁在做什么。"错误被犯下了"与"我们犯了错",差的不是语法,是问责。相关的动作:猎杀名词化,即被冻成名词的动词。"做出决定""进行分析""提供建议"解冻成决定、分析、建议,每解冻一次,字数减少,动感回归。

砍掉模糊限定。"我觉得""或许""某种程度上""可以说"——一处限定是分寸,一段三处就是作者在恳求免责。只在不确定性本身就是信息的地方保留。

消灭清嗓子开场。"值得注意的是"给任何句子加七个字、加零意义。"在当今快节奏的世界里"及其所有表亲同罪。

然后把一段读出声。耳朵能抓住眼睛会放过的节奏问题、意外的押韵和三层叠加的抽象。这也是发现 AI 改写不再像你本人的最快方法。`
			},
			code: {
				example: `Before (37 words):
It is important to note that a decision was made
by the team to conduct a review of the onboarding
process, which is somewhat lengthy, in order to
potentially achieve an improvement in user experience.

After (15 words):
The team decided to review the onboarding process,
which is too long, to improve user experience.`
			}
		},
		{
			heading: {
				en: 'Paragraph Logic: The Unit Readers Actually Skim',
				ko: '문단의 논리: 독자가 실제로 훑는 단위',
				ja: '段落の論理:読者が実際に流し読みする単位',
				zh: '段落逻辑:读者真正扫读的单位'
			},
			body: {
				en: `Readers online do not read sentences; they sample paragraphs. Eye-tracking studies of web reading show an F-shaped scan: first lines get read, the rest gets skimmed. That makes the first sentence of each paragraph disproportionately powerful — and gives you a merciless test for structure.

Read only the first sentence of every paragraph in your draft, in order. If that skeleton tells the whole story in the right order, the structure works; wherever it goes vague ("another thing to consider..."), a paragraph is hiding its point in the middle, where skimmers never look.

The classic pattern is point-first: claim in sentence one, evidence and development after, and an ending that either sharpens the claim or hands off to the next paragraph. Academic writing tolerates build-up-then-reveal; the web does not.

Two mechanical rules do surprising work. One idea per paragraph — the moment you write "also", check whether a new paragraph has begun without your permission. And make transitions carry logic, not lubrication: however, because of this, the exception is tell readers how ideas relate; additionally and moreover merely announce that more text exists. A draft whose paragraphs could be shuffled without harm has no argument yet — no amount of sentence polish will fix that.`,
				ko: `온라인 독자는 문장을 읽지 않습니다. 문단을 표본 추출합니다. 웹 읽기의 시선 추적 연구는 F자형 스캔을 보여줍니다. 첫 줄은 읽히고 나머지는 훑어집니다. 그래서 각 문단의 첫 문장이 불균형하게 강력해지고, 당신에게는 구조를 시험할 무자비한 방법이 하나 생깁니다.

초안의 모든 문단에서 첫 문장만 순서대로 읽어 보세요. 그 골격이 올바른 순서로 이야기 전체를 들려준다면 구조는 작동합니다. 골격이 흐릿해지는 곳('고려할 또 다른 사항은…')마다, 어떤 문단이 훑는 사람은 절대 보지 않는 한가운데에 논점을 숨기고 있는 것입니다.

고전적인 패턴은 논점 선행입니다. 첫 문장에 주장, 그 뒤에 근거와 전개, 끝은 주장을 벼리거나 다음 문단으로 넘겨주기. 학술 글쓰기는 쌓아 올렸다가 드러내기를 견뎌 주지만, 웹은 견뎌 주지 않습니다.

기계적인 규칙 둘이 의외로 큰일을 합니다. 문단당 생각 하나 — '또한'을 쓰는 순간, 허락 없이 새 문단이 시작된 건 아닌지 확인하세요. 그리고 접속어에는 윤활유가 아니라 논리를 실으세요. '그러나', '이 때문에', '예외는'은 생각들이 어떻게 연결되는지 알려주고, '추가로'와 '더욱이'는 그저 텍스트가 더 있다고 공지할 뿐입니다. 문단을 뒤섞어도 탈이 없는 초안에는 아직 논증이 없습니다. 어떤 문장 광택도 그것을 고치지 못합니다.`,
				ja: `オンラインの読者は文を読みません。段落をサンプリングします。ウェブ閲覧の視線追跡研究はF字型のスキャンを示しています。最初の行は読まれ、残りは流し読みされる。だから各段落の最初の文が不釣り合いなほど強力になり、あなたには構造を試す容赦ないテストが1つ手に入ります。

下書きの全段落について、最初の文だけを順に読んでみてください。その骨格が正しい順序で物語の全体を語るなら、構造は機能しています。骨格が曖昧になる箇所(「もう1つ考慮すべき点は…」)では、段落が論点を真ん中に隠しています。流し読みする人が決して見ない場所に。

古典的なパターンは論点先行です。第1文で主張、その後に根拠と展開、結びは主張を研ぐか次の段落へ橋渡しする。学術的文章は「積み上げてから明かす」を許してくれますが、ウェブは許してくれません。

機械的なルール2つが意外な仕事をします。1段落に1つの考え —「また」と書いた瞬間、許可なく新しい段落が始まっていないか確認を。そして接続語には潤滑油ではなく論理を運ばせる。「しかし」「このため」「例外は」は考え同士の関係を伝え、「加えて」「さらに」はテキストがまだ続くと告知するだけです。段落を入れ替えても支障のない下書きには、まだ論証がありません。どれだけ文を磨いてもそれは直らないのです。`,
				zh: `网上的读者不读句子,他们对段落抽样。网页阅读的眼动研究显示出 F 形扫描:每段第一行被读到,其余被扫过。这让每段的第一句拥有不成比例的力量——也给了你一个无情的结构测试。

只按顺序读草稿中每一段的第一句。如果这副骨架能按正确顺序讲完整个故事,结构就成立;凡是骨架变得含糊的地方("另一个需要考虑的问题是……"),就有一个段落把论点藏在了中间——扫读的人永远不会看的位置。

经典模式是观点先行:第一句亮出主张,随后是证据和展开,结尾要么把主张磨得更锋利,要么交棒给下一段。学术写作容忍先铺垫后揭晓;网络不容忍。

两条机械规则出奇地管用。一段一个意思——当你写下"另外"的那一刻,检查是不是有个新段落未经你允许已经开始了。让过渡词承载逻辑而非润滑:"然而""正因如此""例外是"告诉读者观点之间的关系;"此外"和"再者"只是宣布后面还有字。一份段落随便打乱也无伤大雅的草稿,说明还没有论证——再多的句子抛光也救不了它。`
			}
		},
		{
			heading: {
				en: 'Where AI Editing Helps — and Where It Quietly Hurts',
				ko: 'AI 편집이 돕는 곳 — 그리고 조용히 해치는 곳',
				ja: 'AI編集が役立つ場所 — 静かに害する場所',
				zh: 'AI 编辑帮忙的地方——和悄悄帮倒忙的地方'
			},
			body: {
				en: `AI assistants are excellent at the mechanical layer: grammar, agreement, punctuation, spotting the sentence you accidentally wrote twice, enforcing consistency of tense and terminology across a long document, and translating register ("make this formal") when the target is conventional. For non-native writers, this is a genuine equalizer — article errors and preposition slips vanish.

The damage happens above that layer, and it is quiet. Voice flattening is the big one: every metaphor gets normalized, every short punchy sentence gets improved into a medium-length one, and after two full-text passes your writing sounds like everyone else's — fluent, warm, and anonymous. Meaning drift is subtler: a rewrite of "we will likely ship in March" as "we will ship in March" has changed a forecast into a promise, and rewrites of technical or legal text drift this way constantly. Worst is fabrication in expansion: ask an assistant to flesh out a thin paragraph and it will invent supporting specifics — plausible statistics, an example customer, a study — that you never provided. Every fact in an expanded draft that you did not put there yourself needs a source or a deletion.

The protective habits: prefer targeted requests ("fix grammar only, change nothing else") over "improve"; ask for a list of suggested edits with reasons instead of a rewritten text, so you accept or reject each one; and diff the output against your original before using it. The diff takes one minute and catches both drift and inventions.`,
				ko: `AI 어시스턴트는 기계적 층위에 탁월합니다. 문법, 호응, 구두점, 실수로 두 번 쓴 문장 찾기, 긴 문서 전체의 시제와 용어 일관성 강제, 목표가 관습적일 때의 문체 변환('격식 있게'). 비원어민 필자에게는 진짜 평등 장치입니다. 관사 오류와 전치사 실수가 사라집니다.

피해는 그 층위 위에서, 조용히 일어납니다. 목소리 평탄화가 제일 큽니다. 모든 은유가 정규화되고, 짧고 강한 문장마다 중간 길이 문장으로 '개선'되어, 전문 리라이트 두 번이면 당신의 글은 다른 모두의 글처럼 들립니다. 유창하고, 따뜻하고, 익명으로요. 의미 표류는 더 교묘합니다. '3월에 출시할 가능성이 높다'를 '3월에 출시한다'로 고쳐 쓰면 예측이 약속으로 바뀐 것입니다. 기술 문서와 법률 문서의 리라이트는 끊임없이 이런 식으로 표류합니다. 최악은 확장 시의 날조입니다. 빈약한 문단을 '살을 붙여 달라'고 하면 어시스턴트는 당신이 준 적 없는 뒷받침 세부 — 그럴듯한 통계, 예시 고객, 어떤 연구 — 를 발명합니다. 확장된 초안 속, 당신이 직접 넣지 않은 모든 사실에는 출처가 필요하고, 없으면 삭제해야 합니다.

보호 습관: '개선해 줘'보다 표적 요청('문법만 고치고 다른 것은 바꾸지 마')을 선호하세요. 다시 쓴 텍스트 대신 이유가 달린 수정 제안 목록을 요청해서 하나하나 수락하거나 거부하세요. 그리고 사용 전에 출력과 원본을 비교하세요. 1분짜리 비교가 표류와 날조를 모두 잡아냅니다.`,
				ja: `AIアシスタントは機械的な層では優秀です。文法、呼応、句読点、うっかり二度書いた文の発見、長い文書全体での時制と用語の一貫性の強制、目標が慣習的な場合の文体変換(「フォーマルにして」)。非ネイティブの書き手にとっては本物の平等装置で、冠詞の誤りや前置詞のミスが消えます。

被害はその層の上で、静かに起こります。声の平坦化が最大のものです。あらゆる比喩が標準化され、短く鋭い文はことごとく中くらいの長さに「改善」され、全文リライトを2回も通せば、あなたの文章は他の誰の文章とも同じに聞こえます。流暢で、温かく、匿名的に。意味のドリフトはより巧妙です。「3月に出荷できる見込みです」を「3月に出荷します」と書き直せば、予測が約束に変わっています。技術文書や法務文書のリライトは絶えずこの方向に流されます。最悪なのは拡張時の捏造です。薄い段落を「肉付けして」と頼むと、アシスタントはあなたが与えていない裏付けの詳細 — もっともらしい統計、例となる顧客、何かの研究 — を発明します。拡張された下書きの中で自分が入れていない事実にはすべて、出典が必要です。なければ削除です。

守りの習慣:「改善して」より狙いを定めた依頼(「文法だけ直して、他は何も変えるな」)を。書き直されたテキストではなく、理由付きの修正提案リストを求め、1つずつ受け入れるか却下する。そして使う前に出力と原文を突き合わせる。1分の差分確認が、ドリフトも捏造も捕まえます。`,
				zh: `AI 助手在机械层面非常出色:语法、搭配、标点、找出你不小心写了两遍的句子、在长文档中强制时态和术语一致,以及目标是常规文体时的语域转换("改成正式文体")。对非母语写作者,这是真正的平权工具——冠词错误和介词失误一扫而空。

伤害发生在这一层之上,而且悄无声息。声音扁平化是最大的一项:每个比喻都被常规化,每个短促有力的句子都被"改进"成中等长度,两轮全文改写之后,你的文字听起来和所有人一样——流畅、温和、匿名。意义漂移更隐蔽:把"我们大概率三月发布"改写成"我们三月发布",预测就变成了承诺;技术和法律文本的改写无时无刻不在这样漂移。最糟的是扩写时的编造:让助手"充实"一个单薄的段落,它会发明你从未提供的支撑细节——像模像样的统计数字、一个示例客户、一项研究。扩写稿里凡不是你亲手放进去的事实,要么补上出处,要么删掉。

自保习惯:优先用定向请求("只改语法,其他一律不动")替代"改进";要求输出带理由的修改建议清单而不是改写全文,以便逐条接受或否决;使用前把输出和原文做一次对比。这一分钟的比对,能同时抓住漂移和编造。`
			},
			code: {
				example: `Riskier request:
"Improve this paragraph."
(rewrites everything, voice and meaning included)

Safer requests:
"Fix grammar and punctuation only. Change nothing else."

"List up to 8 suggested edits as 'original -> suggestion
 -- reason'. Do not rewrite the text. Do not add any
 facts, numbers, or examples that are not already in
 the text. Keep hedges like 'likely' unless they are
 grammatically wrong."`
			}
		},
		{
			heading: {
				en: 'A Workflow That Keeps You the Author',
				ko: '저자 자리를 지키는 워크플로',
				ja: '著者の座を守るワークフロー',
				zh: '让你始终是作者的工作流'
			},
			body: {
				en: `A sustainable division of labor: you own ideas, structure, claims, and voice; the assistant owns mechanics and acts as a first reader.

In practice: draft fast and badly yourself, without the tool — a mediocre paragraph in your own voice is better raw material than a polished one in the model's. Then run the passes from this guide as separate requests: structural feedback first ("what is unclear, what order fails, what is missing — do not rewrite"), then paragraph checks, then grammar-only cleanup. Use the assistant as a reader simulator, one of the highest-value prompts there is: "What would a skeptical reader push back on? Where did you stop paying attention? Summarize my argument in two sentences." If the summary is wrong, the draft, not the reader, is at fault.

Keep a hedge budget in mind when accepting suggestions, and re-read the final text once asking a single question: does this still sound like me, and is every fact one I can stand behind? Both failure modes — borrowed voice and borrowed facts — are ultimately attributed to the byline, and the byline is yours.`,
				ko: `지속 가능한 분업: 생각, 구조, 주장, 목소리는 당신 소유. 어시스턴트는 기계적 층위를 맡고 첫 독자 역할을 합니다.

실전에서는: 도구 없이 스스로 빠르고 엉성하게 초안을 쓰세요. 당신 목소리로 쓴 평범한 문단이 모델 목소리로 쓴 매끈한 문단보다 나은 원재료입니다. 그다음 이 가이드의 패스들을 별도 요청으로 돌리세요. 구조 피드백 먼저('무엇이 불명확한가, 어떤 순서가 실패하는가, 무엇이 빠졌는가 — 다시 쓰지는 마'), 그다음 문단 점검, 그다음 문법만 청소. 어시스턴트를 독자 시뮬레이터로 쓰세요. 존재하는 프롬프트 중 가장 값진 축입니다. '회의적인 독자는 어디를 반박할까? 어디서 집중이 끊겼나? 내 논증을 두 문장으로 요약해 봐.' 요약이 틀렸다면 잘못은 독자가 아니라 초안에 있습니다.

제안을 수락할 때는 얼버무림 예산을 염두에 두고, 최종 텍스트를 한 번 더 읽으며 단 하나의 질문을 던지세요. 이게 아직 나처럼 들리는가, 그리고 모든 사실이 내가 책임질 수 있는 것인가? 두 실패 유형 — 빌려온 목소리와 빌려온 사실 — 은 결국 필자 이름 줄에 귀속되고, 그 이름은 당신 것입니다.`,
				ja: `持続可能な分業:アイデア、構造、主張、声はあなたの所有物。アシスタントは機械的な層を担い、最初の読者として働きます。

実践では:まずツールなしで、速く下手に自分で書くこと。自分の声で書かれた平凡な段落は、モデルの声で書かれた磨き上げられた段落より良い原材料です。次に、このガイドのパスを別々の依頼として実行します。構造のフィードバックが先(「何が不明瞭か、どの順序が破綻しているか、何が欠けているか — 書き直すな」)、次に段落のチェック、その後に文法だけの掃除。アシスタントは読者シミュレーターとして使いましょう。存在するプロンプトの中で最も価値の高い部類です。「懐疑的な読者はどこに反発する?どこで注意が途切れた?私の論旨を2文で要約して」。要約が間違っていたら、悪いのは読者ではなく下書きです。

提案を受け入れるときはぼかし表現の予算を頭に置き、最終テキストをもう一度だけ読みながら、たった1つの質問を投げてください。これはまだ私らしく聞こえるか、そしてすべての事実は私が責任を持てるものか?2つの失敗モード — 借り物の声と借り物の事実 — は最終的に署名行に帰属し、その署名はあなたのものです。`,
				zh: `可持续的分工是:想法、结构、主张和声音归你;助手负责机械层,并充当第一位读者。

实际操作:先不用工具,自己又快又糙地写出初稿——用你自己声音写出的平庸段落,比用模型声音写出的光鲜段落是更好的原材料。然后把本指南的几轮修改拆成独立请求:先要结构反馈("哪里不清楚、哪个顺序不成立、缺了什么——不要改写"),再做段落检查,最后只做语法清理。把助手当作读者模拟器,这是价值最高的提示词之一:"挑剔的读者会在哪里反驳?你在哪里开始走神?用两句话概括我的论点。"如果概括错了,错的不是读者,是草稿。

接受建议时记着你的"限定词预算",最后通读一遍定稿,只问一个问题:这还像我写的吗?每一个事实我都敢担保吗?两种失败——借来的声音和借来的事实——最终都会记在署名上,而署名是你的。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let input = '';
	type ActionType = 'improve' | 'grammar' | 'simplify' | 'formal' | 'casual';
	let action: ActionType = 'improve';
	let output = '';
	let copied = false;

	const actionPrompts = {
		improve: 'Improve this text by enhancing clarity, flow, and word choice while maintaining the original meaning:',
		grammar: 'Fix all grammar, spelling, and punctuation errors in this text:',
		simplify: 'Simplify this text using clearer, more accessible language while keeping the main ideas:',
		formal: 'Rewrite this text in a formal, professional tone suitable for business communication:',
		casual: 'Rewrite this text in a casual, conversational tone while keeping it friendly and approachable:'
	};

	function process() {
		if (!input.trim()) return;

		output = `${actionPrompts[action]}\n\n"${input}"\n\nProvide the improved version without explanations.`;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		input = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('writing.title')} - SDK.ac</title>
	<meta name="description" content={t('writing.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('writing.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('writing.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('writing.input')}
			</label>
			<textarea
				bind:value={input}
				placeholder={t('writing.inputPlaceholder')}
				class="w-full h-40 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Action Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('writing.action')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['improve', 'grammar', 'simplify', 'formal', 'casual'] as a}
					<button
						on:click={() => action = a as ActionType}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {action === a
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`writing.actions.${a}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={process}
				disabled={!input.trim()}
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
						{t('writing.result')}
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
