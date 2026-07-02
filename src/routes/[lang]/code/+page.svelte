<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Reading Unfamiliar Code: The Outside-In Method',
				ko: '낯선 코드 읽기: 바깥에서 안으로',
				ja: '見知らぬコードの読み方:外から内へ',
				zh: '读陌生代码:由外向内的方法'
			},
			body: {
				en: `Experienced engineers do not read code top to bottom like prose. They read it outside-in, and an AI explainer is most useful when you drive it the same way.

Start with the boundaries: what goes in, what comes out. Find the entry point (the exported function, the route handler, the main loop) and the exit points (return values, thrown errors, writes to a database or file). Before asking what any line does, ask the tool to identify inputs, outputs, and side effects — that single question maps the territory.

Second pass: follow one concrete value through the code. Pick a realistic input (a user object with an empty orders array, say) and ask the explainer to trace it line by line. Tracing a specific value exposes branches, mutations, and early returns that a generic summary glosses over.

Third pass: name the idioms. Most code is 80% pattern and 20% decision. A debounce wrapper, a retry loop with exponential backoff, a reducer — once the pattern is named, only the deviations from the pattern need real attention. Ask directly: which parts of this are standard patterns, and where does it deviate from them?

Only then read line by line, and only the parts that survived the first three passes as genuinely unclear. On a 200-line file this usually leaves about 20 lines that matter.`,
				ko: `숙련된 엔지니어는 코드를 산문처럼 위에서 아래로 읽지 않습니다. 바깥에서 안으로 읽습니다. AI 설명기도 같은 방식으로 몰아갈 때 가장 유용합니다.

경계부터 시작하세요. 무엇이 들어가고 무엇이 나오는가. 진입점(내보낸 함수, 라우트 핸들러, 메인 루프)과 출구(반환값, 던져지는 에러, 데이터베이스나 파일 쓰기)를 찾으세요. 어떤 줄이 무슨 일을 하는지 묻기 전에, 입력·출력·부수 효과를 짚어달라고 요청하세요. 그 질문 하나가 지형도를 그려줍니다.

두 번째 패스: 구체적인 값 하나를 코드 전체로 따라가세요. 현실적인 입력(예: orders 배열이 비어 있는 user 객체)을 골라 한 줄씩 추적해 달라고 하세요. 특정 값을 추적하면 일반적인 요약이 뭉개고 지나가는 분기, 변이, 조기 반환이 드러납니다.

세 번째 패스: 관용구에 이름을 붙이세요. 대부분의 코드는 80%가 패턴이고 20%가 결정입니다. 디바운스 래퍼, 지수 백오프 재시도 루프, 리듀서 — 패턴에 이름이 붙으면 패턴에서 벗어난 부분만 진짜 주의가 필요합니다. 직접 물어보세요. 이 중 어디가 표준 패턴이고, 어디서 패턴을 벗어나는가?

그다음에야 줄 단위로 읽되, 앞의 세 패스를 거치고도 진짜 불명확하게 남은 부분만 읽으세요. 200줄짜리 파일이라면 보통 중요한 20줄 정도만 남습니다.`,
				ja: `経験豊富なエンジニアは、コードを散文のように上から下へは読みません。外から内へ読みます。AI説明ツールも、同じやり方で使うときに最も役立ちます。

まず境界から。何が入り、何が出ていくのか。エントリーポイント(エクスポートされた関数、ルートハンドラ、メインループ)と出口(戻り値、投げられるエラー、データベースやファイルへの書き込み)を見つけます。各行が何をするか尋ねる前に、入力・出力・副作用を挙げてもらいましょう。その1つの質問が地図を描いてくれます。

2周目:具体的な値を1つ、コード全体で追跡します。現実的な入力(たとえば「ordersが空配列のuserオブジェクト」)を選び、1行ずつ追ってもらいます。特定の値を追跡すると、汎用的な要約が塗りつぶしてしまう分岐・破壊的変更・早期リターンが露わになります。

3周目:イディオムに名前を付けます。大半のコードは8割がパターン、2割が判断です。デバウンスのラッパー、指数バックオフ付きリトライループ、リデューサー — パターンに名前が付けば、本当に注意すべきはパターンからの逸脱だけになります。率直に聞きましょう。このうちどこが標準パターンで、どこがそこから外れているのか?

行単位で読むのはその後、しかも3つのパスを経てなお本当に不明瞭な部分だけです。200行のファイルなら、重要な行はたいてい20行ほどしか残りません。`,
				zh: `有经验的工程师不会像读散文那样从头到尾读代码,而是由外向内读。AI 代码解释器也是在你用同样方式驱动它时最有用。

先看边界:什么进,什么出。找到入口(导出的函数、路由处理器、主循环)和出口(返回值、抛出的错误、对数据库或文件的写入)。在问某一行做什么之前,先让工具指出输入、输出和副作用——这一个问题就能画出地形图。

第二遍:让一个具体的值穿过整段代码。挑一个现实的输入(比如 orders 数组为空的 user 对象),让解释器逐行追踪它。追踪具体值会暴露那些泛泛摘要一笔带过的分支、变量修改和提前返回。

第三遍:给惯用法命名。大多数代码 80% 是模式,20% 是决策。防抖包装、指数退避重试循环、reducer——一旦模式被点名,只有偏离模式的地方才需要真正的注意力。直接问:这里哪些是标准模式,哪里偏离了模式?

然后才逐行读,而且只读经过前三遍后仍然真正不清楚的部分。一个 200 行的文件,通常只会剩下 20 行左右值得细看。`
			}
		},
		{
			heading: {
				en: 'What AI Code Explainers Get Wrong',
				ko: 'AI 코드 설명기가 틀리는 지점',
				ja: 'AIコード解説が間違える箇所',
				zh: 'AI 代码解释器会错在哪里'
			},
			body: {
				en: `AI explanations fail in patterns, and the patterns are predictable enough to check for.

Hallucinated APIs are the classic failure: the explanation describes a parameter that does not exist, a method with a similar name from another library, or behavior from a different major version. Models blend the hundreds of libraries they saw in training, so an explanation of a lodash call may quietly describe the Underscore behavior, and an explanation of pandas code may cite an argument removed two versions ago.

Missing side effects are subtler. An explainer summarizes what a function computes but omits that it also mutates its argument, writes to a cache, logs PII, or fires an analytics event. Summaries are biased toward the return value; real-world bugs live in the side effects. Always ask separately: what state does this code change outside its own scope?

Stale idioms cut both ways. Models sometimes call perfectly modern code outdated, and sometimes present deprecated patterns (var, componentWillMount, Python 2 division semantics) as normal, because both eras exist in training data. Treat any claim about current best practice as dated by default.

Finally, confident complexity claims: "this runs in O(n log n)" is exactly the kind of sentence a model generates fluently and incorrectly, especially with hidden loops inside library calls like sort, includes, or spread. If the complexity matters, derive it yourself or ask the model to count operations on a concrete input size rather than assert a formula.`,
				ko: `AI 설명의 오류에는 패턴이 있고, 그 패턴은 점검이 가능할 만큼 예측 가능합니다.

환각된 API가 고전적인 실패입니다. 설명이 존재하지 않는 매개변수, 다른 라이브러리에 있는 비슷한 이름의 메서드, 다른 메이저 버전의 동작을 묘사합니다. 모델은 학습 때 본 수백 개의 라이브러리를 뒤섞기 때문에, lodash 호출에 대한 설명이 슬그머니 Underscore의 동작을 묘사하거나, pandas 코드 설명이 두 버전 전에 제거된 인자를 인용할 수 있습니다.

부수 효과 누락은 더 교묘합니다. 설명기는 함수가 무엇을 계산하는지는 요약하면서, 인자를 변이시키고, 캐시에 쓰고, 개인정보를 로깅하고, 분석 이벤트를 쏘는 것은 빠뜨립니다. 요약은 반환값 쪽으로 치우치는데, 실무의 버그는 부수 효과에 삽니다. 항상 따로 물어보세요. 이 코드가 자기 스코프 밖에서 바꾸는 상태는 무엇인가?

낡은 관용구 문제는 양쪽으로 벱니다. 모델은 멀쩡히 현대적인 코드를 '구식'이라 부르기도 하고, 폐기된 패턴(var, componentWillMount, Python 2 나눗셈 의미론)을 정상인 것처럼 제시하기도 합니다. 두 시대가 모두 학습 데이터에 있기 때문입니다. '현재 모범 사례'에 대한 어떤 주장이든 기본적으로 유효기간이 지났다고 간주하세요.

마지막으로 자신만만한 복잡도 주장. "이건 O(n log n)으로 동작한다"는 모델이 유창하게, 그리고 틀리게 생성하는 전형적인 문장입니다. sort, includes, 스프레드처럼 라이브러리 호출 안에 숨은 루프가 있을 때 특히 그렇습니다. 복잡도가 중요하다면 직접 유도하거나, 공식을 단언하게 하지 말고 구체적인 입력 크기에서 연산 횟수를 세게 하세요.`,
				ja: `AIによる解説の誤りにはパターンがあり、そのパターンはチェックできる程度に予測可能です。

幻覚APIは古典的な失敗です。存在しないパラメータ、別のライブラリにある似た名前のメソッド、別のメジャーバージョンの挙動を説明してしまう。モデルは学習時に見た何百ものライブラリを混ぜ合わせるため、lodashの呼び出しの説明がこっそりUnderscoreの挙動を述べていたり、pandasのコード解説が2バージョン前に削除された引数を引用していたりします。

副作用の欠落はより巧妙です。解説は関数が何を計算するかは要約しても、引数を破壊的に変更する、キャッシュに書き込む、個人情報をログに残す、分析イベントを送るといったことは省きます。要約は戻り値に偏りますが、現実のバグは副作用に住んでいます。必ず別途尋ねてください。このコードは自分のスコープの外でどんな状態を変えるのか?

古いイディオムの問題は両刃です。モデルは完全に現代的なコードを「時代遅れ」と呼ぶこともあれば、廃止されたパターン(var、componentWillMount、Python 2の除算の意味論)を普通のものとして提示することもあります。どちらの時代も学習データに存在するからです。「現在のベストプラクティス」に関する主張は、デフォルトで期限切れとみなしましょう。

最後に、自信満々の計算量の主張。「これはO(n log n)で動く」は、モデルが流暢に、そして間違って生成する典型的な文です。sortやincludes、スプレッドのようにライブラリ呼び出しの中にループが隠れている場合は特に。計算量が重要なら、自分で導出するか、公式を断言させるのではなく具体的な入力サイズで演算回数を数えさせてください。`,
				zh: `AI 解释的错误是有模式的,而且这些模式可预测到足以逐项排查。

幻觉 API 是经典失败:解释描述了一个不存在的参数、另一个库里名字相似的方法,或者另一个大版本的行为。模型会把训练中见过的几百个库混在一起,所以对 lodash 调用的解释可能悄悄描述的是 Underscore 的行为,对 pandas 代码的解释可能引用两个版本前就被移除的参数。

漏掉副作用更隐蔽。解释器总结了函数计算什么,却漏掉它还会修改传入的参数、写缓存、把个人信息写进日志、触发埋点事件。摘要天然偏向返回值,而现实中的 bug 住在副作用里。一定要单独问一句:这段代码在自身作用域之外改变了哪些状态?

过时惯用法的问题是双向的。模型有时把完全现代的代码说成"过时",有时又把已废弃的模式(var、componentWillMount、Python 2 的除法语义)当作正常写法,因为两个时代的代码都在训练数据里。对任何"当前最佳实践"的断言,默认当它已经过期。

最后是信誓旦旦的复杂度断言:"这段代码是 O(n log n)"正是模型会流畅且错误地生成的那类句子,尤其当 sort、includes、展开运算符这些库调用里藏着循环时。如果复杂度真的重要,自己推导,或者让模型在一个具体的输入规模上数操作次数,而不是直接背公式。`
			}
		},
		{
			heading: {
				en: 'Prompting for the Right Depth of Explanation',
				ko: '설명 깊이를 맞추는 프롬프트',
				ja: '説明の深さを合わせるプロンプト',
				zh: '让解释深度恰到好处的提示词'
			},
			body: {
				en: `"Explain this code" produces a paragraph that restates the code in English — technically correct and nearly useless. The fix is to declare what you already know and what decision the explanation must support.

If you are a beginner, ask for an analogy plus a trace: explain what this does using a real-world analogy, then walk one example input through it step by step. Analogies without traces produce vague comfort; traces without analogies produce a wall of state changes.

If you can read the language but not this codebase, skip syntax entirely: assume I know JavaScript well; explain only the intent, the non-obvious decisions, and anything that would surprise a maintainer. This is the single highest-leverage prompt for code review preparation.

If you are debugging, do not ask for an explanation at all — ask for a disagreement: the author believes this function returns a sorted copy; argue for and against that belief with reference to specific lines. Models are noticeably better at finding problems when framed as critics rather than narrators.

The level selector in this tool writes these framings for you; edit the generated prompt to name your actual language experience rather than a generic level.`,
				ko: `'이 코드 설명해 줘'는 코드를 자연어로 다시 읊는 문단을 낳습니다. 기술적으로는 맞지만 거의 쓸모가 없습니다. 해법은 내가 이미 아는 것과 이 설명이 뒷받침해야 할 결정을 선언하는 것입니다.

입문자라면 비유와 추적을 함께 요구하세요. "이 코드가 하는 일을 현실 세계 비유로 설명한 다음, 예시 입력 하나를 단계별로 통과시켜 줘." 추적 없는 비유는 막연한 안심만 주고, 비유 없는 추적은 상태 변화의 벽만 세웁니다.

언어는 읽을 줄 알지만 이 코드베이스가 처음이라면 문법은 통째로 건너뛰세요. "JavaScript는 잘 안다고 가정하고, 의도, 뻔하지 않은 결정, 유지보수자가 놀랄 만한 부분만 설명해 줘." 코드 리뷰 준비에 가장 지렛대 효과가 큰 프롬프트입니다.

디버깅 중이라면 아예 설명을 요구하지 마세요. 반박을 요구하세요. "작성자는 이 함수가 정렬된 복사본을 반환한다고 믿는다. 특정 줄을 근거로 그 믿음에 대한 찬반을 논증해 줘." 모델은 해설자보다 비평가 역할을 줄 때 문제를 눈에 띄게 더 잘 찾습니다.

이 도구의 수준 선택기는 이런 틀을 대신 써 줍니다. 생성된 프롬프트를 편집해 뭉뚱그린 수준 대신 실제 언어 경험을 명시하세요.`,
				ja: `「このコードを説明して」は、コードを自然言語で言い直しただけの段落を生みます。技術的には正しく、ほとんど役に立ちません。解決策は、自分が既に知っていることと、その説明が支えるべき判断を宣言することです。

初心者なら、比喩とトレースをセットで要求しましょう。「このコードがすることを現実世界の比喩で説明し、次に例の入力を1つ、ステップごとに通してみせて」。トレースのない比喩は漠然とした安心感しか与えず、比喩のないトレースは状態変化の壁を築くだけです。

言語は読めるがこのコードベースは初めてなら、構文は丸ごと飛ばします。「JavaScriptはよく知っている前提で、意図、自明でない判断、保守者が驚きそうな箇所だけを説明して」。コードレビューの準備において、最もレバレッジの効くプロンプトです。

デバッグ中なら、説明ではなく反論を求めてください。「作者はこの関数がソート済みのコピーを返すと信じている。特定の行を根拠に、その信念への賛否を論じて」。モデルは語り手より批評家として振る舞わせたときのほうが、目に見えて問題を見つけるのが上手くなります。

このツールのレベル選択は、こうした枠組みを代わりに書いてくれます。生成されたプロンプトを編集し、漠然としたレベルではなく実際の言語経験を明記してください。`,
				zh: `"解释一下这段代码"只会得到一段把代码翻译成自然语言的文字——技术上正确,几乎没用。解决办法是声明你已经知道什么,以及这个解释要支撑什么决定。

如果你是初学者,要求比喻加追踪:"用一个现实世界的比喻解释这段代码做什么,然后把一个示例输入一步步走一遍。"没有追踪的比喻只给模糊的安心感;没有比喻的追踪只是一堵状态变化之墙。

如果你懂这门语言但不熟这个代码库,直接跳过语法:"假设我精通 JavaScript,只解释意图、不显然的设计决定,以及会让维护者惊讶的地方。"这是准备代码评审时杠杆率最高的一条提示词。

如果你在调试,干脆不要要解释,要一场反驳:"作者相信这个函数返回排序后的副本;请引用具体行号,论证支持和反对这个信念的理由。"把模型摆在批评者而非解说员的位置上,它找问题的能力明显更强。

这个工具的难度选择器会替你写好这些框架;编辑生成的提示词,把笼统的水平换成你真实的语言经验。`
			},
			code: {
				example: `Instead of:
"Explain this code."

Try:
"I know Python well but have never used asyncio.
1. What is the intent of this function in one sentence?
2. Trace the input [3, 1, 2] through it line by line.
3. List every side effect (I/O, mutation, global state).
4. What would surprise a maintainer? What could break
   under concurrency?
Do not explain basic syntax."`
			}
		},
		{
			heading: {
				en: 'Worked Example: A Restated Explanation vs a Useful One',
				ko: '실전 예시: 받아쓰기 설명 vs 쓸모 있는 설명',
				ja: '実例:言い直しの説明と役に立つ説明',
				zh: '实例对比:复述式解释与有用的解释'
			},
			body: {
				en: `Consider a five-line function that most explainers describe the same shallow way. The snippet below deduplicates users by email and keeps the last occurrence.

A restated explanation says: this function iterates over the users array, builds a Map keyed by email, and returns the Map values as an array. Every word is true. Nothing is useful — it is the code, read aloud.

A useful explanation answers the questions the code raises. Why a Map instead of a Set or an object? (Maps preserve insertion order and allow any key type; here order is the point.) Why does the last duplicate win? (Map.set overwrites, so later entries replace earlier ones — if the array is sorted oldest-first, this silently keeps the newest record, which may or may not be intended.) What are the sharp edges? (Emails differing only by case are treated as distinct; undefined emails collapse into one bucket; the function allocates a new array but the user objects inside are shared references, so mutating them affects the caller.)

That last paragraph is what you should demand from any explainer: not what the code does, but what it decides, what it assumes, and where it can hurt you. If an explanation contains no sentence beginning with "note that" or "be careful", ask again.`,
				ko: `대부분의 설명기가 똑같이 얕게 설명하는 다섯 줄짜리 함수를 봅시다. 아래 스니펫은 이메일 기준으로 사용자를 중복 제거하되 마지막 항목을 남깁니다.

받아쓰기 설명은 이렇게 말합니다. "이 함수는 users 배열을 순회하며 이메일을 키로 하는 Map을 만들고, Map의 값들을 배열로 반환한다." 모든 단어가 사실입니다. 그리고 아무것도 유용하지 않습니다. 코드를 소리 내어 읽은 것뿐입니다.

쓸모 있는 설명은 코드가 던지는 질문에 답합니다. 왜 Set이나 객체가 아니라 Map인가? (Map은 삽입 순서를 보존하고 어떤 키 타입도 허용합니다. 여기서는 순서가 핵심입니다.) 왜 마지막 중복이 이기는가? (Map.set은 덮어쓰므로 뒤의 항목이 앞의 것을 대체합니다. 배열이 오래된 순으로 정렬돼 있다면 이 코드는 조용히 최신 레코드를 남기는데, 의도일 수도 아닐 수도 있습니다.) 날카로운 모서리는 어디인가? (대소문자만 다른 이메일은 서로 다른 것으로 취급되고, undefined 이메일은 한 버킷으로 뭉개지며, 반환 배열은 새것이지만 안의 user 객체는 공유 참조라서 변이시키면 호출자에게 영향이 갑니다.)

마지막 문단이 바로 모든 설명기에게 요구해야 할 것입니다. 코드가 무엇을 하는가가 아니라, 무엇을 결정하고, 무엇을 가정하고, 어디서 당신을 다치게 할 수 있는가. 설명에 "주의할 점"으로 시작하는 문장이 하나도 없다면 다시 물어보세요.`,
				ja: `ほとんどの解説ツールが同じように浅く説明する、5行の関数を見てみましょう。下のスニペットはメールアドレスでユーザーを重複排除し、最後の出現を残します。

言い直しの説明はこう言います。「この関数はusers配列を反復し、メールアドレスをキーとするMapを構築し、Mapの値を配列として返す」。一語一句正しい。そして何も役に立ちません。コードを音読しただけです。

役に立つ説明は、コードが投げかける疑問に答えます。なぜSetやオブジェクトではなくMapなのか?(Mapは挿入順を保持し任意のキー型を許します。ここでは順序こそが要点です。)なぜ最後の重複が勝つのか?(Map.setは上書きするので、後の要素が前の要素を置き換えます。配列が古い順に並んでいれば、このコードは静かに最新レコードを残します。それが意図かどうかは別問題です。)鋭い角はどこか?(大文字小文字だけ違うメールは別物として扱われ、undefinedのメールは1つのバケツに潰れ、返される配列は新しくても中のuserオブジェクトは共有参照なので、変更すると呼び出し元に影響します。)

この最後の段落こそ、あらゆる解説ツールに要求すべきものです。コードが何をするかではなく、何を決め、何を仮定し、どこであなたを傷つけ得るか。説明の中に「注意点」で始まる文が1つもなければ、もう一度聞き直してください。`,
				zh: `来看一个五行的函数,大多数解释器都会用同样肤浅的方式描述它。下面的代码按邮箱去重用户,保留最后一次出现的记录。

复述式解释会说:"这个函数遍历 users 数组,构建一个以邮箱为键的 Map,然后把 Map 的值作为数组返回。"每个字都对,但毫无用处——这只是把代码朗读了一遍。

有用的解释回答代码引出的问题。为什么用 Map 而不是 Set 或普通对象?(Map 保留插入顺序、允许任意键类型;这里顺序正是重点。)为什么最后一个重复项获胜?(Map.set 会覆盖,后面的条目替换前面的——如果数组按从旧到新排序,这段代码会悄悄保留最新记录,这可能是意图,也可能不是。)锋利的边缘在哪?(只有大小写不同的邮箱被当作两个人;undefined 邮箱全被塌缩进一个桶;返回的数组是新的,但里面的 user 对象是共享引用,改它们会影响调用方。)

最后那段才是你该向任何解释器索要的东西:不是代码做了什么,而是它决定了什么、假设了什么、会在哪里伤到你。如果一份解释里没有一句以"注意"开头的话,就再问一次。`
			},
			code: {
				example: `function dedupeUsers(users) {
  const byEmail = new Map();
  for (const u of users) byEmail.set(u.email, u);
  return [...byEmail.values()];
}

Shallow: "Builds a Map keyed by email and returns its values."

Useful:  "Keeps the LAST user per email (Map.set overwrites).
          Case-sensitive: A@x.com and a@x.com stay separate.
          Returned array is new, but user objects are shared
          references — mutating them affects the original."`
			}
		},
		{
			heading: {
				en: 'A Two-Minute Verification Routine',
				ko: '2분 검증 루틴',
				ja: '2分でできる検証ルーチン',
				zh: '两分钟核查流程'
			},
			body: {
				en: `Treat every AI explanation as a draft from a confident intern: usually right, occasionally wrong in ways that matter, never aware of the difference.

Check named APIs against real documentation — not against the model memory. If the explanation hinges on what a specific function does (parseInt without a radix, Array.sort mutating in place, a library default), the docs check takes thirty seconds and catches the most damaging errors.

Run the trace. If the explainer walked an input through the code, actually execute that input in a REPL or a scratch test and compare. A divergence between the narrated trace and the real output is the strongest possible signal the explanation is wrong.

Cross-examine the risky claims. For anything about concurrency, mutation, error handling, or performance, ask the same question again in a fresh session, phrased differently. Consistent answers are weak evidence of correctness; inconsistent answers are strong evidence that you are looking at a guess.

None of this is much work — and the alternative, shipping code you understand only through an unverified paraphrase, is how subtle production bugs are born.`,
				ko: `모든 AI 설명을 자신감 넘치는 인턴의 초안으로 취급하세요. 대체로 맞고, 가끔 중요한 지점에서 틀리며, 그 차이를 스스로는 절대 모릅니다.

언급된 API는 실제 문서와 대조하세요. 모델의 기억이 아니라요. 설명이 특정 함수의 동작(radix 없는 parseInt, 제자리에서 변이하는 Array.sort, 라이브러리 기본값)에 걸려 있다면, 문서 확인은 30초면 되고 가장 치명적인 오류를 잡아냅니다.

추적을 실행해 보세요. 설명기가 입력을 코드에 통과시켰다면, 그 입력을 REPL이나 임시 테스트에서 실제로 실행해 비교하세요. 서술된 추적과 실제 출력의 불일치는 설명이 틀렸다는 가장 강력한 신호입니다.

위험한 주장은 교차 심문하세요. 동시성, 변이, 에러 처리, 성능에 관한 내용은 새 세션에서 표현을 바꿔 같은 질문을 다시 하세요. 일관된 답은 정확성의 약한 증거이고, 일관되지 않은 답은 지금 보고 있는 것이 추측이라는 강한 증거입니다.

어느 것도 큰 수고가 아닙니다. 대안 — 검증되지 않은 의역으로만 이해한 코드를 배포하는 것 — 이 바로 미묘한 프로덕션 버그가 태어나는 방식입니다.`,
				ja: `すべてのAI解説を、自信満々のインターンの下書きとして扱ってください。だいたい正しく、ときどき重要な箇所で間違え、その違いを自分では決して認識しません。

言及されたAPIは実際のドキュメントと照合しましょう。モデルの記憶とではなく。説明が特定の関数の挙動(radixなしのparseInt、その場で破壊的にソートするArray.sort、ライブラリのデフォルト値)に懸かっているなら、ドキュメント確認は30秒で済み、最も被害の大きい誤りを捕まえられます。

トレースを実行してみましょう。解説ツールが入力をコードに通してみせたなら、その入力をREPLや使い捨てテストで実際に実行して比較します。語られたトレースと実際の出力のずれは、説明が間違っているという最強のシグナルです。

危険な主張は反対尋問にかけます。並行処理・破壊的変更・エラー処理・性能に関する内容は、新しいセッションで表現を変えて同じ質問をもう一度。一貫した答えは正しさの弱い証拠であり、一貫しない答えは、いま見ているものが当て推量だという強い証拠です。

どれも大した手間ではありません。その代わりに、検証されていない言い換えだけで理解したコードを出荷すること — それこそが、微妙な本番バグの生まれ方です。`,
				zh: `把每一份 AI 解释都当作一位自信实习生的草稿:通常是对的,偶尔在要命的地方出错,而且永远意识不到两者的区别。

被点名的 API 要对照真实文档核查——而不是对照模型的记忆。如果解释的成立依赖某个具体函数的行为(不带基数的 parseInt、原地排序的 Array.sort、某个库的默认值),查文档只要三十秒,却能抓住危害最大的错误。

把追踪跑一遍。如果解释器演示了某个输入穿过代码的过程,就在 REPL 或临时测试里真的执行这个输入并对比。叙述出的轨迹与真实输出不一致,是解释有误的最强信号。

对高风险断言交叉盘问。凡是涉及并发、变量修改、错误处理或性能的内容,换个措辞在新会话里再问一遍。一致的回答只是正确性的弱证据;不一致的回答则是强证据,说明你看到的是猜测。

这些都花不了多少功夫——而另一种选择,即只凭一段未经验证的转述去理解并上线代码,正是隐蔽生产事故的诞生方式。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let code = '';
	let language = 'JavaScript';
	type LevelType = 'beginner' | 'intermediate' | 'advanced';
	let level: LevelType = 'beginner';
	let output = '';
	let copied = false;

	const languages = [
		'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#',
		'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin'
	];

	function explain() {
		if (!code.trim()) return;

		const levelGuide = {
			beginner: 'Explain this code as if I am a complete beginner with no programming experience. Use simple analogies and avoid technical jargon.',
			intermediate: 'Explain this code assuming I understand basic programming concepts like variables, loops, and functions.',
			advanced: 'Provide a technical explanation including time/space complexity, design patterns used, and potential optimizations.'
		};

		output = `Please explain this ${language} code:\n\n\`\`\`${language.toLowerCase()}\n${code}\n\`\`\`\n\n${levelGuide[level]}`;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		code = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('code.title')} - SDK.ac</title>
	<meta name="description" content={t('code.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('code.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('code.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Code Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('code.input')}
			</label>
			<textarea
				bind:value={code}
				placeholder={t('code.inputPlaceholder')}
				class="w-full h-48 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none font-mono text-sm transition-colors"
			></textarea>
		</div>

		<!-- Language Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('code.language')}
			</label>
			<select
				bind:value={language}
				class="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
			>
				{#each languages as lang}
					<option value={lang}>{lang}</option>
				{/each}
			</select>
		</div>

		<!-- Level Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('code.level')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['beginner', 'intermediate', 'advanced'] as lv}
					<button
						on:click={() => level = lv as LevelType}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {level === lv
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`code.levels.${lv}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={explain}
				disabled={!code.trim()}
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
						{t('code.result')}
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
