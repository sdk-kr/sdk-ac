<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Why Prompts Fail: The Specification Problem',
				ko: '프롬프트가 실패하는 이유: 사양(spec)의 문제',
				ja: 'プロンプトが失敗する理由:仕様の問題',
				zh: '提示词为什么失败:规格说明的问题'
			},
			body: {
				en: `Most disappointing AI answers are not model failures — they are specification failures. A language model resolves every ambiguity in your request by guessing the statistically average interpretation, and the average interpretation of a vague request is a vague answer. "Write about remote work" has thousands of defensible readings: a blog post, a policy memo, a pros-and-cons list, for executives or new hires, 200 words or 2,000. The model must pick one, and it picks the blandest.

The engineering insight is that a prompt is a specification, and it improves the way specifications improve: by pinning down the degrees of freedom that matter. Four pins do most of the work. Task: the verb and deliverable ("write a 600-word onboarding email," not "write about onboarding"). Audience: who reads the output and what they already know. Constraints: length, tone, format, what to exclude. Context: the background facts the model cannot guess — your product, your situation, the previous attempt that failed.

There is solid evidence that specificity pays. In practice, adding an explicit audience and length constraint alone visibly changes output quality, because it collapses the space of valid answers. A useful habit: after writing a prompt, ask "could two reasonable people read this and expect different deliverables?" If yes, the model will disappoint one of them — and you do not get to choose which.`,
				ko: `실망스러운 AI 답변 대부분은 모델의 실패가 아니라 사양(specification)의 실패입니다. 언어 모델은 요청의 모든 모호함을 통계적으로 평균적인 해석으로 추측해 메우는데, 모호한 요청의 평균적인 해석은 모호한 답입니다. "원격 근무에 대해 써 줘"에는 수천 가지 타당한 독해가 있습니다. 블로그 글일 수도, 정책 메모일 수도, 장단점 목록일 수도 있고, 임원용일 수도 신입용일 수도 있으며, 200단어일 수도 2,000단어일 수도 있습니다. 모델은 하나를 골라야 하고, 가장 밋밋한 것을 고릅니다.

공학적 통찰은 프롬프트가 곧 사양이며, 사양이 개선되는 방식 그대로 개선된다는 것입니다. 중요한 자유도를 고정하면 됩니다. 네 개의 핀이 대부분의 일을 합니다. 과업: 동사와 산출물("온보딩에 대해 써 줘"가 아니라 "600단어 온보딩 이메일을 써 줘"). 독자: 누가 읽고 무엇을 이미 아는지. 제약: 길이, 톤, 형식, 제외할 것. 맥락: 모델이 추측할 수 없는 배경 사실 — 여러분의 제품, 상황, 실패했던 이전 시도.

구체성이 보상받는다는 증거는 탄탄합니다. 실무에서는 명시적인 독자와 길이 제약을 추가하는 것만으로도 출력 품질이 눈에 띄게 달라집니다. 유효한 답의 공간이 좁아지기 때문입니다. 유용한 습관 하나: 프롬프트를 쓴 뒤 "합리적인 두 사람이 이걸 읽고 서로 다른 산출물을 기대할 수 있나?"라고 물어보세요. 그렇다면 모델은 둘 중 한 명을 실망시킬 것이고, 누구를 실망시킬지는 여러분이 고를 수 없습니다.`,
				ja: `がっかりするAIの回答の大半は、モデルの失敗ではなく仕様の失敗です。言語モデルはリクエスト内のあらゆる曖昧さを、統計的に平均的な解釈で推測して埋めます。そして曖昧な依頼の平均的な解釈は、曖昧な答えです。「リモートワークについて書いて」には何千通りもの妥当な読み方があります。ブログ記事か、社内メモか、長所短所リストか。役員向けか新入社員向けか。200語か2,000語か。モデルはどれかを選ばねばならず、いちばん無難なものを選びます。

エンジニアリング上の洞察は、プロンプトとは仕様であり、仕様が改善されるのと同じやり方で改善される、ということです。重要な自由度を固定するのです。4本のピンでほとんどの仕事が片付きます。タスク:動詞と成果物(「オンボーディングについて書いて」ではなく「600語のオンボーディングメールを書いて」)。読者:誰が読み、何をすでに知っているか。制約:長さ、トーン、形式、除外事項。文脈:モデルには推測できない背景事実 — あなたの製品、状況、失敗した前回の試み。

具体性が報われる証拠は確かです。実務では、明示的な読者と長さの制約を加えるだけで出力の質が目に見えて変わります。妥当な答えの空間が潰れるからです。有用な習慣を1つ。プロンプトを書いたら「常識的な2人がこれを読んで、別々の成果物を期待し得るか?」と自問してください。イエスなら、モデルはどちらか一方を失望させます。そしてどちらを失望させるかを、あなたは選べません。`,
				zh: `大多数令人失望的 AI 回答,不是模型的失败,而是规格说明的失败。语言模型会用统计上最平均的解释来填补请求中的每一处歧义,而模糊请求的平均解释就是模糊的答案。"写点关于远程办公的东西"有几千种说得通的理解:博客文章、政策备忘、优缺点清单,给高管看还是给新员工看,200 词还是 2000 词。模型必须选一种,而它选的总是最平庸的那种。

工程上的洞见是:提示词就是一份规格说明,它的改进方式与规格说明的改进方式相同——把关键的自由度钉死。四颗钉子能解决大部分问题。任务:动词和交付物("写一封 600 词的入职欢迎邮件",而不是"写点关于入职的东西")。受众:谁来读,他们已经知道什么。约束:长度、语气、格式、需要排除的内容。上下文:模型猜不到的背景事实——你的产品、你的处境、上次失败的尝试。

"具体就有回报"这一点证据充分。实践中,仅仅加上明确的受众和长度约束,就能明显改变输出质量,因为它压缩了合法答案的空间。一个有用的习惯:写完提示词后问自己:"两个讲道理的人读了它,会不会期待两种不同的交付物?"如果会,模型必然让其中一人失望——而失望的是谁,由不得你选。`
			},
			code: {
				example: `Before (vague — average answer guaranteed):
"Write about remote work."

After (specified — 4 pins):
"Write a 600-word article arguing that hybrid schedules
beat fully-remote for junior engineers.
Audience: engineering managers at startups (assume they
already know the standard remote-work pros/cons).
Tone: direct, conversational, no buzzwords.
Structure: hook, 3 arguments each with one concrete
example, one counterargument addressed, action-oriented
close. Do NOT discuss cost savings or real estate."`
			}
		},
		{
			heading: {
				en: 'Techniques That Measurably Work: Role, Few-Shot, Decomposition',
				ko: '측정 가능하게 효과 있는 기법: 역할, 퓨샷, 분해',
				ja: '測定可能な効果がある技法:ロール、Few-shot、分解',
				zh: '有实测效果的技巧:角色、少样本与任务分解'
			},
			body: {
				en: `Prompt engineering accumulated real, tested techniques; it also accumulated folklore. Here is the load-bearing subset.

Role assignment ("You are a senior tax accountant reviewing this for errors") works not because the model becomes an accountant but because it shifts the output distribution toward the vocabulary, caution, and structure of that genre. It helps most with tone and depth calibration and least with factual accuracy — a model role-playing a doctor is not more medically accurate, only more clinical-sounding. Use roles to set register; never to manufacture authority.

Few-shot examples are the highest-leverage technique for format and style. Two or three input-output pairs beat paragraphs of description, because they specify things you would never think to verbalize — how terse the labels are, how edge cases look, what "good" actually means. Keep examples diverse: models copy the pattern of your examples aggressively, including their biases (if all your examples are positive-sentiment, expect positive-sentiment outputs).

Decomposition beats single mega-prompts for anything multi-stage. "Read this contract, find risky clauses, and draft an email about them" mixes three tasks with three different quality criteria; running them as three prompts lets you inspect and correct intermediate output. Similarly, asking the model to plan before writing ("first list the sections, then wait") catches structural problems while they cost one line to fix.

Chain-of-thought instructions ("think step by step") help on arithmetic and logic-style problems, but modern reasoning-tuned models often do this internally — the bigger win today is asking the model to verify its answer against your stated constraints before finalizing.`,
				ko: `프롬프트 엔지니어링에는 검증된 진짜 기법이 쌓였고, 민간전승도 함께 쌓였습니다. 하중을 견디는 부분만 추리면 이렇습니다.

역할 부여("당신은 이 문서의 오류를 검토하는 시니어 세무사입니다")가 효과 있는 이유는 모델이 세무사가 되어서가 아니라, 출력 분포가 그 장르의 어휘·신중함·구조 쪽으로 이동하기 때문입니다. 톤과 깊이 조정에 가장 효과적이고, 사실 정확도에는 가장 효과가 없습니다. 의사를 연기하는 모델이 의학적으로 더 정확해지는 게 아니라 말투만 더 임상적으로 변합니다. 역할은 문체를 정하는 데 쓰고, 권위를 만들어내는 데 쓰지 마세요.

퓨샷(few-shot) 예시는 형식과 스타일에 가장 지렛대가 큰 기법입니다. 입력-출력 쌍 두세 개가 설명 문단 여러 개를 이깁니다. 여러분이 말로 표현할 생각조차 못 할 것들 — 라벨이 얼마나 간결한지, 엣지 케이스가 어떻게 생겼는지, "좋음"이 실제로 무엇을 뜻하는지 — 을 지정해 주기 때문입니다. 예시는 다양하게 유지하세요. 모델은 예시의 패턴을 편향까지 포함해 공격적으로 복제합니다(예시가 전부 긍정적이면 출력도 긍정적으로 쏠립니다).

다단계 작업에서는 분해가 단일 메가 프롬프트를 이깁니다. "이 계약서를 읽고, 위험 조항을 찾고, 그에 대한 이메일 초안을 써 줘"는 품질 기준이 서로 다른 세 과업을 섞은 것입니다. 세 개의 프롬프트로 나누면 중간 산출물을 검사하고 교정할 수 있습니다. 마찬가지로 쓰기 전에 계획을 요구하면("먼저 목차만 나열하고 기다려") 구조적 문제를 한 줄만 고치면 되는 시점에 잡아냅니다.

사고 사슬 지시("단계별로 생각해")는 산수·논리형 문제에 효과가 있지만, 요즘의 추론 특화 모델은 이를 내부적으로 수행하는 경우가 많습니다. 오늘날 더 큰 이득은 마무리 전에 "네 답이 내가 명시한 제약을 지키는지 검증하라"고 요구하는 것입니다.`,
				ja: `プロンプトエンジニアリングには検証済みの本物の技法が蓄積されました。同時に民間伝承も蓄積されました。荷重を支えている部分だけを抜き出すとこうなります。

ロール付与(「あなたはこの書類の誤りをレビューするシニア税理士です」)が効くのは、モデルが税理士になるからではなく、出力分布がそのジャンルの語彙・慎重さ・構造の方向へ移動するからです。トーンと深さの調整には最も効き、事実の正確さには最も効きません。医師を演じるモデルは医学的に正確になるのではなく、口調が臨床的になるだけです。ロールは文体を決めるために使い、権威を捏造するために使わないでください。

Few-shot例示は、形式とスタイルに対して最もレバレッジの大きい技法です。入力と出力のペア2〜3組は、説明の段落数個に勝ります。言語化しようと思いつきもしないこと — ラベルの簡潔さ、エッジケースの形、「良い」が実際に何を意味するか — を指定してくれるからです。例は多様に保ってください。モデルは例のパターンを、その偏りごと強烈に複製します(例がすべてポジティブなら、出力もポジティブに偏ります)。

多段階の作業では、分解が単一の巨大プロンプトに勝ります。「この契約書を読み、リスク条項を見つけ、それについてのメールを起草して」は、品質基準の異なる3つのタスクの混合です。3つのプロンプトに分ければ、中間出力を検査し修正できます。同様に、書く前に計画を求める(「まずセクション一覧だけ出して待って」)ことで、構造の問題を1行の修正で済む段階で捕まえられます。

思考連鎖の指示(「ステップバイステップで考えて」)は算術・論理系の問題に効きますが、最近の推論特化モデルは内部でこれを行うことが多い。今日より大きな効果があるのは、確定前に「あなたの答えが私の明示した制約を満たすか検証せよ」と求めることです。`,
				zh: `提示词工程积累了经过检验的真技巧,也积累了不少民间传说。真正承重的部分如下。

角色设定("你是一位资深税务会计师,正在审查这份文件的错误")之所以有效,不是因为模型变成了会计师,而是因为它把输出分布推向了该行业文体的词汇、审慎程度和结构。它对语气和深度的校准最有效,对事实准确性最无效——扮演医生的模型不会更懂医学,只是听起来更像临床口吻。用角色来设定语域,别用它来制造权威。

少样本(few-shot)示例是对格式和风格杠杆最大的技巧。两三对输入-输出示例胜过成段的文字描述,因为它们规定了你根本想不到要说出口的东西——标签有多简短、边界情况长什么样、"好"到底意味着什么。示例要保持多样:模型会连同偏差一起,极其忠实地复制你示例中的模式(如果示例全是正面情绪,输出也会向正面倾斜)。

对任何多阶段任务,拆解都胜过单个巨型提示词。"读这份合同,找出风险条款,再起草一封邮件说明"混合了三个质量标准各异的任务;拆成三个提示词,你就能检查并纠正中间产物。同样,让模型先规划再动笔("先只列出章节,然后等我确认"),能在结构问题只需改一行时就发现它。

思维链指令("一步一步思考")对算术和逻辑类问题有帮助,但现代的推理特化模型往往已在内部完成这一步——如今更大的收益,是要求模型在定稿前对照你写明的约束逐条自查。`
			},
			code: {
				example: `Few-shot format specification (2 examples do the work):

"Classify each support ticket. Respond in exactly this format.

Ticket: 'App crashes when I upload a photo over 10MB'
-> category: bug | severity: high | team: mobile

Ticket: 'Would love a dark mode option'
-> category: feature-request | severity: low | team: design

Ticket: 'I was charged twice this month'
->"`
			}
		},
		{
			heading: {
				en: 'Output Schemas: Getting Answers a Program Can Read',
				ko: '출력 스키마: 프로그램이 읽을 수 있는 답 받아내기',
				ja: '出力スキーマ:プログラムが読める答えを得る',
				zh: '输出模式:拿到程序读得懂的答案'
			},
			body: {
				en: `The moment an AI answer feeds into anything downstream — a spreadsheet, a script, another prompt — free-form prose becomes a liability. The fix is to specify an output schema: the exact shape of the response, stated as non-negotiable.

Three practices make schemas stick. First, show the schema, do not describe it. "Respond as JSON with keys title, risk_level (one of: low/medium/high), and reasons (array of strings)" is good; pasting a filled-in example of the JSON is better, because an example fixes details a description leaves open (quoting style, casing, whether empty arrays are allowed). Second, close the escape hatches. Models love to wrap JSON in markdown fences, prepend "Here is your JSON:", or add a friendly closing line. Say explicitly: "Output only the JSON object. No code fences, no explanation before or after." Third, design for failure: include a way for the model to say "I could not do this" inside the schema (a status field, a nullable answer) — otherwise it will fill required fields with plausible inventions rather than leave them empty, which is exactly the failure you cannot detect.

Schemas also improve non-programmatic work. Asking for "a table with columns X, Y, Z" or "exactly five bullets, each starting with a verb" forces the model to organize its thinking and makes missing pieces visible at a glance. A structured wrong answer is easy to spot; an eloquent wrong answer is not. Even so, validate anything machine-parsed — schema compliance is high with modern models, but it is not guaranteed unless you use an API-level structured output feature.`,
				ko: `AI의 답이 다운스트림 어딘가 — 스프레드시트, 스크립트, 또 다른 프롬프트 — 로 흘러가는 순간, 자유 형식 산문은 부채가 됩니다. 해법은 출력 스키마를 지정하는 것입니다. 응답의 정확한 형태를 협상 불가 조건으로 명시하세요.

세 가지 관행이 스키마를 지켜지게 만듭니다. 첫째, 스키마를 설명하지 말고 보여주세요. "title, risk_level(low/medium/high 중 하나), reasons(문자열 배열) 키를 가진 JSON으로 응답하라"도 좋지만, 값이 채워진 JSON 예시를 붙여 넣는 게 더 좋습니다. 예시는 설명이 열어두는 디테일 — 따옴표 스타일, 대소문자, 빈 배열 허용 여부 — 을 고정하기 때문입니다. 둘째, 탈출구를 막으세요. 모델은 JSON을 마크다운 펜스로 감싸거나, "요청하신 JSON입니다:"를 앞에 붙이거나, 친절한 맺음말을 더하길 좋아합니다. 명시적으로 말하세요. "JSON 객체만 출력하라. 코드 펜스 금지, 앞뒤 설명 금지." 셋째, 실패를 설계에 넣으세요. 모델이 스키마 안에서 "할 수 없었다"고 말할 방법(status 필드, null 허용 답변)을 마련하세요. 그러지 않으면 필수 필드를 비워두는 대신 그럴듯한 창작으로 채웁니다. 바로 그것이 탐지할 수 없는 실패입니다.

스키마는 프로그래밍과 무관한 작업도 개선합니다. "X, Y, Z 열을 가진 표" 또는 "각각 동사로 시작하는 정확히 다섯 개의 불릿"을 요구하면 모델이 생각을 조직하게 되고, 빠진 조각이 한눈에 보입니다. 구조화된 오답은 찾기 쉽지만 유창한 오답은 그렇지 않습니다. 그래도 기계가 파싱하는 것은 반드시 검증하세요. 현대 모델의 스키마 준수율은 높지만, API 수준의 구조화 출력 기능을 쓰지 않는 한 보장되지는 않습니다.`,
				ja: `AIの答えが下流の何か — スプレッドシート、スクリプト、別のプロンプト — に流れ込む瞬間、自由形式の散文は負債になります。解決策は出力スキーマの指定です。応答の正確な形を、交渉不可の条件として明示するのです。

3つの実践がスキーマを守らせます。第一に、スキーマは説明せず見せる。「title、risk_level(low/medium/highのいずれか)、reasons(文字列の配列)をキーに持つJSONで応答せよ」でも良いですが、値の入ったJSONの実例を貼るほうが優れています。実例は、説明が開けたままにする細部 — 引用符のスタイル、大文字小文字、空配列の可否 — を固定するからです。第二に、逃げ道を塞ぐ。モデルはJSONをマークダウンのフェンスで包み、「こちらがJSONです:」を前置きし、愛想の良い締めの一文を加えたがります。明示してください。「JSONオブジェクトのみを出力。コードフェンス禁止、前後の説明禁止」。第三に、失敗を設計に組み込む。スキーマの中で「できなかった」と言える手段(statusフィールド、null許容の回答)を用意してください。さもないとモデルは必須フィールドを空にする代わりに、もっともらしい創作で埋めます。それこそが検出不能な失敗です。

スキーマはプログラムと無関係な作業も改善します。「X・Y・Z列の表」や「それぞれ動詞で始まるちょうど5つの箇条書き」を要求すると、モデルは思考を整理せざるを得ず、欠けた部分が一目で見えます。構造化された誤答は見つけやすく、雄弁な誤答はそうではありません。それでも、機械がパースするものは必ず検証を。現代のモデルのスキーマ遵守率は高いものの、APIレベルの構造化出力機能を使わない限り保証はされません。`,
				zh: `一旦 AI 的回答要喂给下游的任何东西——表格、脚本、另一个提示词——自由散文就成了负债。解决办法是指定输出模式:把响应的确切形状,作为不容商量的条件写明。

三个做法能让模式真正被遵守。第一,展示模式,不要描述模式。"以 JSON 回复,包含键 title、risk_level(取值 low/medium/high 之一)、reasons(字符串数组)"不错;直接贴一个填好值的 JSON 示例更好,因为示例锁定了描述留下的空白——引号风格、大小写、空数组是否允许。第二,堵住逃生口。模型热衷于用 markdown 代码围栏包裹 JSON、在前面加一句"这是您要的 JSON:",或者补一句友好的结束语。要明说:"只输出 JSON 对象。不要代码围栏,前后不要任何解释。"第三,为失败留出口:在模式里给模型一个说"我做不到"的途径(status 字段、可为 null 的答案)——否则它不会留空必填字段,而是用貌似合理的编造去填满,而这恰恰是你检测不到的那种失败。

模式对非编程工作同样有益。要求"一个包含 X、Y、Z 三列的表格"或"恰好五条要点,每条以动词开头",会迫使模型组织思路,缺了哪块一眼可见。结构化的错误答案容易发现;雄辩的错误答案则不然。即便如此,凡是要机器解析的内容都要校验——现代模型的模式遵守率很高,但除非使用 API 级的结构化输出功能,否则没有保证。`
			},
			code: {
				example: `"Analyze the review below. Output ONLY this JSON —
no code fences, no text before or after:

{
  "sentiment": "positive",
  "confidence": 0.92,
  "topics": ["shipping", "packaging"],
  "actionable_complaint": true,
  "status": "ok"
}

If the text is not a product review, output:
{ "status": "not_a_review" }
and nothing else."`
			}
		},
		{
			heading: {
				en: 'The Iteration Loop: Treat Prompts Like Code',
				ko: '반복 개선 루프: 프롬프트를 코드처럼 다루기',
				ja: '反復のループ:プロンプトをコードのように扱う',
				zh: '迭代循环:像对待代码一样对待提示词'
			},
			body: {
				en: `Nobody writes a good prompt on the first try for a task that matters. The people who get consistently strong results are running a loop: draft, test, diagnose, revise — the same loop as debugging.

Diagnosis is the skill. When output disappoints, name the failure before touching the prompt. Wrong format? Add a schema or an example. Wrong depth? Your audience line is missing or wrong. Wrong content? You assumed context the model does not have — add the background facts. Ignored an instruction? It may be buried mid-prompt; models weight the beginning and end of a prompt more than the middle, so move critical constraints to the top and restate the single most important one at the end. Confidently wrong facts? No prompt phrasing reliably fixes hallucination — you need to supply source material and instruct the model to answer only from it.

Change one thing per iteration. If you rewrite five parts at once and the output improves, you have learned nothing about which part mattered — and prompts, like code, accumulate superstition fast ("we always add this paragraph; nobody remembers why").

Two habits separate casual users from operators. Keep a prompt library: when a prompt works, save it with a note about what it is for and one example of its output; you will reuse it for months. And test on more than one input before trusting a prompt: a prompt tuned on a single example quietly overfits to it, exactly like a model trained on one data point.`,
				ko: `중요한 작업에서 첫 시도에 좋은 프롬프트를 쓰는 사람은 없습니다. 일관되게 강한 결과를 얻는 사람들은 루프를 돌리고 있습니다. 초안, 테스트, 진단, 수정 — 디버깅과 같은 루프입니다.

진단이 기술입니다. 출력이 실망스러우면 프롬프트에 손대기 전에 실패의 이름부터 붙이세요. 형식이 틀렸나? 스키마나 예시를 추가하세요. 깊이가 틀렸나? 독자 지정이 없거나 잘못됐습니다. 내용이 틀렸나? 모델에게 없는 맥락을 가정한 것이니 배경 사실을 추가하세요. 지시를 무시했나? 프롬프트 중간에 파묻혔을 수 있습니다. 모델은 프롬프트의 처음과 끝을 중간보다 무겁게 취급하므로, 핵심 제약을 맨 위로 옮기고 가장 중요한 것 하나를 끝에서 재진술하세요. 자신만만한 오답? 환각을 확실하게 고치는 프롬프트 문구는 없습니다. 원천 자료를 제공하고 그 자료에서만 답하라고 지시해야 합니다.

한 번에 하나만 바꾸세요. 다섯 군데를 한꺼번에 고쳐서 출력이 좋아졌다면 어느 부분이 중요했는지 아무것도 배우지 못한 것입니다. 프롬프트도 코드처럼 미신이 빨리 쌓입니다("우린 항상 이 문단을 넣어. 이유는 아무도 기억 못 해").

두 가지 습관이 일반 사용자와 숙련자를 가릅니다. 프롬프트 라이브러리를 유지하세요. 잘 작동한 프롬프트는 용도 메모와 출력 예시 하나와 함께 저장하세요. 몇 달을 재사용하게 됩니다. 그리고 프롬프트를 신뢰하기 전에 입력 두 개 이상으로 테스트하세요. 단일 예시에 맞춰 조정된 프롬프트는 데이터 포인트 하나로 학습한 모델처럼 그 예시에 조용히 과적합됩니다.`,
				ja: `重要なタスクで最初の一発から良いプロンプトを書ける人はいません。安定して強い結果を出す人はループを回しています。下書き、テスト、診断、修正 — デバッグと同じループです。

診断こそが技術です。出力にがっかりしたら、プロンプトに触る前に失敗の名前を付けてください。形式が違う?スキーマか例を追加。深さが違う?読者の指定が欠けているか誤っています。内容が違う?モデルが持たない文脈を仮定したのだから、背景事実を追加します。指示が無視された?プロンプトの中間に埋もれているのかもしれません。モデルはプロンプトの冒頭と末尾を中間より重視するので、重要な制約を先頭に移し、最重要の1つを末尾で再度述べてください。自信満々の誤り?ハルシネーションを確実に直すプロンプトの言い回しは存在しません。ソース資料を与え、そこからのみ答えるよう指示する必要があります。

1回の反復で変えるのは1箇所だけ。5箇所を一度に書き換えて出力が改善しても、どこが効いたのかは何も学べません。プロンプトもコードと同じで、迷信が速く蓄積します(「このパラグラフはいつも入れる。理由は誰も覚えていない」)。

2つの習慣が、カジュアルなユーザーと熟練者を分けます。プロンプトのライブラリを維持すること。うまくいったプロンプトは、用途のメモと出力例1つを添えて保存してください。何か月も再利用することになります。そして、信頼する前に複数の入力でテストすること。1つの例に合わせて調整されたプロンプトは、1データ点で訓練されたモデルと同じように、その例へ静かに過学習しています。`,
				zh: `对真正重要的任务,没人能一次写出好提示词。持续拿到好结果的人都在跑一个循环:起草、测试、诊断、修改——和调试代码是同一个循环。

诊断才是真功夫。输出令人失望时,先给失败定性,再去动提示词。格式不对?加模式或示例。深浅不对?你的受众说明缺失或写错了。内容不对?你假设了模型不具备的背景,把背景事实补进去。指令被忽略?它可能被埋在提示词中段;模型对提示词开头和结尾的权重高于中间,所以把关键约束移到最前面,并在结尾把最重要的那一条重申一遍。事实错得理直气壮?没有任何提示词措辞能可靠地治好幻觉——你需要提供源材料,并指示模型只依据材料作答。

每次迭代只改一处。一次改五个地方,即使输出变好了,你也不知道是哪处起了作用——提示词和代码一样,迷信积累得飞快("我们一直加这段话,没人记得为什么")。

两个习惯把普通用户和熟手区分开来。维护一个提示词库:提示词奏效时,连同用途注记和一个输出示例存下来,你会用上好几个月。以及,在信任一个提示词之前,用不止一个输入测试它:只在单个例子上调出来的提示词,会像只用一个数据点训练的模型一样,悄悄地过拟合。`
			}
		},
		{
			heading: {
				en: 'What Prompting Cannot Fix',
				ko: '프롬프트로 고칠 수 없는 것',
				ja: 'プロンプトでは直せないもの',
				zh: '提示词治不了的病'
			},
			body: {
				en: `A well-built prompt raises the ceiling of what a model produces, but some limits belong to the model, and pretending otherwise wastes hours.

No prompt makes a model know things it was not trained on: your yesterday's meeting, a paper published last week, your company's internal pricing. If the answer requires that information, it must be in the prompt — supplied by you or by a retrieval system. Related: prompts do not grant access to real-time data. A model asked for "the current price" will produce a price-shaped number.

No prompt eliminates hallucination; grounding merely reduces it. Even with source material provided, models occasionally blend supplied facts with remembered ones. For factual work, the rule stands: the model drafts, you verify. Ask for citations to the supplied text (paragraph numbers work well), spot-check them, and be most suspicious of details that are specific, convenient, and unverifiable.

No prompt makes the model a reliable judge of its own output. "Are you sure?" mostly elicits polite self-revision toward whatever you seem to want — models exhibit sycophancy, agreeing with a user's stated position even when it is wrong. Independent checks (a second fresh conversation, a different model, or your own expertise) are worth more than any in-conversation reassurance.

Knowing these boundaries is itself a prompting skill: the best practitioners spend their effort where wording helps — specification, examples, schemas, decomposition — and reach for other tools where it cannot.`,
				ko: `잘 만든 프롬프트는 모델이 산출하는 것의 상한선을 올려주지만, 어떤 한계는 모델 자체의 것이고, 아닌 척하면 시간만 낭비합니다.

어떤 프롬프트도 모델이 학습하지 않은 것을 알게 만들지 못합니다. 어제 여러분의 회의, 지난주 발표된 논문, 회사 내부 가격 정책이 그렇습니다. 답에 그 정보가 필요하다면 프롬프트 안에 있어야 합니다. 여러분이 직접 넣든 검색 시스템이 넣든 말입니다. 관련해서, 프롬프트는 실시간 데이터 접근 권한을 주지 않습니다. "현재 가격"을 물으면 모델은 가격처럼 생긴 숫자를 만들어냅니다.

어떤 프롬프트도 환각을 제거하지 못합니다. 근거 자료 제공은 줄여줄 뿐입니다. 원천 자료를 줘도 모델은 가끔 제공된 사실과 기억 속 사실을 섞습니다. 사실 관계 작업의 규칙은 그대로입니다. 모델이 초안을 쓰고, 여러분이 검증합니다. 제공한 텍스트에 대한 인용(문단 번호가 잘 작동합니다)을 요구하고, 표본 검사하고, 구체적이고 편리하고 검증 불가능한 디테일을 가장 의심하세요.

어떤 프롬프트도 모델을 자기 출력의 신뢰할 만한 심판으로 만들지 못합니다. "확실해?"는 대부분 여러분이 원하는 듯한 방향으로의 공손한 자기 수정을 끌어낼 뿐입니다. 모델은 아첨(sycophancy) 경향이 있어 사용자의 입장이 틀렸을 때조차 동의합니다. 독립적인 검사(새로운 대화, 다른 모델, 또는 여러분 자신의 전문성)가 대화 안에서의 어떤 안심시키기보다 가치 있습니다.

이 경계를 아는 것 자체가 프롬프트 기술입니다. 최고의 실무자는 문구가 도움이 되는 곳 — 사양, 예시, 스키마, 분해 — 에 노력을 쓰고, 문구가 소용없는 곳에서는 다른 도구를 꺼냅니다.`,
				ja: `よく作られたプロンプトはモデルの出力の上限を引き上げますが、一部の限界はモデル自身のものであり、そうでないふりをしても時間を浪費するだけです。

どんなプロンプトも、訓練されていないことをモデルに知らせることはできません。昨日のあなたの会議、先週発表された論文、社内の価格情報。答えにその情報が必要なら、プロンプトの中になければなりません — あなたが入れるか、検索システムが入れるかです。関連して、プロンプトはリアルタイムデータへのアクセス権を与えません。「現在の価格」を尋ねられたモデルは、価格の形をした数字を生成します。

どんなプロンプトもハルシネーションを消せません。根拠資料は減らすだけです。ソースを与えても、モデルは時に、提供された事実と記憶にある事実を混ぜます。事実に関わる仕事のルールは変わりません。モデルが下書きし、あなたが検証する。提供テキストへの引用(段落番号が有効)を求め、抜き取り検査し、具体的で、都合が良く、検証不能なディテールを最も疑ってください。

どんなプロンプトも、モデルを自分の出力の信頼できる審判にはできません。「本当に?」は、あなたが望んでいそうな方向への丁寧な自己修正を引き出すだけのことがほとんどです。モデルには追従(sycophancy)の傾向があり、ユーザーの主張が誤っていても同意します。独立したチェック(新しい会話、別のモデル、あるいはあなた自身の専門知識)は、会話内のどんな安心材料よりも価値があります。

この境界を知ること自体がプロンプトの技術です。最良の実務家は、言葉遣いが効く場所 — 仕様、例示、スキーマ、分解 — に労力を注ぎ、効かない場所では別の道具に手を伸ばします。`,
				zh: `一个精心构建的提示词能抬高模型产出的上限,但有些限制属于模型本身,假装它们不存在只会浪费时间。

没有任何提示词能让模型知道它没被训练过的东西:你昨天的会议、上周刚发表的论文、你公司的内部报价。如果答案需要这些信息,它们就必须出现在提示词里——由你提供,或由检索系统提供。与此相关:提示词不会赋予实时数据的访问权。问模型"现在的价格",它会产出一个长得像价格的数字。

没有任何提示词能消除幻觉;提供依据只是减少它。即便给了源材料,模型偶尔仍会把提供的事实和记忆里的事实混在一起。事实性工作的规则不变:模型起草,你来核实。要求它引用你提供的文本(段落编号很好用),抽查这些引用,并对那些具体、顺手、又无法验证的细节保持最高警惕。

没有任何提示词能让模型成为自己输出的可靠裁判。"你确定吗?"多半只会引出一次朝着你似乎想要的方向的礼貌自我修正——模型存在谄媚(sycophancy)倾向,即使用户的立场是错的也会附和。独立的检查(另开一段全新对话、换一个模型、或你自己的专业判断)比对话内的任何安抚都更有价值。

认清这些边界本身就是提示词技能:最好的实践者把力气花在措辞有用的地方——规格、示例、模式、拆解——在措辞无能为力的地方,则换用别的工具。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let task = '';
	let context = '';
	type StyleType = 'detailed' | 'concise' | 'creative' | 'professional';
	let style: StyleType = 'detailed';
	let output = '';
	let copied = false;

	function generate() {
		if (!task.trim()) return;

		const styleGuide = {
			detailed: 'Provide a comprehensive, step-by-step response with examples and explanations.',
			concise: 'Be brief and to the point. Focus only on essential information.',
			creative: 'Think outside the box. Provide innovative and unique perspectives.',
			professional: 'Use formal language and maintain a business-appropriate tone.'
		};

		let prompt = `You are an expert assistant. ${styleGuide[style]}\n\n`;
		prompt += `Task: ${task}\n`;

		if (context.trim()) {
			prompt += `\nContext: ${context}\n`;
		}

		prompt += `\nPlease provide a thorough and helpful response.`;

		output = prompt;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		task = '';
		context = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('prompt.title')} - SDK.ac</title>
	<meta name="description" content={t('prompt.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('prompt.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('prompt.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Task Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('prompt.task')}
			</label>
			<textarea
				bind:value={task}
				placeholder={t('prompt.taskPlaceholder')}
				class="w-full h-24 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Context Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('prompt.context')}
			</label>
			<textarea
				bind:value={context}
				placeholder={t('prompt.contextPlaceholder')}
				class="w-full h-20 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Style Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('prompt.style')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['detailed', 'concise', 'creative', 'professional'] as s}
					<button
						on:click={() => style = s as StyleType}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {style === s
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`prompt.styles.${s}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={generate}
				disabled={!task.trim()}
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
						{t('prompt.result')}
					</label>
					<button
						on:click={copyOutput}
						class="text-sm px-3 py-1 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-lg transition-colors"
					>
						{copied ? t('ui.copied') : t('ui.copy')}
					</button>
				</div>
				<div class="p-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl">
					<pre class="whitespace-pre-wrap text-sm text-gray-800 dark:text-dark-200 font-mono">{output}</pre>
				</div>
			</div>
		{/if}
	</div>

	<ToolGuide {lang} sections={guideSections} />
</div>
